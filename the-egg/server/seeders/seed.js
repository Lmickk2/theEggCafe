const db = require('../config/connection');
const { Food } = require('../models');
const foodSeeds = require('./foodSeeds.json');

db.once('open', async () => {
  try {
    await Food.deleteMany({});

    await Food.create(foodSeeds);

    for (let i = 0; i < foodSeeds.length; i++) {
      const food = await Food.findById(foodSeeds[i]._id);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
