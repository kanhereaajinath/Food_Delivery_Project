const mongoose =require('mongoose')

const connectDB =async ()=>{
    await mongoose.connect('mongodb://localhost:27017/food-del').then(()=>console.log('dbconnect'))
}
module.exports= connectDB