require("dotenv").config();
const { App } = require("@slack/bolt");
const Modal = require("./views/modal");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.command("/carbon", async ({ ack, body, client }) => {
  await ack();
  try {
    const result = await client.views.open({
      trigger_id: body.trigger_id,
      view: Modal,
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Bolt app is running!");
})();
