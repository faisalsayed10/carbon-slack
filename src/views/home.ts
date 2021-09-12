import { View } from "@slack/bolt";
require("dotenv").config();

export default {
	type: "home",
	blocks: [
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: `:wave: Hey! This is Carbon for Slack.
				It integrates the core functionality of <https://carbon.now.sh|carbon-app> into a slackbot and makes it possible for you to create and share beautiful images of your code directly in Slack.
				
				How to use it?
				
				1. Invoke the \`/carbon\` command (IMPORTANT: invoke the command only where you want to post your code because the image will be directly posted once you submit)
				
				2. Add your desired code, theme, font, background in the appropriate fields.
				
				3. Click Submit.
				
				4. Wait for a few seconds and voila!
				
				For more information, check out <https://carbon-slack.fayd.me|Carbon for Slack's Website>.`,
			},
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
					text: "This Slackbot is fully open-sourced at <https://github.com/faisalsayed10/carbon-slack/|faisalsayed10/carbon-slack>",
				},
			],
		},
	],
} as View;
