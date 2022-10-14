const { default: mongoose } = require("mongoose")

async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017/nodejs_course')
}

module.exports = connectDB;

// const { MongoClient  } = require ('mongodb');
// // or as an es module
// // import { MongoClient } from 'mongodb'


// //connection url
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// //Database Name
// const dbName = 'nodejs_course';


// async function connect() {
//     await client.connect();
// const db = client.db(dbName);
// return db;
// }


// module.exports = connect;