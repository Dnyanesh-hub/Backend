const express = require("express");
const app = express();
const port = 3000;
const session = require("express-session");
app.use(session({ secret: "mysupersecretstring" }));
app.get("/test",(req,res)=>{
  res.send("test successful");
});
// const cookieParser = require("cookie-parser");

// app.use(cookieParser("secretcode")); // fixed typo

// // sending cookies
// app.get("/getcookies", (req, res) => {
//   res.cookie("greet", "namaste"); // fixed typo
//   res.cookie("origin", "india");
//   res.send("Cookie sent successfully");
// });

// app.get("/greet", (req, res) => {
//   let { name = "anonymous" } = req.cookies;
//   res.send(`Hi, ${name}`);
// });

// app.get("/getsignedcookie", (req, res) => {
//   res.cookie("made-in", "India", { signed: true });
//   res.send("signed cookie sent");
// });
// app.get("/verify",(req,res)=>{
//   console.log(req.signedCookies);
//   res.send("verified");

// });

// app.get("/", (req, res) => {
//   console.dir(req.cookies);
//   res.send("Hi i am Root server Working very well");
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// //cookie parser pacakge
// //users
// //index route users
// app.get("/users", (req, res) => {
//   res.send("get for users");
// });
// // show-users
// app.get("/users/:id", (req, res) => {
//   res.send("get for  show user");
// });
// //Post- users
// app.post("/users", (req, res) => {
//   res.send("post for users");
// });
// //Delete users
// app.delete("/users/:id", (req, res) => {
//   res.send("Delete for users");
// });

// //Posts
// //index route for posts
// app.get("/posts", (req, res) => {
//   res.send("get for posts");
// });
// // show-posts
// app.get("/posts/:id", (req, res) => {
//   res.send("get for  show posts");
// });
// //Post- posts
// app.post("/posts", (req, res) => {
//   res.send("post for posts");
// });
// //Delete posts
// app.delete("/posts/:id", (req, res) => {
//   res.send("Delete for posts");
// });

app.listen(port, () => {
  console.log(`server is listening to  the port ${port}`);
});
