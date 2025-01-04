const express =require('express')
const {getCart,removeFromCart,addToCart}=require('../controller/cartController.js')
const authMiddlware=require('../middlware/auth.js')

const cartRouter=express.Router()

cartRouter.post("/add",authMiddlware,addToCart)
cartRouter.post('/remove',authMiddlware,removeFromCart)
cartRouter.post('/get',authMiddlware,getCart)

module.exports=cartRouter