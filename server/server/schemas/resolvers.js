const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
      books: async (parent,{title}) => {
        const params = title ? { title } : {};
        return Book.find(params).sort({ createdAt: -1 });
        }
      },
    Mutation:{
      addUser: async(parent,args)=>{
        const user = await User.create(args);
        return user;
      },
      login:async(parent,{email,password})=>{
        const user = await User.findOne({email});

        if (!user){
          throw new AuthenticationError('Incorrect credentials');
        }

        const correctPw = await user.isCorrectPassword(password);

        if(!correctPw){
          throw new AuthenticationError('Incorrect credentials')
        }

        return user;
                
      }
    }
      
  };
  
  module.exports = resolvers;