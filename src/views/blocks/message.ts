export default {
  type: "input",
  block_id: "message_input",
  label: {
    type: "plain_text",
    text: "Enter message to be attached:",
  },
  element: {
    type: "plain_text_input",
    action_id: "message",
    multiline: true,
  },
};
