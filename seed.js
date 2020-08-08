const { Seeder } = require("mongo-seeding");
const path = require("path");

const config = {
  database: "mongodb://127.0.0.1:27017/e-commerce",
  dropDatabase: true
};

const seeder = new Seeder(config);

const collections = seeder.readCollectionsFromPath(
  path.resolve("./resources/collections")
);

const populateDb = async () => {
  try {
    await seeder.import(collections);
  } catch (err) {
    console.log(err.message);
  }

  console.log("Db populated");
};

populateDb();
