import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../../firebase"

import type { AuthOptions } from "next-auth"

const useSecureCookies = process.env.NEXTAUTH_URL?.startsWith('https://');
const cookiePrefix = useSecureCookies ? '__Secure-' : '';

export const authOptions: AuthOptions = {
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "johndoe" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const authRef = collection(db, "auth");
        const q = query(authRef, where("username", "==", credentials?.username))
        const querySnapshot = await getDocs(q)
        const data = querySnapshot.docs[0]?.data()

        if (data) {
          const check = await bcrypt.compare(credentials!.password, data.password)
          if (check) {
            return {
              id: data.id,
              name: data.username,
            }
          }
        }
        return null
      },
    }),
  ],
  cookies: {
    sessionToken: {
      name: `${cookiePrefix}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: useSecureCookies,
        domain: "." + process.env.NEXTAUTH_URL!.split(".").slice(1).join(".").split(":")[0]
      }
    }
  },
  callbacks: {
    async redirect({ url }) {
      return url;
    }
  },
  pages: {
    signIn: `${process.env.NEXTAUTH_URL}/signin`
  }
}

export default NextAuth(authOptions)