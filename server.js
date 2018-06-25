const { json } = require('micro')

export default async req => {
	console.log(await json(req))
	return 200
}
