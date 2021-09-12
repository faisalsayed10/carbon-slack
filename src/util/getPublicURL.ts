export default async (permalink_public: string, file_id: string, filename: string) => {
  const permalinkArr = permalink_public.split(/\/|-/);
  const team_id = permalinkArr[permalinkArr.length - 3];
  const pub_secret = permalinkArr[permalinkArr.length - 1];

  return `https://files.slack.com/files-pri/${team_id}-${file_id}/${filename.toLowerCase()}?pub_secret=${pub_secret}`;
};
