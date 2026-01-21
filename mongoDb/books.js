const mongoose=require('mongoose');

main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
const bookSchema=mongoose.Schema({
    tittle:{
        type:String,
        required:true,
        maxlength:50,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,"price is too low for amazon selling"],
    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"],
    },
    genre:[String], 

});
const Book=mongoose.model("Book",bookSchema);
Book.findByIdAndUpdate("69709b2b44f347868ecf2583",{price:-100},{runValidators:true}).
then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
});

// let book1=new Book({
//     tittle:"Zero To One",
//     author:"Peter Thiel",
//     price:108,

// });
// let book1=new Book({
//     tittle:"marvel comics v2",
//     price:600,
//     category:"fiction",
//     genre:["comics","superheros"],

// });
// book1.save().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });
