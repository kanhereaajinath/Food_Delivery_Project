const express=require('express')
const authMiddlware=require('../middlware/auth.js')
const {placeOrder , verifyOrder,userOrder, listOrder ,updateStatus}=require('../controller/orderController.js')


const orderRouter = express.Router();

// Route to place an order - requires authentication
orderRouter.post("/place", authMiddlware, placeOrder);
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userOrder",authMiddlware,userOrder)
orderRouter.get("/list",listOrder)
orderRouter.post('/status',updateStatus)
module.exports = orderRouter;