import bcrypt from 'bcrypt'
import { NextResponse, NextRequest } from 'next/server'
import { db } from '../../../lib/db'

export async function POST(req: NextRequest) {
    const { name, email, password } = await req.json()

    if (!name || !email || !password) {
        return new NextResponse(JSON.stringify({ message: 'Missing name, email, or password' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    const exist = await db.user.findUnique({
        where: {
            email: email
        }
    })

    if (exist) {
        return new NextResponse(JSON.stringify({ message: 'User already exists' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await db.user.create({
        data: {
            name: name,
            email: email,
            password: hashedPassword
        }
    })

    return NextResponse.json(user)
}