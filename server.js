const express = require("express")
const path = require("path")
const morgan = require("morgan")
const mongoose = require("mongoose")
const Post = require("./models/post")

const app = express()

app.set("view engine", "ejs")

const PORT = 3000
const db = 'mongodb+srv://dimitr0960:Pass321@cluster0.v3ufx8h.mongodb.net/node-blog?retryWrites=true&w=majority'

mongoose
	.connect(db)
	.then((res) => console.log("Connected to DB"))
	.catch((error) => console.log(error))

const createPath = (page) => {
	return path.resolve(__dirname, "ejs-views", `${page}.ejs`)
}

app.listen(PORT, (error) => {
	error ? console.log(error) : console.log(`listening post ${PORT}`)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.urlencoded({ extended: false }))

app.use(express.static('styles'))

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
	const post = {
		id: "1",
		text: "Lorem ipsum",
		title: "Post title",
		date: "25.04.2023",
		author: "Dmitry",
	}
	res.render(createPath("post"), { title, post })
})

app.get("/posts", (req, res) => {
	const title = "Posts"
	const posts = [{
		id: "1",
		text: "Lorem ipsum",
		title: "Post title",
		date: "25.04.2023",
		author: "Dmitry",
	}]
	res.render(createPath("posts"), { title, posts })
})

app.post("/add-post", (req, res) => {
	const { title, author, text } = req.body
	const post = new Post({ title, author, text })
	post
		.save()
		.then((result) => res.send(result))
		.catch((error) => {
			console.log(error)
			res.render(createPath("error"), { title: "ERROR" })
		})

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

// dimitr0960
// PXCaZ4W2yVAuPzEr
// Pass321
