function printHelp() {
	console.log("2.js usage:");
	console.log("");
	console.log("--help              print this help");
	console.log("--file={NAME}			 read the file of {NAME} and output it");
	console.log("");
}


var args = require("minimist")(process.argv.slice(2),{ string: "file" });

if ("help" in args || !args.file) {
	printHelp();
	process.exit(1);
}

var say = require("./helloworld.js");
