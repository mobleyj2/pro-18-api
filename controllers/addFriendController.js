const User = require('../models/user');

const addFriend = async (req, res) => {
  try {
    const { userId, friendId } = req.params;

    // Find the user and friend by their IDs
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Add friend to user's friend list
    user.friends.push(friendId);
    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const removeFriend = async (req, res) => {
  try {
    const { userId, friendId } = req.params;

    const user = await User.findById(userId);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Remove friend from user's friend list
    user.friends.pull(friendId);
    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  addFriend,
  removeFriend
};

