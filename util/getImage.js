const { createWriteStream } = require("fs");
const { pipeline } = require("stream");
const { promisify } = require("util");
const fetch = require("node-fetch");
const { v4 } = require("uuid");
const uploadFile = require("./uploadFile");
require("dotenv").config();

const getImage = async (body, client, userId) => {
  let filename = {};
  const streamPipeline = promisify(pipeline);
  filename[userId] = `${v4()}.png`;

  const response = await fetch("https://carbonnowsh.herokuapp.com/", {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  await streamPipeline(response.body, createWriteStream(filename[userId]));

  return uploadFile(client, filename[userId]);
};

module.exports = getImage;
