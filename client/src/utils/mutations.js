import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ABOUT = gql`
  mutation addAbout($_id:ID!, $aboutText: String!) {
    addAbout(_id: $_id, aboutText: $aboutText) {
      _id
      aboutText
    }
  }
`;

export const ADD_WISDOM = gql`
  mutation addWisdom($wisdomText: String!) {
    addWisdom(wisdomText: $wisdomText) {
      _id
      wisdomText
      createdAt
      username
    }
  }
`;

export const ADD_MENTEE = gql`
  mutation addMentee($id: ID!) {
    addMentee(menteeId: $id) {
      _id
      username
      menteeCount
      mentees {
        _id
        username
      }
    }
  }
`;



