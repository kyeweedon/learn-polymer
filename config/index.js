
// kye

var fs = require("fs")
var path = require("path")
var kyes = require("kyes-toolkit")

// set defaults here
var config = {

	// commonly used directories
	dir:{

		root:path.join(__dirname, "../"),
		dist:path.join(__dirname, "../dist/"),
		src:path.join(__dirname, "../src/")

	}

}

process.env.NODE_ENV = process.env.NODE_ENV || "dev"

module.exports = kyes.moduler(__dirname, {

	startingObj:config

})
