
const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    thoughtId: {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
      required: true,
    },
    
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);




module.exports = reactionSchema
