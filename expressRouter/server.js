const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hi i am Root server Working very well");
});

//users
//index route users
app.get("/users", (req, res) => {
  res.send("get for users");
});
// show-users
app.get("/users/:id", (req, res) => {
  res.send("get for  show user");
});
//Post- users
app.post("/users", (req, res) => {
  res.send("post for users");
});
//Delete users
app.delete("/users/:id", (req, res) => {
  res.send("Delete for users");
});

//Posts
//index route for posts
app.get("/posts", (req, res) => {
  res.send("get for posts");
});
// show-posts
app.get("/posts/:id", (req, res) => {
  res.send("get for  show posts");
});
//Post- posts
app.post("/posts", (req, res) => {
  res.send("post for posts");
});
//Delete posts
app.delete("/posts/:id", (req, res) => {
  res.send("Delete for posts");
});

app.listen(port, () => {
  console.log(`server is listening to  the port ${port}`);
});
