
//importing mongooose 
const mongoose = require("mongoose");

//connecting with DB
const mongoURI = 'mongodb://darshanchavan1472:Darshan1472@ac-8wyt7p3-shard-00-00.qxcbh4k.mongodb.net:27017,ac-8wyt7p3-shard-00-01.qxcbh4k.mongodb.net:27017,ac-8wyt7p3-shard-00-02.qxcbh4k.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-8b6gex-shard-0&authSource=admin&retryWrites=true&w=majority';

//fetcing data from db
module.exports = function (callback) {
  mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
      // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
      if (err) console.log("---" + err)
      else {
          // var database =
          console.log("connected to mongo")
          const foodCollection = await mongoose.connection.db.collection("food_items");
          foodCollection.find({}).toArray(async function (err, data) {
              const categoryCollection = await mongoose.connection.db.collection("food_Category");
              categoryCollection.find({}).toArray(async function (err, Catdata) {
                  callback(err, data, Catdata);

              })
          });
          // listCollections({name: 'food_items'}).toArray(function (err, database) {
          // });
          //     module.exports.Collection = database;
          // });
      }
  })
};