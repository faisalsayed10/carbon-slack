const getPublicURL = require("./getPublicURL");
const { createReadStream, unlink } = require("fs");
require("dotenv").config();
const { db } = require("../constants");

const uploadFile = async (client, filename, teamId) => {
	console.log(teamId);
	const tokens = await db.get(teamId);

  const uploadRes = await client.files.upload({
    token: (tokens && tokens.user_token) || process.env.SLACK_USER_TOKEN,
    file: createReadStream(filename),
    title: "carbon_image",
  });

  const { file } = await client.files.sharedPublicURL({
    token: (tokens && tokens.user_token) || process.env.SLACK_USER_TOKEN,
    file: uploadRes.file.id,
  });

  // delete the file once uploaded
  unlink(filename, (err) => {
    if (err) {
      console.error(err);
    }
  });

  return getPublicURL(file.permalink_public, file.id, file.name);
};

module.exports = uploadFile;
