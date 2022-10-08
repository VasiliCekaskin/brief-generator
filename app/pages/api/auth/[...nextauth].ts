import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import passwordHash from "password-hash";
import dbClient from "../../../src/db/client";
import EmailVerification from "../../../src/models/emailVerification";
import User from "../../../src/models/user";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "test@test.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, _req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        if (credentials && credentials.email && credentials.password) {
          const user = await dbClient<User>("users")
            .where("email", credentials.email)
            .first();

          if (
            user &&
            user.email_verified &&
            passwordHash.verify(credentials.password, user.passwordHash)
          ) {
            return { id: user.id, email: user.email };
          }
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
});
