const userSeeds = require('./userSeed.json');
const catSeeds = require('./categoriesSeed.json');
const wisdomSeeds = require('./wisdomSeed.json');
const db = require('../config/connection');
const { Wisdom, User, Categories } = require('../models');

db.once('open', async () => {
  try {
    await Wisdom.deleteMany({});
    await User.deleteMany({});
    await Categories.deleteMany({});

    await User.create(userSeeds);
    await Categories.create(catSeeds);

    for (let i = 0; i < wisdomSeeds.length; i++) {
      const { _id, wisdomAuthor } = await Wisdom.create(wisdomSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: wisdomAuthor },
        {
          $addToSet: {
            wisdoms: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});