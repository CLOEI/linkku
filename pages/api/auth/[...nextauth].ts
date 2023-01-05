import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { firebaseConfig } from "../../../firebase";

const useSecureCookies = process.env.NEXTAUTH_URL?.startsWith('https://');
const cookiePrefix = useSecureCookies ? '__Secure-' : '';

export default NextAuth({
  debug: false,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    })
  ],
  cookies: {
    sessionToken: {
      name: `${cookiePrefix}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: useSecureCookies,
        domain: process.env.NODE_ENV == "development" ? ".localhost" : ".linkku.cc"
      }
    }
  },
  adapter: FirestoreAdapter(firebaseConfig),
  pages: {
    signIn: "/login",
    newUser: "/join"
  }
})