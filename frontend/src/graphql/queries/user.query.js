import { gql } from "@apollo/client";
export const GET_AUTHENTICATED_USER = gql`
  query GetAuthenticatedUser {
    authUser {
      _id
      username
      name
      profilePicture
    }
  }
`;

export const GET_USER_AND_TRANSACTIONS = gql`
  query GetUserAndTransactions($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      username
      profilePicture
      #relationships
      transactions {
        _id
        description
        paymentType
        category
        amount
        location
        date
      }
    }
  }
`;

//The above code is an implementation of the GraphQL query to get the authenticated user and their associated transactions. Ant it shows the relationship between the user and their transactions.
