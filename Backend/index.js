const express = require('express');
const cors = require('cors');
require('dotenv/config.js')

const connectDB=require('./config/db.js')
// Assuming this is your multer setup
const app = express();
const foodRouter = require("./Routes/upload.js");
const userRouter = require('./Routes/userRoute.js');
const cartRouter = require("./Routes/cartRoute.js");
const orderRouter=require('./Routes/orderRoutes.js')
const corsOptions = {
  origin: "http://localhost:5173", credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization",'token'] // Allowed headers
};

// Apply CORS globally to all routes
app.use(cors(corsOptions));

//  app.use(cors());

app.use(express.json());
connectDB()




app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order", orderRouter);


app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
