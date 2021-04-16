const code = require("./blocks/code");
const getColor = require("./blocks/color");
const fontFamily = require("./blocks/font-family");
const language = require("./blocks/language");
const message = require("./blocks/message");
const theme = require("./blocks/theme");

const Modal = () => ({
  type: "modal",
  callback_id: "modal_view_1",
  title: {
    type: "plain_text",
    text: "Carbon",
    emoji: true,
  },
  submit: {
    type: "plain_text",
    text: "Submit",
    emoji: true,
  },
  close: {
    type: "plain_text",
    text: "Cancel",
    emoji: true,
  },
  blocks: [message, code, getColor(), { type: "divider" }, theme, language, fontFamily],
});

module.exports = Modal;
