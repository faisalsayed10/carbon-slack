export default (str: string) => {
	return str
		.replace(/<!(channel|here|everyone)>/g, (t) => t.slice(2).slice(0, -1))
		.replace(/@(channel|here|everyone)/g, (t) => t.slice(1));
}
