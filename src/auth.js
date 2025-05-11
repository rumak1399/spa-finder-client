// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//   ],
// });
// auth.js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/clientPromise";
import dbConnect from "./lib/dbConnect";
import User from "./lib/models/User";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  events: {
    async createUser({ user }) {
      await dbConnect();
      const exists = await User.findOne({ email: user.email });
      if (!exists) {
        await User.create({
          name: user.name,
          email: user.email,
          role: "user",
          isProvider: false,
        });
      }
    },
  },
  callbacks: {
    async session({ session }) {
      await dbConnect();
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.id = dbUser._id.toString();
      session.user.role = dbUser.role;
      session.user.isProvider = dbUser.isProvider;
      return session;
    },
  },
};

const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
export { handlers, auth, signIn, signOut };
export default NextAuth(authOptions);
