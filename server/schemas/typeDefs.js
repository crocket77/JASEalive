// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    about: String
  }
  type Auth {
    token:ID!
    user:User
  }
  type Query {
    me: User
    user(username: String!): User
    users: [User]
  }
  type Mutation {
    login(email:String!, password: String!): Auth
    addUser(username:String!, email: String!, password:String!): Auth
    addAbout(email:String!, aboutText:String!):User
  }
`;

// export the typeDefs
module.exports = typeDefs;