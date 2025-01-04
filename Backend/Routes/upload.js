const multer = require('multer');
const express = require('express');
const foodRouter = express.Router(); // Correct use of Router
const { listFood, addFood,removeFood } = require('../controller/foodController.js');

 // Correct path to the controller


// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

// Route to handle file uploads and add food
 foodRouter.post('/upload', upload.single('file'), addFood);

 // Example path to your model

foodRouter.get('/list', listFood);
foodRouter.post('/remove',removeFood)

module.exports = foodRouter;

