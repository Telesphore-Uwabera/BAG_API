const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to create a new user
router.post('/register', userController.createUser);

// Route to authenticate a user and generate a JWT
router.post('/login', userController.loginUser);

// Protected route to get the user's profile (requires a valid JWT)
router.get('/profile', authMiddleware, userController.getUserProfile);

// Route to update a user's information (requires a valid JWT)
router.put('/profile', authMiddleware, userController.updateUserProfile);

// Route to delete a user (requires a valid JWT)
router.delete('/profile', authMiddleware, userController.deleteUser);

module.exports = router;
