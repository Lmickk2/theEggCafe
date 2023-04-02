import { gql } from '@apollo/client';

export const QUERY_FOOD = gql`
  query FoodItems($category: String!) { 
    foodItems(category: $category) {
      _id
      category
      description
      name
      price
    }
  }
`;