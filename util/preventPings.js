// credits to @ifvictr for the code :D
const removeSpecialTags = (str) =>
	str
		.replace(/@(channel|everyone|here)/gi, '@\u200c$1')
		.replace(/<!(channel|everyone|here)\|(.*?)>/gi, '<\u200c!$1|$2>')

module.exports = { removeSpecialTags }