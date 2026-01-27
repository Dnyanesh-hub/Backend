const express=require("express");
const app=express();
let port=8080;
const mongoose=require("mongoose");
const path=require("path");  
const Chat=require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError=require("./ExpressError.js");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public") ));
app.use(express.urlencoded({extended:"true"}));
app.use(methodOverride("_method"));

main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakechatme');
}
//index route 
app.get("/chats", async (req,res)=>{
    let chats=await Chat.find ();
    // console.log(chats);
    res.render("index.ejs",{chats});

});

//new route
app.get("/chats/new",(req,res)=>{
    // throw new ExpressError(404,"page not found");
    res.render("new.ejs");

});
// create route
app.post("/chats",(req,res)=>{
     try{
        let{from,to,message}=req.body;
     let newChat=new Chat(
        {
            from:from,
            to :to,
            message: message,
            created_at:new Date()
        });
        newChat.save().then((res)=>{
            console.log("new chat is saved");

        }).catch((err)=>{
            console.log(err);

        });
        res.redirect("/chats");
     } catch(err){
        next(err);
     }
     
});

//new show route
app.get("/chats/:id",async (req,res,next)=>{
       let {id}=req.params;
       let chat=await Chat.findById(id);
       if(!chat){
            next( new ExpressError(404,"chat not found or deleted"));
       }
       res.render("edit.ejs",{chat});
});

//edit route
app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
    let chat= await Chat.findById(id);
    res.render("edit.ejs",{chat});
});
//update route 
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let {message:newMessage } = req.body;

    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        { message: newMessage},
        { runValidators: true, new: true }
    );

    console.log(updatedChat);
    res.redirect("/chats");
});
//destroy route
app.delete("/chats/:id",async (req,res)=>{
    let { id } = req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");

});

//root route  for checking everyhthig is working well or not
app.get("/",(req,res)=>{
    res.send("root is working well !");
});
// error handling middleware
app.use((err,req,res,next)=>{
    let {status=500,message="Some Error Occured"}=err;
    res.status(status).send(message);


});

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)

});