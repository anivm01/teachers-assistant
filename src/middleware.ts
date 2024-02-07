import { NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';
import { NextApiRequest } from 'next';
import { getAuthSession } from './lib/auth';

export async function middleware(request: Request) {

    const requestForNextAuth = {
        headers: {
            cookie: (request as any).headers.get('cookie'),
        },
    };
    const session = await getSession({ req: requestForNextAuth });

    if (!session || session.user.type !== 'Admin') {
        if ((request as any).nextUrl.pathname.startsWith('/admin')) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};


