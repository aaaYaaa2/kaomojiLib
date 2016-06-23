var fs = require('fs');  // require('fs') means file I/O
var path = require('path'); 
// contains utilities for handling and transforming file path. The file system is not consulted to check whether path are valid 
var JSONLoader = require('JSONStream');
// JSONStream.parse(path), parse stream of values match a path 
//var form = require('format-json-stream');

//var mapping = fs.createWriteStream(path.join(__dirname, 'simple'))

fs.createReadStream(path.join(__dirname, 'kaomoji.json')).pipe(JSONLoader.parse('*', function(val, key){
	if(val.icon){
		return [key, val.icon];
	}
})).pipe(JSONLoader.stringifyObject());
// pipe method is use to send data to destination 

// __dirname is the name of directory that the currently executing script reside in
// Streams is nothing but an EventEmitter and implements some special methods, depends on the methods implemented,
// a stream becomes Readable, Writable or Duplex 
// e.g in Node.js based HTTP server, request is a readable stream and response is a writable stream, use fs module which 
// let you work with both readable and writable file streams 
// fs.createReadStream() gives you a readable stream, Initially, the stream is in a static state, as soon as you listen to event and 
// attacj a callback it starts flowing 