const { Schema, model } = require('mongoose');

const wisdomSchema = new Schema({
  wisdomText: {
    type: String,
    required: 'You need to leave a wisdom!',
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  username: {
    type: String,
    required: true
  },
  youTubeLink: {
    type: String
  },
  topic:{
    type: String,
    enum: ["coding", "fitness","music","finance","gaming","parenting","everything"],
    default: "everything",

  }
  
},
{
  toJSON: {
    getters: true
  }
});

const Wisdom = model('Wisdom', wisdomSchema);

module.exports = Wisdom;