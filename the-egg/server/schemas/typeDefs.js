const { gql } = require("apollo-server-express");

const typeDefs = gql`
type FoodItem {
  _id: ID!
  name: String!
  description: String
  price: Float!
  category: String
}

type Query {
  foodItems(category: String): [FoodItem]
}

type Mutation {
  createFoodItem(name: String!, description: String!, price: Float!, category: String): FoodItem!
  updateFoodItem(_id: ID!, name: String, description: String, price: Float, category: String): FoodItem!
  deleteFoodItem(_id: ID!): FoodItem
}
`;
module.exports = typeDefs;
