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
    wisdoms(username: $username) {
      _id
      wisdomText
      createdAt
      username
    }
  }
`;



export const QUERY_WISDOM = gql`
  query wisdom($id: ID!) {
    wisdom(_id: $id) {
      _id
      wisdomText
      createdAt
      username
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
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