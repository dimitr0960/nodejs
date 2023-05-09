const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const postRoutes = require("./routes/post-routes");
const postApiRoutes = require("./routes/api-post-routes");
const contactRoutes = require("./routes/contact-routes");
const createPath = require("./helpers/create-path");

const app = express();

app.set("view engine", "ejs");

const PORT = 3000;
const db =
  "mongodb+srv://dimitr0960:Pass321@cluster0.v3ufx8h.mongodb.net/node-blog?retryWrites=true&w=majority";

mongoose
  .connect(db)
  .then((res) => console.log("Connected to DB"))
  .catch((error) => console.log(error));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening post ${PORT}`);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("styles"));

app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  const title = "Home";
  res.render(createPath("index"), { title });
});

app.use(postRoutes);
app.use(contactRoutes);
app.use(postApiRoutes);

app.use((req, res) => {
  const title = "Error";
  res.status(404).render(createPath("error"), { title });
});

// dimitr0960
// PXCaZ4W2yVAuPzEr
// Pass321
