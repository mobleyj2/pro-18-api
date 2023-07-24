// controllers/reactionController.js
const Reaction = require('../models/reaction');
const Thoughts = require('../models/thoughts');

const createReaction = async (req, res) => {
  try {
    const { reactionBody, username } = req.body;
    const{thoughtId} = req.params
    // Create a new reaction
    const thought = await thought.findbyId(thoughtId);
thought.reactions.push({reactionBody,username,thoughtId})
thought.save()
    res.json(thought);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  createReaction,
};
