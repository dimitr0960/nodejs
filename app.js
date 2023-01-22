const fs = require("fs");

fs.readFile("./test.txt", "utf8", (error, data) => {
	// console.log(data.toString());
	console.log(data); // with utf8
});

console.log("First text");

fs.readFile("./test.txt", "utf8", (error, data) => {
	fs.mkdir("./files", () =>{
		fs.writeFile("./files/test2.txt", `${data} New text!`, () => {

		});
	});
});

// вложенность, либо async await
// либо mkdirSync / writeFileSync

setTimeout(() => {
	if (fs.existsSync("./files/test2.txt")) {
		fs.unlink("./files/test2.txt", () => {});
	}
}, 4000);

setTimeout(() => {
	if (fs.existsSync("./files")) {
		fs.rmdir("./files", () => {});
	}
}, 6000);



