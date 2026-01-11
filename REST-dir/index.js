const express=require("express");
const app=express();
const port=8080;
const path=require("path");
app.use(express.urlencoded({extended:true}))// to parse the data
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")) );
let posts=[
    {
        username:"Dnyaeshwar Mali",
        content:"I am the best",
    },
    {
        username:"Dany",
        content:"never give up!",
    },
    {
        username:"Dnyaeshwar Mali",
        content:"Disipline equals freedom-):",
    }
]
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.listen(port,(res,req)=>{
    console.log(`listening to port:  ${port}`);
})