import User from "@/schemas/userSchema";
import { connectToDB } from "@/utils/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import jwt from "jsonwebtoken";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn( {user, account} : {user:any, account:any} ) {

      await connectToDB();
      if (account.provider === "google") {
         const {name, email} = user;
         const userNameExists = await User.findOne({
          email
         });
         if(userNameExists){
           return true;
         }
         else{
            await User.create({
              email,
              username: name,
            });
            return true;
         }
      }
      return true;
    },
    async jwt({ token, user, account }) {

      if (account?.provider && user) {
        token.provider = account.provider;
        token.id = user.id;

        const accessToken = jwt.sign(
          { userId: user.id, provider: account.provider },
          // @ts-ignore
          process.env.NEXTAUTH_SECRET,
          { expiresIn: '15m' }
        );

        const refreshToken = jwt.sign(
          { userId: user.id, provider: account.provider },
          // @ts-ignore
          process.env.NEXTAUTH_SECRET,
          { expiresIn: '7d' }
        );

        token.accessToken = accessToken;
        token.refreshToken = refreshToken;
      }
      return token;
    },
    async session({ session, token }:any) {
      // Attach access token and refresh token to the session
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  }
});

export { handler as GET, handler as POST };