const code = require("./blocks/code");
const color = require("./blocks/color");
const fontFamily = require("./blocks/font-family");
const language = require("./blocks/language");
const theme = require("./blocks/theme");

const Modal = {
  type: "modal",
  title: {
    type: "plain_text",
    text: "Carbon",
    emoji: true,
  },
  blocks: [
    code,
    color,
    { type: "divider" },
    theme,
    language,
    fontFamily,
  ],
};

module.exports = Modal
