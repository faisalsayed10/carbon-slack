const code = {
  type: "input",
  block_id: "code_input",
  label: {
    type: "plain_text",
    text: "Enter your code:",
  },
  element: {
    type: "plain_text_input",
    action_id: "code",
    multiline: true,
    min_length: 1,
    placeholder: {
      type: "plain_text",
      text: "console.log('Hello')",
    },
  },
};

module.exports = code