const { Schema, model } = require('mongoose');

const wisdomSchema = new Schema({
  wisdomText: {
    type: String,
    required: 'You need to leave a wisdom!'
  },
  youTubeLink: {
    type: String
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now
  // },
  username: {
    type: String,
    required: true
  },
  topic: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Categories'
    }
  ]
},
{
  toJSON: {
    getters: true
  }
});

const Wisdom = model('Wisdom', wisdomSchema);

module.exports = Wisdom;