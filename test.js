var mocha = require('mocha');
var assert = require('assert');
var fs = require('fs');
// test for correct number of kaomoji
describe('Kaomoji', function(){
	it('should have 71 kaomojis', function(){
		var data = require('./kaomoji.json');
		var keys = Object.keys(data);
		var len = keys.length;
		var kaoNum = 71;
		assert.equal(len,kaoNum);
	});
});