const { Schema, model } = require('mongoose');

// const bcrypt = require('bcrypt');

const mentorSchema = new Schema({
    username: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      validate: {
          validator(isEmail){
              return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(isEmail);
          },
          message:"That email was not valid. Please enter a valid one"          
      }
    },
    skillset: {
        type: String,
        required: true,
    },
    // mentees:[]
  });



  // create the User model using the PizzaSchema
const Mentor = model('Mentor', mentorSchema);

// export the Mentor model
module.exports = Mentor;