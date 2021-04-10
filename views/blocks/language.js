const language = {
  type: "section",
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
    options: [
      {
        text: {
          type: "plain_text",
          text: "*this is plain_text text*",
          emoji: true,
        },
        value: "value-0",
      },
      {
        text: {
          type: "plain_text",
          text: "*this is plain_text text*",
          emoji: true,
        },
        value: "value-1",
      },
      {
        text: {
          type: "plain_text",
          text: "*this is plain_text text*",
          emoji: true,
        },
        value: "value-2",
      },
    ],
    action_id: "static_select-action",
  },
};

module.exports = language