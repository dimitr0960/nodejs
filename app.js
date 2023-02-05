const fs = require("fs")
const zlib = require("zlib")

const readStream = fs.createReadStream("./docs/text.txt")
const writeSteam = fs.createWriteStream("./docs/new-text.txt")
const compressStream = zlib.createGzip()

// readStream.on("data", (chunk) => {
// 	writeSteam.write("\n---CHUNK START---\n")
// 	writeSteam.write(chunk)
// 	writeSteam.write("\n---CHUNK END---\n")
// })

// readStream.pipe(writeSteam)

const handleError = () => {
	console.log("Error")
	readStream.destroy()
	writeSteam.end("Finished with error...")
}

readStream
	.on("error", handleError)
	.pipe(compressStream)
	.pipe(writeSteam)
	.on("error", handleError)

