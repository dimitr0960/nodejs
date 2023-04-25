const express = require("express")
const path = require("path")

const app = express()

app.set("view engine", "ejs")

const PORT = 3000

const createPath = (page) => {
	return path.resolve(__dirname, "ejs-views", `${page}.ejs`)
}

app.listen(PORT, (error) => {
	error ? console.log(error) : console.log(`listening post ${PORT}`)
})

app.get("/", (req, res) => {
	const title = "Home"
	res.render(createPath("index"), { title })
})

app.get("/contacts", (req, res) => {
	const title = "Contacts"
	const contacts = [
		{ name: "YouTube", link: "https://youtube.com" },
		{ name: "Twitter", link: "https://twitter.com" },
		{ name: "GitHub", link: "https://github.com" },
	]
	res.render(createPath("contacts"), { title, contacts })
})

app.get("/posts/:id", (req, res) => {
	const title = "Post"
	res.render(createPath("post"), { title })
})

app.get("/posts", (req, res) => {
	const title = "Posts"
	res.render(createPath("posts"), { title })
})

app.get("/add-post", (req, res) => {
	const title = "Add post"
	res.render(createPath("add-post"), { title })
})

app.use((req, res) => {
	const title = "Error"
	res
		.status(404)
		.render(createPath("error"), { title })
})
