'use client';
import NextAuth from "next-auth"
let lichessHost = 'https://lichess.org'
const scope = "email:read";
import {CONFIG} from "../../../config/config"


export const authOptions = {

  providers: [   
    {
        id: "lichess",
        name: "Lichess",
        type: "oauth",
        clientId: CONFIG.clientID,
        clientSecret: CONFIG.authToken,
        client: {
          token_endpoint_auth_method:"client_secret_post"
        },
        authorization: {
          url: `${lichessHost}/oauth`,
          params: { scope },
        },
        token: `${lichessHost}/api/token`,
        userinfo: `${lichessHost}/api/account`,
        checks: ["pkce", "state"],
        profile(profile) {
          return {
            id: profile.id,
            username: profile.username,
          };
        },
        callbacks: {
          signIn: async (user, account, profile) => {
            return true;
          },
          async redirect({ url, baseUrl }) {
            return baseUrl
          },
          async session({ session, user, token }) {
            return session
          },
          async jwt({ token, user, account, profile, isNewUser }) {
            return token
          }
        }
      },

  ],
}
export default NextAuth(authOptions)