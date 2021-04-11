const { default: axios } = require("axios");
const fs = require("fs");

const getImage = async (data) => {
  const response = await axios.post("https://carbonnowsh.herokuapp.com/", data);

  // fs.writeFile("test.png", response.data, "binary", (err) => {
  //   if (err) throw err;
  //   console.log("file saved");
  // });

  return response.data;
};

module.exports = getImage;
