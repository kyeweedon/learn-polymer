
// kye

var path = require("path")

// default
var config = {

	include:[

		path.join(__dirname, "..", "..", "src", "all", "styles")

	]

}

// environmental
switch(process.env.NODE_ENV) {

	case "dev":{

		break

	}

	case "pro":{

		break

	}

}

module.exports = config
