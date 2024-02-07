import { DefaultSession, DefaultUser } from "next-auth";

type UserId = string

declare module "next-auth/jwt" {
    interface JWT {
        id: UserId
        username?: string | null
    }
}

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: User & {
            id: UserId
            username?: string | null
        }
    }
    interface User extends DefaultUser {
        type: 'Free' | 'Admin';
    }
}