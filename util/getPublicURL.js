const getPublicURL = async (permalink_public, file_id, filename) => {
  const permalinkArr = permalink_public.split(/\/|-/);
  const team_id = permalinkArr[permalinkArr.length - 3];
  const pub_secret = permalinkArr[permalinkArr.length - 1];

  return `https://files.slack.com/files-pri/${team_id}-${file_id}/${filename}?pub_secret=${pub_secret}`;
};

module.exports = getPublicURL;
