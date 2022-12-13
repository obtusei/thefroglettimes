import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../prisma/prisma";
import useSWR from 'swr'
import type { NextAuthOptions } from 'next-auth'
export const authOptions:NextAuthOptions = {
  
  providers: [
      CredentialsProvider({
            name: "Credentials",
            credentials: {
                  username: { label: "Email", type: "email", placeholder: "jsmith" },
                  password: {  label: "Password", type: "password" }
            },
            async authorize(credentials:any, req) {

                  // database look up
                  
                  const user = await prisma.user.findUnique({
                        where: {
                              email: credentials.username,
                        }
                  });

                  if (
                  credentials.username === user?.email &&
                  credentials.password === user?.password
                  ) {
                  return user;
                  }

                  // login failed
                  return null;
            }
      })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id;
        token.name = user.name
        token.email = user.email
      }

      return token;
    },
    session: ({ session, token }) => {
      if(token){
        // session.user?.name=token.name
        
      }
      return session;

      return session;
    },
  },
  secret: "test",

  // pages:{
  //       signIn:'/login'
  // },
  
}
export default NextAuth(authOptions);