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
  addresses: [
    { 
    _id:false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);
const addUsers = async () => { 
  let user1 = new User({
    username: "Dnyaneshwar Mali",
    addresses: [
      {
        location: "Mali galli near to the NH65",
        city: "Madha",
      },
    ],
  });
  user1.addresses.push({ location: "Marvel C wing 304", city: "Pune" });
   let result=await user1.save();
   console.log(result);
};
addUsers();
