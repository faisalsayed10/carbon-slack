const { FONTS } = require("../../constants");

const fontFamily = {
  type: "section",
  block_id: "ff_input",
  text: {
    type: "mrkdwn",
    text: "Font Family:",
  },
  accessory: {
    type: "static_select",
    placeholder: {
      type: "plain_text",
      text: "Select an item",
    },
    options: FONTS,
    action_id: "font_select-action",
  },
};

module.exports = fontFamily