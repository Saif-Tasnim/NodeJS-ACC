const express = require("express");
const app = express();
const postRouter = require("./src/routes/posts.route");
const blogRouter = require("./src/routes/blogs.route");

app.use(express.json());

app.get("/", async (req, res) => {
  res.json({
    message: "Module-3 is running",
  });
});

app.use("/post", postRouter);
app.use("/post", blogRouter);

app.listen(5000, () => {
  console.log("Server is running");
});
