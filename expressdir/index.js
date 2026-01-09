const express=require("express");
const app=express();
let port=8080;
app.listen(port,()=>{
    console.log(`App is listening on the port ${port}`);
})
// app.use((req,res)=>{
//     console.log("request received");
//     // res.send("This is response from my first server");
//     // res.send({
//     //     name:"apple",
//     //     color:"red",
//     // })
//     let code="<h1>Fruits</h1><ul><li>Apple</li><li>orange</li></ul>";
//     res.send(code);
// })
app.get("/",(req,res)=>{
    res.send("hello i am root");
})
app.get("/:username/:id",(req,res)=>{
    let{username,id}=req.params;
    res.send(`Welcome to the page of @${username}.`);
})
app.get("/search",(req,res)=>{
    // console.log(req.query);
    let {q}=req.query;
    if(!q){
        res.send("<h1>Nothing Searched</h1>")
    }
    res.send(`This is the searched result for the query:${q}`);
    
})

// app.get("/apple",(req,res)=>{
//     res.send("You contacted with apple path");
// })
// app.get("/orange",(req,res)=>{
//     res.send("You contacted with orange path");
// })
// // app.get("*",(req,res)=>{
// //     res.send("This path does not exist");//wildcard route 404 handler
// // })


// app.post("/",(req,res)=>{
//     res.send("This is the post request for root path");
// })
// app.use((req, res) => {
//     res.status(404).send("This path does not exist");
// });