import { gql } from '@apollo/client';


export const ADD_FOOD = gql`
  mutation createFoodItem($foodID: ID!, $name: String!, $description: String, category: String!, price: Float!) {
    createFoodItem(foodID: $foodID, name: $name, description: $description, category: $category, price: $price ) {
      _id
      name
      description
      category
      price
    }
  }
`;
