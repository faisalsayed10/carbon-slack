// credits to @ifvictr for the code :D
const removeSpecialTags = (str) => {
	return str
		.replace(/<!(channel|here|everyone)>/g, (t) => t.slice(1).slice(0, -1))
		.replace(/@(channel|here|everyone)/g, (t) => t.slice(1));
}

module.exports = { removeSpecialTags }