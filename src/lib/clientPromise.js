// // // lib/mongodb.js
// // const { MongoClient } = require("mongodb");

// // const uri = process.env.MONGODB_URI;
// // const options = {};

// // let client;
// // let clientPromise;

// // if (!process.env.MONGODB_URI) {
// //   throw new Error("Please add your Mongo URI to .env");
// // }

// // if (process.env.NODE_ENV === "development") {
// //   // Use a global variable in development to prevent multiple connections
// //   if (!global._mongoClientPromise) {
// //     client = new MongoClient(uri, options);
// //     global._mongoClientPromise = client.connect();
// //   }
// //   clientPromise = global._mongoClientPromise;
// // } else {
// //   // In production, use a new client each time
// //   client = new MongoClient(uri, options);
// //   clientPromise = client.connect();
// // }

// // module.exports = clientPromise;


// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const options = {};

// let client;
// let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error("Please add your Mongo URI to .env.local");
// }

// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;

// lib/mongodb.js
const { MongoClient, ServerApiVersion } = require("mongodb");

// if (!process.env.MONGODB_URI) {
//   throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
// }

const uri = process.env.MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable to persist the client across HMR
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(uri, options);
  }
  client = global._mongoClient;
} else {
  // In production, avoid using a global variable
  client = new MongoClient(uri, options);
}

module.exports = client;
