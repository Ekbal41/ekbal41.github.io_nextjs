import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
    // Configure one or more authentication providers
    session: {
        strategy: "jwt",
    },
    providers: [

        CredentialsProvider({
            name: "credentials",
            credentials: {
            },
            async authorize(credentials, req) {
                const { username, password } = credentials
                if (username === 'asifekbaldev@gmail.com' && password === 'admin41') {
                    return { id: 1, name: 'Admin', email: 'asifekbaldev@gmail.com' }
                } else {
                    return null

                }
            }
        })



    ],
    pages: {
        signIn: '/signin'
    },
}
export default NextAuth(authOptions)

