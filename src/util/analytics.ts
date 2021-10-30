import axios from "axios";
require("dotenv").config();

export const event_data = (type: string, value: string) => ({
	payload: {
		website: "85a85c8e-fe40-4011-a12c-0af38ca298e0",
		url: "/",
		event_type: type,
		event_value: value,
		hostname: "https://carbon-slack.fayd.me",
		language: "en-US",
		screen: "1920x1080",
	},
	type: "event",
});

export const sendEvent = async (type: string, value: string) =>
	await axios.post(`${process.env.UMAMI}/api/collect`, event_data(type, value), {
		headers: { "User-Agent": "carbon-slack/2.1.0" },
	});
