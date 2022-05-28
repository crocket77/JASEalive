const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne(context.user)
          .select('-__v -password');
    
        return userData;
        }
        throw new AuthenticationError('Not logged in')
      },
      user: async (parent, { username }) => {
        return User.findOne({ username })
          .select('-__v -password');
      },
      // get all users
      users: async () => {
        return User.find()
          .select('-__v -password')
          // .populate('mentors')
          // .populate('interests');
      },
      mentors: async (parent, args, context) => {
        console.log(context);
        if (context) {
          const mentorData = await User.find()
          return mentorData;

        }
      }
      },
      Mutation:{
        addUser: async(parent, args) => {
          // make args lowercase
          const user = await User.create(args);
          const token = signToken(user);

          return { token, user };
        },
        addAbout: async (parent, args) => {
          console.log(args)
          return User.findOneAndUpdate({"_id": args._id},{"$set": {aboutText:args.aboutText}}, {new:true})
        },

        login:async(parent, { email, password }) => {
          const user = await User.findOne({ email });
  
          if (!user){
            throw new AuthenticationError('Incorrect credentials');
          }
  
          const correctPw = await user.isCorrectPassword(password);
  
          if(!correctPw){
            throw new AuthenticationError('Incorrect credentials')
          }
  
          const token = signToken(user);
          return { token, user };      
        }
      }
      
  };
  
module.exports = resolvers;