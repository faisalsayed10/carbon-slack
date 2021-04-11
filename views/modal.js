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
		submit: {
		type: "plain_text",
		text: "Submit",
		emoji: true
	},
	close: {
		type: "plain_text",
		text: "Cancel",
		emoji: true
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
