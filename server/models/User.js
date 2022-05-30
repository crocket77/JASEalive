const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
          validator(isEmail){
              return /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/.test(isEmail);
          },
          message:"That email was not valid. Please enter a valid one"          
      }
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    aboutText: {
      type: String,
    },  
    role: {
      type: String,
      enum: ["User", "Mentor"],
      default: "User",
    },
    mentors:[
      {
        type: Schema.Types.ObjectId,
        ref:'User'
      }
    ],
    mentees:[
      {
        type: Schema.Types.ObjectId,
        ref:'User'
      }
    ],
    topics:[String]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
  );

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

userSchema.virtual('friendCount').get(function() {
  return this.mentors.length;
});

const User = model('User', userSchema);

// export the User model
module.exports = User;