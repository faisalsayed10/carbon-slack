import { View } from "@slack/bolt";
require("dotenv").config();

export const helpText = `:wave: Hey! This is Carbon for Slack.
It integrates the core functionality of <https://carbon.now.sh|carbon-app> into a Slack bot and makes it possible for you to create and share beautiful images of your code directly in Slack.

How to use it?

1. Invoke the \`/carbon\` command (*IMPORTANT*: invoke the command only where you want to post your code because the image will be directly posted once you submit)
*NOTE: Inorder to invoke this command in private channel, the bot must be added as a member of the channel.*

2. Add your desired code, theme, font, background in the appropriate fields.

3. Click Submit.

4. Wait for a few seconds and voila!

For more information, check out <https://carbon-slack.fayd.me|Carbon for Slack's Website>.`;

export const errorText = `Hey, it seems like something went wrong and the command couldn't be invoked.
If you're invoking this command in a *private channel*, make sure you've *added the bot* to that channel.`;

export default {
	type: "home",
	blocks: [
		{
			type: "section",
			text: { type: "mrkdwn", text: helpText },
		},
		{
			type: "context",
			elements: [
				{
					type: "image",
					image_url: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
					alt_text: "github's octocat",
				},
				{
					type: "mrkdwn",
					text: "This Slack bot is fully open-sourced at <https://github.com/faisalsayed10/carbon-slack/|faisalsayed10/carbon-slack>",
				},
			],
		},
	],
} as View;
