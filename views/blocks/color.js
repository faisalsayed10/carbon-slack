const color = {
  type: "input",
  block_id: "input_d",
  label: {
    type: "plain_text",
    text: "Background Color:",
  },
  element: {
    type: "plain_text_input",
    action_id: "dreamy_input",
    max_length: 6,
    placeholder: {
      type: "plain_text",
      text: "Hex Code (Without #)",
    },
  },
};

module.exports = color
