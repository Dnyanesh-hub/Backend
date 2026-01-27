const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakechatme');
}
let allChats=[
   
  {
    from: "Rohit",
    to: "Sneha",
    message: "Hope your day is going well.",
    created_at: new Date(),
  },
  {
    from: "Aman",
    to: "Pooja",
    message: "Thanks for helping me out earlier.",
    created_at: new Date(),
  },
  {
    from: "Kunal",
    to: "Ishita",
    message: "Your explanation was really clear.",
    created_at: new Date(),
  },
  {
    from: "Sahil",
    to: "Neha",
    message: "Let’s catch up and discuss the plan.",
    created_at: new Date(),
  },
  {
    from: "Arjun",
    to: "Kritika",
    message: "Great work on the recent task.",
    created_at: new Date(),
  },
  {
    from: "Varun",
    to: "Nandini",
    message: "Appreciate your quick response.",
    created_at: new Date(),
  },
  {
    from: "Aditya",
    to: "Riya",
    message: "Your ideas were very practical.",
    created_at: new Date(),
  },
  {
    from: "Manish",
    to: "Simran",
    message: "Everything is on track now.",
    created_at: new Date(),
  },
  {
    from: "Dev",
    to: "Ayesha",
    message: "Let me know if you need any help.",
    created_at: new Date(),
  },
  {
    from: "Harsh",
    to: "Zoya",
    message: "Looking forward to collaborating again.",
    created_at: new Date(),
  }
];
Chat.insertMany(allChats);
