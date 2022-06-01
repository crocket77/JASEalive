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
            .populate('wisdoms')
            .populate('mentees');

          return userData;
          }
          throw new AuthenticationError('Not logged in')
        },
        user: async (parent, { username }) => {
          return User.findOne({ username })
            .select('-__v -password')
            .populate('mentors')
            .populate('wisdoms')
            .populate('mentees');
        },
        // get all users
        users: async () => {
          return User.find()
            .select('-__v -password')
            .populate('mentors')
            .populate('wisdoms')
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
        wisdom: async (parent, { _id }) => {
          return Wisdom.findOne({ _id })
        },

        wisdoms: async (parent, {username}) => {
          const params= username ? {username}:{};
          return Wisdom.find(params)
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
          console.log("this is what im defining", args)
          if(context.user){

            const newWisdom=await Wisdom.create({wisdomText: args.wisdomText, topic: args.topic, youTubeLink: args.youTubeLink, username: context.user.username})
          

            await User.findByIdAndUpdate(
              { _id: context.user._id },
              { $push: { wisdoms: newWisdom._id } },
              { new: true }
            );
          // add username as context.user...
          
          
          return newWisdom;
        }
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
        },
        deleteUser: async(parent, args, context) => {
          const delUser = await User.findByIdAndDelete({ _id: context.user._id });
          return delUser;
        }
      }
      
  };
  
module.exports = resolvers;