require("dotenv").config();
const { App } = require("@slack/bolt");
const getImage = require("./util/getImage");
const Modal = require("./views/modal");

let channel = {};

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
      view: Modal,
    });
  } catch (error) {
    console.error(error);
  }
});

app.view("modal_view_1", async ({ ack, view, client, body }) => {
  await ack();
  const values = view.state.values;
  const message = values.message_input.message.value;
  const code = values.code_input.code.value;
  const backgroundColor = values.color_input.color.value;
  const theme =
    values.theme_input["theme_select-action"]?.selected_option?.value;
  const language =
    values.lang_input["language_select-action"]?.selected_option?.value;
  const fontFamily =
    values.ff_input["font_select-action"]?.selected_option?.value;

  const data = { code, backgroundColor, language, theme, fontFamily };

  const url = await getImage(
    data,
    client,
    body.user.id,
    channel[body.user.id],
    message
  );

  await client.chat.postMessage({
    token: process.env.SLACK_USER_TOKEN,
    channel: channel[body.user.id],
    blocks: [
      {
        type: "section",
        text: {
          type: "plain_text",
          text: message,
          emoji: true,
        },
      },
      {
        type: "image",
        image_url: url,
        alt_text: "carbon_image",
      },
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

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Bolt app is running!");
})();
