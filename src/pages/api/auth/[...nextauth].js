import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import prisma from "../connect";

// const prisma = new PrismaClient()

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: 'a9ad7b018f0addc5ba30',
            clientSecret: '061269b8808883a8e24608c6acdc836c4f390505',
        }),
        GoogleProvider({
            clientId: '164128864419-ki4u0ha3u942be444ks4v9v13skfae92.apps.googleusercontent.com',
            clientSecret: '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',
        })
    ],
};

export default NextAuth(authOptions)