const foodModel = require("../model/foodModel.js");
const fs = require('fs');

// Fetch all food items
const listFood = async (req, res) => {
  try {
    // Fetch all food items from the database
    const foods = await foodModel.find({});

    // Respond with success and the data
    res.json({ success: true, data: foods });
  } catch (error) {
    // Log the error for debugging
    console.error("Error fetching food items:", error);

    // Respond with an error message
    res.status(500).json({ success: false, message: "An error occurred while fetching food items." });
  }
};

// Add a new food item
const addFood = async (req, res) => {
  try {
    // Get the filename of the uploaded image
    const image_filename = req.file ? req.file.filename : null;

    // If a file is uploaded, proceed to save the food item
    if (image_filename) {
      const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
      });

      await food.save();
      res.status(201).json({ success: true, message: "Food added successfully" });
    } else {
      res.status(400).json({ success: false, message: "No file uploaded. Please upload a valid image." });
    }
  } catch (error) {
    console.error("Error adding food item:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Remove a food item
const removeFood = async (req, res) => {
  try {
    // Find the food item by ID
    const food = await foodModel.findById(req.body.id);
    if (!food) {
      return res.status(404).json({ success: false, message: "Food item not found" });
    }

    // Construct the file path and delete the image file
    const filePath = `uploads/${food.image}`;

    // Use fs.promises.unlink to ensure file deletion is handled asynchronously
    await fs.promises.unlink(filePath);

    // Delete the food item from the database
    await foodModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "Food removed successfully" });
  } catch (error) {
    console.error("Error removing food:", error);
    res.status(500).json({ success: false, message: "An error occurred while removing the food item." });
  }
};

// Export both functions
module.exports = {
  listFood,
  addFood,
  removeFood,
};
