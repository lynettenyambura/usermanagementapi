let users = [
    {
      id: 1,
      name: "John Doe",
      age: 25,
      email: "johndoe@example.com"
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 30,
      email: "janesmith@example.com"
    },
    {
      id: 3,
      name: "Sam Johnson",
      age: 35,
      email: "samjohnson@example.com"
    }
  ];

  
  
// Controller function to list all users
exports.getAllUsers = (req, res) => {
  res.json(users);
};

// Controller function to get a user by ID
exports.getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);

  if (!user) {
    res.status(404).json({ error: 'User not found' });
  } else {
    res.json(user);
  }
};

// Controller function for user login
exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);

  if (!user || user.password !== password) {
    res.status(401).json({ error: 'Invalid email or password' });
  } else {
    res.json({ message: 'Login successful' });
  }
};

// Controller function for user signup
exports.signupUser = (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);

  if (user) {
    res.status(400).json({ error: 'User already exists' });
  } else {
    const newUser = { id: Date.now().toString(), email, password };
    users.push(newUser);
    res.status(201).json(newUser);
  }
};

// Controller function to delete a user
exports.deleteUser = (req, res) => {
  const { email } = req.body;
  const userIndex = users.findIndex((user) => user.email === email);

  if (userIndex === -1) {
    res.status(404).json({ error: 'User not found' });
  } else {
    users.splice(userIndex, 1);
    res.json({ message: 'User deleted successfully' });
  }
};
