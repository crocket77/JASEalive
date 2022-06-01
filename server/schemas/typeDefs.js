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
    wisdoms:[Wisdom]
  }
  type Categories {
    category: String
  }
  type Wisdom {
    _id: ID
    wisdomText: String
    createdAt:String
    username: String
    topic: String
    youTubeLink: String
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
    wisdom(_id: ID!): Wisdom
    wisdoms(username:String): [Wisdom]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!,role:String!,interest:String!): Auth
    addAbout(_id: ID!, aboutText: String!):User
    addWisdom(wisdomText: String!, topic: String, youTubeLink: String): Wisdom
    addMentor(mentorId:ID!):User
    updateTopic(_id:ID!,topic:String!):User
    deleteUser(_id: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;