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
    role: String
    interest: String
    category: [Categories]
    mentorCount:Int
    mentors:[User]
    mentees:[User]
    


  }
  type Categories {
    category: String
  }
  type Wisdom {
    _id: ID
    wisdomText: String
    youTubeLink: String
    username: String
    topic: [Categories]
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
    addUser(username: String!, email: String!, password: String!,role:String!,interest:String!): Auth
    addAbout(_id: ID!, aboutText: String!):User
    addWisdom(wisdomText: String!, youTubeLink: String, username: String!): Auth
    addMentor(mentorId:ID!):User
    updateTopic(_id:ID!,topic:String!):User
  }
`;

// export the typeDefs
module.exports = typeDefs;