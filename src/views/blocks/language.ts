import { LANGUAGES } from "../../constants";

export default {
	type: "section",
	block_id: "lang_input",
	text: {
		type: "mrkdwn",
		text: "Language:",
	},
	accessory: {
		type: "static_select",
		placeholder: {
			type: "plain_text",
			text: "Select an item",
			emoji: true,
		},
		options: LANGUAGES,
		action_id: "language_select-action",
	},
};
