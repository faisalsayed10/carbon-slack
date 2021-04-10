const { FONTS } = require("../../constants");

const fontFamily = {
  type: "section",
  text: {
    type: "mrkdwn",
    text: "Font Family:",
  },
  accessory: {
    type: "static_select",
    placeholder: {
      type: "plain_text",
      text: "Select an item"
    },
    options: FONTS,
    action_id: "font_select-action",
  },
};

module.exports = fontFamily