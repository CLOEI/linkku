import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const useSecureCookies = process.env.NEXTAUTH_URL!.startsWith('https://');
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
  adapter: FirestoreAdapter({
    apiKey: process.env.FIREBASE_API_KEY,
    appId: process.env.FIREBASE_APP_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  }),
  pages: {
    signIn: "/login",
    newUser: "/join"
  }
})