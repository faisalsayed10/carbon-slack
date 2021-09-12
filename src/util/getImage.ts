import { SlackViewAction, ViewStateValue } from "@slack/bolt";
import { WebClient } from "@slack/web-api";
import fetch from "node-fetch";
import { v4 } from "uuid";
import uploadFile from "./uploadFile";
require("dotenv").config();

type Data = {
	code: string;
	backgroundColor: string;
	language: { [actionId: string]: ViewStateValue };
	theme: { [actionId: string]: ViewStateValue };
	fontFamily: { [actionId: string]: ViewStateValue };
};

export default async (data: Data, client: WebClient, userId: string, body: SlackViewAction) => {
	let filename = {};
	filename[userId] = `${v4()}.png`;

	const response = await fetch("https://carbonnowsh.herokuapp.com/", {
		method: "post",
		body: JSON.stringify(data),
		headers: { "Content-Type": "application/json" },
	});

	return uploadFile(client, filename[userId], body, response);
};
