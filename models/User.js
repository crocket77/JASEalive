const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
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
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    mentors:[
      {
        type: Schema.Types.objectId,
        ref:'Mentors'
      }
    ],
    interests:[]
  });

  // set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

// get total count of thoughts and replies on retrieval
UserSchema.virtual('thoughtCount').get(function() {
  return this.thoughts.length;
});

  // create the User model using the PizzaSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;