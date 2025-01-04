# Food_Delivery_Project
 MERN Project 

# Food Delivery Project: A Food Ordering Website

Food Delivery Project is a modern food ordering and delivery platform with advanced functionalities for a seamless user experience. It includes user-friendly features like food ordering, order tracking, and secure payments using Stripe. The application ensures robust security with JWT-based authentication and encrypted passwords. It uses a RESTful API architecture for seamless communication between the frontend and backend.

## Features

### User Features
- *Food Ordering*: Users can browse available food items, add them to the cart, and place orders.
- *Order Tracking*: Track the status of your order in real-time.
- *Secure Payments*: Integrated Stripe payment gateway for secure and hassle-free transactions.
- *Feedback System*: Users can provide feedback for their orders and overall experience.
- *Authentication*: Login and signup functionalities with JWT tokens for secure session management.
- *Password Validation*: Strong password validation (minimum 8 characters) enforced with validator.

### Admin Features
- *Food Management*: Add, update, and remove food items from the menu.
- *Order Tracking*: Track and update the status of customer orders.

## Technologies Used

### Frontend
- *React*: For building the user interface.
- *Axios*: For making HTTP requests and handling responses.

### Backend
- *Express.js*: For creating RESTful APIs.
- *Multer*: For handling file uploads.
- *Validator*: For password validation.
- *CORS*: For enabling cross-origin requests.

### Database
- *MongoDB*: For storing user data, food items, orders, and feedback.

### Security
- *JWT (JSON Web Token)*: For secure authentication and authorization.
- *BCrypt*: For encrypting passwords before storing them in the database.

### Payment Gateway
- *Stripe*: For secure and reliable payment processing.

## Setup and Installation

### Prerequisites
- Node.js
- MongoDB (local or cloud-hosted, e.g., MongoDB Atlas)
- Stripe account

### Steps to Run the Project

1. *Clone the Repository*
   bash
   git clone https://github.com/kanhereaajinath/food-delivery-project.git
   cd food-delivery-project
   

2. *Install Dependencies*
   - Install backend dependencies:
     bash
     cd backend
     npm install
     
   - Install frontend dependencies:
     bash
     cd ../frontend
     npm install
     

3. *Set Up Environment Variables*
   - Create a .env file in the backend directory with the following variables:
     env
     MONGO_URI=mongodb://localhost:27017/fooddel
     JWT_SECRET=your_jwt_secret_key
     STRIPE_SECRET_KEY=your_stripe_secret_key
     

4. *Start the Application*
   - Start the backend server:
     bash
     cd backend
     npm start
     
   - Start the frontend server:
     bash
     cd ../frontend
     npm start
     

5. *Access the Application*
   - Open your browser and navigate to http://localhost:3002 to use the Food Delivery Project platform.

## API Endpoints

### Authentication
- POST /api/auth/signup: Register a new user.
- POST /api/auth/login: Login with email and password.

### Food Items
- GET /api/foods: Fetch all food items.
- POST /api/foods: Add a new food item (Admin only).
- PUT /api/foods/:id: Update a food item (Admin only).
- DELETE /api/foods/:id: Delete a food item (Admin only).

### Orders
- POST /api/orders: Place a new order.
- GET /api/orders/:id: Get order details.
- PUT /api/orders/:id: Update order status (Admin only).

### Feedback
- POST /api/feedback: Submit feedback.

## Folder Structure

food-delivery-project/
├── backend/
│   ├── controllers/     # API business logic
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # Authentication and other middleware
│   └── index.js        # Entry point for the backend
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Application pages
│   │   ├── utils/       # Helper functions
│   │   └── App.js       # Main React component
└── README.md            # Project documentation


## Future Enhancements
- Add support for real-time notifications using WebSockets.
- Implement a recommendation engine for personalized food suggestions.
- Introduce delivery partner tracking for better order transparency.
- Add multi-language support for a broader audience.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the license terms.
