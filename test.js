var mocha = require('mocha');
var assert = require('assert');
var fs = require('fs');
// test for correct number of kaomoji
describe('Kaomoji', function(){
	it('should have 40 kaomojis', function(){
		var data = require('./kaomoji.json');
		var keys = Object.keys(data);
		var len = keys.length;
		var kaoNum = 40;
		assert.equal(len,kaoNum);
	});
});