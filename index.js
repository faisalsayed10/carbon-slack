require("dotenv").config();
const { App } = require("@slack/bolt");
const getImage = require("./util/getImage");
const Modal = require("./views/modal");
const _ = require('lodash')
const { removeSpecialTags } = require("./util/preventPings");
const { db } = require("./constants");

let channel = {};
const admin = "U014ND5P1N2";

const app = new App({
	token: process.env.SLACK_BOT_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.command("/carbon", async ({ ack, body, client }) => {
	await ack();

	channel[body.user_id] = body.channel_id;

	try {
		await client.views.open({
			trigger_id: body.trigger_id,
			view_id: body.view_id,
			view: Modal(),
		});
	} catch (error) {
		console.error(error);
	}
});

app.view("modal_view_1", async ({ ack, view, client, body }) => {
	await ack();
	const tokens = await db.get(body.team.id);

	const values = view.state.values;
	const message =  removeSpecialTags(values.message_input.message.value);
	const code = removeSpecialTags(values.code_input.code.value);
	const backgroundColor = values.color_input.color.value;
	const theme = _.get(values, 'theme_input["theme_select-action"].selected_option.value')
	const language = _.get(values, 'lang_input["language_select-action"].selected_option.value')
	const fontFamily = _.get(values, 'ff_input["font_select-action"]?.selected_option?.value')

	const data = { code: encodeURIComponent(code), backgroundColor, language, theme, fontFamily };

	const url = await getImage(
		data,
		client,
		body.user.id,
		body.team.id
	);

	await client.chat.postMessage({
		token: (tokens && tokens.bot_token) || process.env.SLACK_BOT_TOKEN,
		channel: channel[body.user.id],
		blocks: [
			{
				type: "section",
				text: {
					type: "mrkdwn",
					text: `<@${body.user.name}>: ${message}`,
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
							text: "Copy Code"
						},
						value: code,
						action_id: "copy_code"
					}
				]
			},
			{
				type: "context",
				elements: [
					{
						type: "mrkdwn",
						text: ":sparkles: Created with `/carbon`"
					}
				]
			}
		],
	});

	delete channel[body.user.id];
});

app.action("theme_select-action", async ({ ack }) => {
	await ack();
});

app.action("font_select-action", async ({ ack }) => {
	await ack();
});

app.action("language_select-action", async ({ ack }) => {
	await ack();
});

app.action('copy_code', async ({ body, ack, client, payload }) => {
	await ack();
	const tokens = await db.get(body.team.id);
	await client.chat.postEphemeral({
		token: (tokens && tokens.bot_token) || process.env.SLACK_BOT_TOKEN,
		channel: body.channel.id,
		user: body.user.id,
		text: `:sparkles: Copy this code: \n \`\`\`${payload.value}\`\`\``
	})
});

app.shortcut('delete_carbon', async ({ body, ack, client, payload }) => {
	await ack();
	const tokens = await db.get(body.team.id);
	const deleteRequester = payload.user.id;
	const originalSender = payload.message.blocks[0].text.text.split('<@')[1].split('>:')[0]
	const ts = payload.message.ts
	const channel = payload.channel.id

	if (deleteRequester === originalSender || deleteRequester === admin) {
		await client.chat.delete({
			token: (tokens && tokens.bot_token) ||process.env.SLACK_BOT_TOKEN,
			ts,
			channel,
	 })
	}
});

(async () => {
	await app.start(process.env.PORT || 3000);
	console.log("⚡️ Bolt app is running!");
})();
