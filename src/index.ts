require("dotenv").config();
import { App, ExpressReceiver } from "@slack/bolt";
import express from "express";
import _ from "lodash";
import path from "path";
import { deleteInstallation, fetchInstallation, storeInstallation } from "./authorize";
import { stump } from "./constants";
import { sendEvent } from "./util/analytics";
import removeSpecialTags from "./util/preventPings";
import home, { helpText } from "./views/home";
import { Modal } from "./views/modal";

let channel = {};
const PORT = parseInt(process.env.PORT) || 5000;

const receiver = new ExpressReceiver({
	signingSecret: process.env.SLACK_SIGNING_SECRET,
	clientId: process.env.SLACK_CLIENT_ID,
	clientSecret: process.env.SLACK_CLIENT_SECRET,
	scopes: ["channels:read", "chat:write", "chat:write.public", "commands", "team:read"],
	stateSecret: process.env.STATE_SECRET,
	installerOptions: {
		redirectUriPath: "/slack/oauth_redirect",
		installPath: "/slack/install",
		userScopes: "files:write",
	},
	installationStore: { storeInstallation, fetchInstallation, deleteInstallation },
});

const app = new App({ receiver });

receiver.router.use("/images", express.static(path.join(__dirname, "../static/images")));
receiver.router.use("/css", express.static(path.join(__dirname, "../static/css")));
receiver.router.get("/", (_, res) =>
	res.sendFile(path.join(__dirname, "../static/html/index.html"))
);
receiver.router.get("/privacy-policy", (_, res) =>
	res.sendFile(path.join(__dirname, "../static/html/privacy-policy.html"))
);
receiver.router.get("/terms-of-service", (_, res) =>
	res.sendFile(path.join(__dirname, "../static/html/terms-of-service.html"))
);

app.command("/carbon", async ({ ack, body, client, command, respond }) => {
	await ack();
	channel[body.user_id] = body.channel_id;

	try {
		if (command.text.trim().toLowerCase() === "help") {
			await respond({ response_type: "ephemeral", text: helpText });
			return;
		}

		await client.views.open({ trigger_id: body.trigger_id, view_id: body.view_id, view: Modal() });
		await sendEvent('command', '/carbon');
	} catch (err) {
		stump.error(err);
	}
});

app.view("modal_view_1", async ({ ack, view, client, body }) => {
	await ack();

	const values = view.state.values;
	const message = removeSpecialTags(values.message_input.message.value);
	const code = removeSpecialTags(values.code_input.code.value);
	const backgroundColor = values.color_input.color.value;
	const theme = _.get(values, 'theme_input["theme_select-action"].selected_option.value');
	const language = _.get(values, 'lang_input["language_select-action"].selected_option.value');
	const fontFamily = _.get(values, 'ff_input["font_select-action"]?.selected_option?.value');

	// const data = { code: encodeURIComponent(code), backgroundColor, language, theme, fontFamily };
	// const url = await getImage(data, client, body);

	const url = `https://carbon-api.caprover.fayd.me?code=${encodeURIComponent(code)}&theme=${theme}&backgroundColor=${backgroundColor}&language=${language}&fontFamily=${fontFamily}`;

	try {
		await sendEvent("submit", "image-posted");
		await client.chat.postMessage({
			channel: channel[body.user.id],
			blocks: [
				{
					type: "section",
					text: {
						type: "mrkdwn",
						text: message,
					},
				},
				{
					type: "image",
					image_url: url,
					alt_text: "carbon_image",
				},
				{
					type: "actions",
					elements: [
						{
							type: "button",
							text: {
								type: "plain_text",
								text: "Copy Code",
							},
							value: code,
							action_id: "copy_code",
						},
					],
				},
				{
					type: "context",
					elements: [
						{
							type: "mrkdwn",
							text: `:sparkles: Created with \`/carbon\` by <@${body.user.name}>`,
						},
					],
				},
			],
			text: `<@${body.user.name}>: ${message}`,
		});
	} catch (err) {
		stump.error(err);
		app.client.chat.postEphemeral({
			user: body.user.id,
			channel: channel[body.user.id],
			text: `<An unexpected error occured: ${err.message}`,

		});
	} finally {
		delete channel[body.user.id];
	}
});

app.action("theme_select-action", async ({ ack }) => await ack());
app.action("font_select-action", async ({ ack }) => await ack());
app.action("language_select-action", async ({ ack }) => await ack());
app.event("app_home_opened", async ({ client, event }) => {
	await client.views.publish({ user_id: event.user, view: home });
});

app.action("copy_code", async ({ body, ack, client, payload }) => {
	await ack();
	await client.chat.postEphemeral({
		channel: body.channel.id,
		user: body.user.id,
		text: `:sparkles: Copy this code: \n \`\`\`${(payload as any).value}\`\`\``,
	});
});

app.shortcut("delete_carbon", async ({ body, ack, client, payload }) => {
	await ack();
	const deleteRequester = payload.user.id;
	console.log((payload as any).message.blocks[0].text)
	const originalSender = (payload as any).message.blocks[0].text.text.split("<@")[1].split(">:")[0];
	const ts = (payload as any).message.ts;
	const channel = (payload as any).channel.id;

	if (deleteRequester === originalSender) await client.chat.delete({ ts, channel });
});

(async () => {
	await app.start(PORT);
	stump.info("⚡️ Bolt app is running! PORT= ", PORT);
})();
