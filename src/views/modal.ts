import { View } from "@slack/bolt";
import code from "./blocks/code";
import { getColor } from "./blocks/color";
import fontFamily from "./blocks/font-family";
import language from "./blocks/language";
import message from "./blocks/message";
import theme from "./blocks/theme";

export const Modal: () => View = () => ({
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
