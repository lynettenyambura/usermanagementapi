const express = require('express');
const app = express();
const PORT = 3000;

const userController = require('./controllers/userController');

app.use(express.json());

// List all users
app.get('/users', userController.getAllUsers);

// Get a user by ID
app.get('/users/:id', userController.getUserById);

// User login
app.post('/login', userController.loginUser);

// User signup
app.post('/signup', userController.signupUser);

// Delete a user
app.delete('/users', userController.deleteUser);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
