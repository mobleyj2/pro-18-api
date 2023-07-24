const Thought = require('../models/thoughts');

// Get all thoughts
const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get a single thought
const getSingleThoughts = async (req, res) => {
  try {
    const thought = await Thought.findOne({ _id: req.params.thoughtId }).select('-__v');

    if (!thought) {
      return res.status(404).json({ message: 'No thought with that ID' });
    }

    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create a thought
const createThoughts = async (req, res) => {
  console.log('Request Body:', req.body); // Log the request body to check its contents
  try {
    const thought = await Thought.create(req.body);
    res.json(thought);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

// Delete a thought
const deleteThoughts = async (req, res) => {
  try {
    const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

    if (!thought) {
      res.status(404).json({ message: 'No thought with that ID' });
    }

    res.json({ message: 'Thought deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update a thought
const updateThoughts = async (req, res) => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!thought) {
      res.status(404).json({ message: 'No thought with this ID' });
    }

    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getThoughts,
  getSingleThoughts,
  createThoughts,
  deleteThoughts,
  updateThoughts,
};


