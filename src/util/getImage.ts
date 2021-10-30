import { SlackViewAction, ViewStateValue } from "@slack/bolt";
import { WebClient } from "@slack/web-api";
import fetch from "node-fetch";
import uploadFile from "./uploadFile";
require("dotenv").config();

type Data = {
	code: string;
	backgroundColor: string;
	language: { [actionId: string]: ViewStateValue };
	theme: { [actionId: string]: ViewStateValue };
	fontFamily: { [actionId: string]: ViewStateValue };
};

export default async (data: Data, client: WebClient, body: SlackViewAction) => {
	const response = await fetch("https://carbon-slack-api.herokuapp.com/", {
		method: "post",
		body: JSON.stringify(data),
		headers: { "Content-Type": "application/json" },
	});

	return uploadFile(client, body, response);
};
