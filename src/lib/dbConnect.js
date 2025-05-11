// // lib/mongoose.js

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('MONGODB_URI not defined');
// }

let cached = global.mongoose || { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

global.mongoose = cached;

export default dbConnect; 
// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// const dbConnect = async () => {
//   if (mongoose.connection.readyState >= 1) return;

//   return mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// };

// export default dbConnect;

