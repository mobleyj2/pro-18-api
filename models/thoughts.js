const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');

const thoughtsSchema = new Schema(
  {
    thoughts:  {
      type: String,
      required: true,
      maxlength: 280,
      createdAt: { type: Date, default: Date.now },
    },
    username: {
      required: true,
      type: String,
      maxlength: 50,
    },
    reactions: [reactionSchema],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const thoughts = model('thoughts', thoughtsSchema);

module.exports = thoughts;



