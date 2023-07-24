const { User, Thought } = require('../models'); // Only importing the User model

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

// Get a single user
const getSingleUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId }).select('-__v').populate(Thought)

    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }

    res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findOneAndRemove({ _id: req.params.userId });

    if (!deletedUser) {
      return res.status(404).json({ message: 'No such user exists' });
    }

    res.json({ message: 'User successfully deleted' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
};



