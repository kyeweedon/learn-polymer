
// kye

// default
var config = {

	pretty:false

}

// environmental
switch(process.env.NODE_ENV) {

	case "dev":{

		config.pretty = true
		break

	}

	case "pro":{

		break

	}

}

module.exports = config
