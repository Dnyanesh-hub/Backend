const { faker } = require('@faker-js/faker');
const mysql= require('mysql2');
const express=require("express");
const app=express();
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
const port=8080;
const connection =mysql.createConnection({
  host:'localhost',
  user:'root',
  database:'dany_app',
  password:'q4w6fd87@723114'
});
// inserting new data in bulk using faker
let getRandomUser = () =>{
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
//Home route
app.get("/",(req,res)=>{
  let q=` SELECT count(*) FROM user`;
  try{
  connection.query(q,(err,result)=>{
  if(err)throw err
  let count=result[0]["count(*)"];
  // res.send("SUCCESS");  

  res.render("home.ejs",{count});
});
} catch(err){
  console.log(err);
  res.send("SOME ERROR IN DATABASE");
}
});
//show route
app.get("/users",(req,res)=>{
  let q=`SELECT * FROM user`;
  try{
  connection.query(q,(err,users)=>{
  if(err)throw err
  // console.log(result);
  // res.send(result);
  // res.send("SUCCESS");  
  // res.render("home.ejs",{count});
  
  res.render("showusers.ejs",{users});
});
} catch(err){
  console.log(err);
  res.send("SOME ERROR IN DATABASE");
}


});
app.listen(port,(res,req)=>{
  console.log(`server is listening to port ${port}`);
})
// try{
//   connection.query(q,[data], (err,result)=>{
//   if(err)throw err
//   console.log(result);
  
// })
// } catch(err){
//   console.log(err);
// }
// connection.end();


