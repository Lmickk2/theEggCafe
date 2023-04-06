const { Food } = require('../models');

const resolvers = {
  Query: {
    foods: async (_, { category }) => {
      const query = category ? { category } : {};
      const foods = await Food.find(query);
      return foods || [];
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
