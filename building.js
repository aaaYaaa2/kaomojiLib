var fs = require('fs')  // require('fs') means file I/O
var path = require('path')
var JSONLoader = require('JSONStream')
var form = require('format-json-stream')

//var mapping = fs.createWriteStream(path.join(__dirname, 'simple'))

fs.createReadStream(path.join(__dirname, 'kaomoji.json'))
.pipe(JSONLoader.parse('*', function(val, key){
	if(val.icon){
		return [key[0], val.icon]
	}
}))
.pipe(JSONLoader.stringifyObject())
.pipe(form())