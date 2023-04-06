import { gql } from '@apollo/client';

export const QUERY_FOOD = gql`
  query foods($category: String!) { 
    foods(category: $category) {
      _id
      category
      description
      name
      price
    }
  }
`;