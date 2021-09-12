import { THEMES } from "../../constants";

export default {
	type: "section",
	block_id: "theme_input",
	text: {
		type: "mrkdwn",
		text: "Theme:",
	},
	accessory: {
		type: "static_select",
		placeholder: {
			type: "plain_text",
			text: "Select an item",
			emoji: true,
		},
		options: THEMES,
		action_id: "theme_select-action",
	},
};
