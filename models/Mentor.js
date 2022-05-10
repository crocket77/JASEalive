const { Schema, model } = require('mongoose');

const MentorSchema = new Schema({
    username: {
      type: String,
      required:true,
      trim:true
    },
    email: {
      type: String,
      required:true,
      validate:{
          validator(isEmail){
              return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(isEmail);
          },
          message:"That email was not valid. Please enter a valid one"          
      }
    },
    skillset:{
        type:String,
        required:true,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thoughts'
      }
    ],
    mentees:[]
  });

// get total count of thoughts and replies on retrieval
MentorSchema.virtual('thoughtCount').get(function() {
  return this.thoughts.length;
});

  // create the User model using the PizzaSchema
const User = model('Mentor', MentorSchema);

// export the User model
module.exports = Mentor;