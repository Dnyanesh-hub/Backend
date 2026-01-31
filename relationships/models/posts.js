const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
  .then(() => {
    console.log("connection successfull!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationships");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new Schema({
  username: String,
  email: String,
});
const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// const addData = async () => {
//     let user= await User.findOne({username:"DANY"});
//   let user1 = new User({
//     username: "DANY",
//     email: "danymali0102@gmail.com",
//   });
// //   let post1 = new Post({
// //     content: "Practice Whatever U want To be in future Now",
// //     likes: 200000,
// //   });
//    let post3 = new Post({
//     content: "IF U NEVER TRY U WILL NEVER KNOW",
//     likes: 3000000,
//   });
//   post3.user=user;
// //   await user1.save();
// //   await post1.save();
// await post3.save();
// };
// addData();
const getData=async()=>{
   let result= await Post.findOne({}).populate("user","username");
   console.log(result);
}
getData();