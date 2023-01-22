// const EventEmitter = require("events");
//
// class Logger extends EventEmitter {
// 	log = (msg) => {
// 		console.log(msg);
// 		this.emit("some_event", {id: 1, text: "Text"});
// 	}
// }
//
// module.exports = Logger;

const EventEmitter = require("events");
const util = require("util");

class Logger {
	log = (msg) => {
		console.log(msg);
		this.emit("some_event", {id: 1, text: "Text"});
	}
}

util.inherits(Logger, EventEmitter)

module.exports = Logger;
