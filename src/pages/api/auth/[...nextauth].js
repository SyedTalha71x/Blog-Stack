import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../Models/User";
import connectDB from "../../../../DBConnecttion/db";
import CryptoJS from "crypto-js";


export const authOptions = {
    providers: [
        GithubProvider({
            clientId: '1b73f1690a9948c480be',
            clientSecret: '92f2587cc1065199e98f65e1caf759c8975ceece',
        }),
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: "text" },
            },
            async authorize(credentials, req) {
                await connectDB();
                try {
                    const user = await User.findOne({ email: credentials.email });
                    if (user) {
                        const bytes = CryptoJS.AES.decrypt(user.password, 'DoNtRuN$6w7s');
                        const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
                        if (credentials.password === decryptedPassword) {
                            return Promise.resolve({ email: user.email, name: user.name });
                        } else {
                            return Promise.resolve(null);
                        }
                    } else {
                        return Promise.resolve(null);
                    }
                } catch (error) {
                    console.error("Error during authentication:", error);
                    return Promise.resolve(null);
                }
            },
        })
    ],
};

export default NextAuth(authOptions);
