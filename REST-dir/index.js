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
        id:"1a",
        username:"Dnyaeshwar Mali",
        content:"I am the best",
    },
    { 
        id:"2b",
        username:"Dany",
        content:"never give up!",
    },
    {   
        id:"3c",
        username:"Dnyaeshwar Mali",
        content:"Disipline equals freedom-):",
    }
]
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})
app.post("/posts",(req,res)=>{
    let{username,content}=req.body;
    posts.push({username, content});
    res.redirect("/posts"); 
})
app.get("/posts/:id",(req,res)=>{
    let{id}=req.params;
    let post=posts.find((p)=>id === p.id);
    res.render("show.ejs",{post});

})

app.listen(port,(res,req)=>{
    console.log(`listening to port:${port}`);
})