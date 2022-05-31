const { User,Wisdom } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
          if (context.user) {
            const userData = await User.findOne(context.user)
            .select('-__v -password')
            .populate('mentors')
            .populate('mentees');


      
          return userData;
          }
          throw new AuthenticationError('Not logged in')
        },
        user: async (parent, { username }) => {
          return User.findOne({ username })
            .select('-__v -password')
            .populate('mentors')
            .populate('mentees');
        },
        // get all users
        users: async () => {
          return User.find()
            .select('-__v -password')
            .populate('mentors')
            .populate('mentees')
            // .populate('interests');
        },
        mentors: async (parent, args, context) => {
          console.log(context);
          if (context.user.role === "Mentor") {
            const mentorData = await User.find()
              .select('-__v -password');
              // .populate('isMentor');
            return mentorData;
          }
        },
        categories: async () => {
          return Categories.find().select('-__v');
        },
        wisdomSingle: async (parent, { _id }) => {
          console.log({ _id });
          return Wisdom.findOne({ _id })
          .select('-__v');
        },
        wisdomMentor: async (parent, { username }) => {
          const mentorWisdoms = await Wisdom.find({ username })
          .select('-__v'); 
        },
        wisdoms: async () => {
          return Wisdom.find().select('-__v');
        }
      },
      Mutation:{
        addMentor: async (parent, { mentorId }, context) => {
          if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
              { _id: context.user._id },
              { $addToSet: { mentors: mentorId } },
              { new: true }
            ).populate('mentors');
    
            return updatedUser;
          }
    
          throw new AuthenticationError('You need to be logged in!');
        },
        addUser: async(parent, args) => {
          console.log(args)
          // make args lowercase
          const user = await User.create(args);
          const token = signToken(user);

          return { token, user };
        },
        addAbout: async (parent, args) => {
          console.log(args)
          return User.findOneAndUpdate({"_id": args._id},{"$set": {aboutText:args.aboutText}}, {new:true})
        },
        addWisdom: async(parent, args, context) => {
          // add username as context.user...
          console.log(args)
          const newWisdom = await Wisdom.create(args);
          return newWisdom;
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