import axios from "axios";
require("dotenv").config();

export const event_data = (type: string, value: string) => ({
	payload: {
		website: "fb96c1ac-76ff-4a7f-af17-4d47f24d6f2f",
		url: "/",
		event_type: type,
		event_value: value,
		hostname: "https://carbon-slack.fayd.me",
		language: "en-US",
		screen: "1920x1080",
	},
	type: "event",
});

export const sendEvent = async (type: string, value: string) => {
	try {
		await axios.post(`${process.env.UMAMI}/api/collect`, event_data(type, value), {
			headers: { "User-Agent": "carbon-slack/2.1.0" },
		});
	} catch (err) { }
}
