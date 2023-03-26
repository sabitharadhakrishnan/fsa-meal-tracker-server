import { MongoClient } from "mongodb";

const DB_NAME = "meal-tracker-fsa";

export const db = {
  _dbClient: null,
  conect: async function (url) {
    const client = await MongoClient.connect(url, {
      maxPoolSize: 10,
    });

    this._dbClient = client;
  },
  getConnection: function () {
    if (!this._dbClient) {
      console.log("You need to call the connect function first");
      process.exit(1);
    }
    return this._dbClient.db(DB_NAME);
  },
};
