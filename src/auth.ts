import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import userLoginSchema from './zod/userLoginSchema';
import Credentials from 'next-auth/providers/credentials';
import { getUser } from './services/getUser';
import bcrypt from 'bcrypt';
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
        async authorize(credentials) {
            const parsedCredentials = userLoginSchema.safeParse(credentials)
            if (parsedCredentials.success) {
                const { email, password } = parsedCredentials.data;
                const user = await getUser(email);
                if (!user) return null;
                const passwordMatch = await bcrypt.compare(password, user.password);
                if (passwordMatch) return user;
            }

            return null
        }
    })
  ]
});