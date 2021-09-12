import randomHex from "random-hex";

export const getColor = () => {
	const defaultHex = randomHex.generate().split("#")[1];
	return {
		type: "input",
		block_id: "color_input",
		label: {
			type: "plain_text",
			text: "Background Color:",
		},
		element: {
			type: "plain_text_input",
			action_id: "color",
			max_length: 6,
			placeholder: {
				type: "plain_text",
				text: "Hex Code (Without #)",
			},
			initial_value: defaultHex,
		},
	};
};
