import { gql } from '@apollo/client';

export const QUERY_ABOUT = gql`
  query about($username: String) {
    about(username: $username) {
      _id
      aboutText
      createdAt
      username
    }
  }
`;

export const QUERY_WISDOMS = gql`
  query wisdoms($username: String) {
    wisdomMentor(username: $username) {
      _id
      wisdomText
      youTubeLink
      username
    }
  }
`;



export const QUERY_WISDOM = gql`
  query wisdom($id: ID!) {
    wisdomSingle(_id: $id) {
      _id
      wisdomText
      youTubeLink
      username
      topic
    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    users{
      _id
      username
      email
      aboutText
      role
      interest
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      aboutText
      role
      interest
      mentors{
        _id
        username
      }
      mentees{
        _id
        username
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      aboutText
      role
      interest
      wisdoms{
        _id
        wisdomText
        youTubeLink
        username
        topic
      }
      mentors{
        _id
        username
      }
      mentees{
        _id
        username
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email

    }
  }
`;

export const QUERY_MENTOR = gql`
  {
    mentor {
      _id
      username
      about
    }
  }
`;