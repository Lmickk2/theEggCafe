const { Food } = require('../models');

const resolvers = {
  Query: {
    foodItems: async (_, { category }) => {
      const query = category ? { category } : {};
      const foodItems = await Food.find(query);
      return foodItems || [];
    }
  },
  Mutation: {
    createFoodItem: async (_, args) => {
      return await Food.create(args);
    },
    updateFoodItem: async (_, { _id, ...args }) => {
      return await Food.findByIdAndUpdate(_id, args, { new: true });
    },
    deleteFoodItem: async (_, { _id }) => {
      return await Food.findByIdAndDelete(_id);
    },
  },
};
module.exports = resolvers;
