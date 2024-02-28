import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

const ADD_PRIORITY = gql`
    mutation addPriority(
        $title: String
        $priorityText: String
        $isCompleted: Boolean
        $dueDate: String
        $category: String
        $tasks: String
    ) {
    add Priority (
      title: $title
      priorityText: $priorityText
      isCompleted: $isCompleted
      dueDate: $dueDate
      category: $category
      tasks: $tasks
    ) {
      token
      user {
        _id
      }
    }
  }
`;