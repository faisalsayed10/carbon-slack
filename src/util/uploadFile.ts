import { SlackViewAction } from "@slack/bolt";
import { WebClient } from "@slack/web-api";
import { Readable } from "stream";
import { installationStore } from "../constants";
import getPublicURL from "./getPublicURL";
require("dotenv").config();

export default async (client: WebClient, body: SlackViewAction, res) => {
	const isEnterprise = body.is_enterprise_install && body.enterprise !== undefined;
	const installation = await installationStore.get(isEnterprise ? body.enterprise.id : body.team.id);
	const buffer = await res.buffer();
	const stream = bufferToStream(buffer);

	const uploadRes = await client.files.upload({
		token: (installation as any).user.token,
		file: stream,
		title: "carbon_image",
	});

	const { file } = await client.files.sharedPublicURL({
		token: (installation as any).user.token,
		file: uploadRes.file.id,
	});

	return getPublicURL(file.permalink_public, file.id, file.name);
};

function bufferToStream(binary) {
	const readableInstanceStream = new Readable({
		read() {
			this.push(binary);
			this.push(null);
		},
	});

	return readableInstanceStream;
}
