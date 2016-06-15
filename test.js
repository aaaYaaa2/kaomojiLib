var fs = require('fs')
var kao = fs.read('kaomoji.json').toString()
var failed = false
var fail = function(){
	console.log(".....FAILED......")
	failed = true
}
var passed = function(){
	console.log("------PASSED!!!---->-->")
}

var fact = function(){
	if(failed){
		console.log('Something is wroing.....>_<')
		phantom.exit(failed)
	}else{
		console.log('Great!!-----> ^_^')
		phantom.exit()
	}
}

//
console.log('\nTEST: Correct JSON format')

try{
	var kaomojis = JSON.parse(fs.read('kaomoji.json'))
	var indicator = Object.keys(kaomojis)
	passed()
}catch(e){
	console.log('JSON format is not correct')
	fail()
	reveal()
}


