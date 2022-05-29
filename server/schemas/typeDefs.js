// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    isMentor: Boolean
    aboutText: String
  }
  type Categories {
    category: String
  }
  type Wisdom {
    _id: ID
    wisdomText: String
    youTubeLink: String
    
    username: String
  }
  type Auth {
    token:ID!
    user:User
  }
  type Query {
    me: User
    user(username: String!): User
    users: [User]
    mentors: [User]
    categories: [Categories]
    wisdomSingle(_id: ID!): Wisdom
    wisdomMentor(username: String!): [Wisdom]
    wisdomAll: [Wisdom]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addAbout(_id: ID!, aboutText: String!):User
    addWisdom(wisdomText: String!, youTubeLink: String, username: String!): Auth
  }
`;

// export the typeDefs
module.exports = typeDefs;