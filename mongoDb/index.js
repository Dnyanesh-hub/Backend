const mongoose=require('mongoose');

main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number, 
});
const User=mongoose.model('User',userSchema);
const Employee=mongoose.model('Employee',userSchema);
// const user1=new User ({name:"dany",email:"dany123@gmail.com",age:21});
// const user2=new User ({name:"khushi",email:"khushi123@gmail.com",age:19});
// user1.save();
// user2.save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// User.insertMany([{name:"anand",email:"anand1010@gmail.com",age:19},
//     {name:"amisha",email:"amisha1213@gmail.com",age:22},
//     {name:"rozi",email:"rozi3212@gmail.com",age:17}]).then((data)=>{
//         console.log(data);
//     });
// User.find().then((data)=>{
//     console.log(data);
// // });
// User.find({age:{$gte:20}}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);

// });
// User.findOne({age:{$gte:20}}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);

// });
// User.findById("696f7b0d361d42a2698d47c6")
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);

// });
// User.updateOne({name:"khushi"},{age:20}).then((res)=>{
//     console.log(res);

// })
// .catch((err)=>{
//     console.log(err);
// });
// User.updateMany({name:"khushi"},{name:"shivani"}).then((res)=>{
//     console.log(res);

// })
// .catch((err)=>{
//     console.log(err);
// });
// User.findOneAndUpdate({name:"shivani"},{age:21},{new:true}).then((data)=>{
//     console.log(data);

// })
// .catch((err)=>{
//     console.log(err);
// });
// User.deleteOne({name:"rozi"}).then((data)=>{
//     console.log(data);

// })
// .catch((err)=>{
//     console.log(err);
// });
// User.deleteMany({age:{$lte:18}}).then((res)=>{
//     console.log(res);

// })
// .catch((err)=>{
//     console.log(err);
// });
// User.findByIdAndDelete("696f8044619e983dea06fcf2").then((res)=>{
//     console.log(res);

// })
// .catch((err)=>{
//     console.log(err);
// });
User.findOneAndDelete({name:"dany"}).then((res)=>{
    console.log(res);

})
.catch((err)=>{
    console.log(err);
});



  

