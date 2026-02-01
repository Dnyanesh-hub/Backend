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
const orderSchema = new Schema({
  items: String,
  price: Number,
});
const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});
// customerSchema.pre("findOneAndDelete",async()=>{
//   console.log("Pre Middleware");
// });
customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let result = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(result);
  }
  
});
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomer = async () => {
//   let cust1 = new Customer({
//     name: "Dany",
//   });
//   let order1 = await Order.findOne({ items: "Samosa" });
//   let order2 = await Order.findOne({ items: "Bhel" });
//   cust1.orders.push(order1);
//   cust1.orders.push(order2);
//   let res=await cust1.save();
//   console.log(res);
// };
// addCustomer();
// const findCustomer = async () => {
//   let result = await Customer.find({}).populate("orders");
//   console.log(result[0]);
// };
// findCustomer();

// const addOrders = async () => {
//   let res = await Order.insertMany(
//     [
//     { items: "Samosa", price: 12 },
//     { items: "Vada-pav", price: 15 },
//     { items: "Bhel", price: 25 },
//     ]
//   );
//   console.log(res);
// };
// addOrders();
const addCust = async () => {
  let newCust = new Customer({
    name: "Dany",
  });
  let newOrder = new Order({
    items: "Puran-poli",
    price: 200,
  });
  newCust.orders.push(newOrder);
  await newOrder.save();
  await newCust.save();
  console.log("added new customer");
};
const delCust = async () => {
  let data = await Customer.findByIdAndDelete("697f51485c8db36c9019afb3");
  console.log(data);
};
delCust();
// addCust();
