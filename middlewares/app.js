const express = require("express");
const app = express();
const port = 8080;
// app.use((req, res, next) => {
//   console.log("hi ,I am 1st middleware");
//   return  next();
//   console.log("this after next()")
// });
// app.use((req, res, next) => {
//   console.log("hi ,I am 2nd middleware");
//   next();
// });

//to log information logger-morgan
// app.use((req,res,next)=>{
//     req.time=new Date().toString();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();

// });
const checkToken= (req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
       return next();
    }
    throw new Error("ACCESS DENIED! ")

};
// app.get("/wrong",(req,res)=>{
//     abcd=abcd;

// } );
app.use("/random",  checkToken,(req,res,next)=>{
    console.log("I am only for the random page");
    next();

});
app.get("/api",(req,res)=>{
    res.send("data");

});

app.get("/", (req, res) => {
  res.send("HI i am root");
});
app.get("/random", (req, res) => {
  res.send("This is a random Page");
});
app.use((req,res)=>{
    res.status(404).send("page not found!");

});
app.listen(port, () => {
  console.log(`app is listening to the port${port} `);
});
