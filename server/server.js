const cors = require("cors");
const express = require("express");
const app = express();

const main = require("./routes/index");
const about = require("./routes/about");
const post = require("./routes/post");

app.use(cors());
app.use("/", main);
app.use("/about", about);
app.use("/post", post);

const port = 3001;
app.listen(port, () => console.log("Listening on Port ${port}"));