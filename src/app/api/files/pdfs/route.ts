import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const pdfFiles = await db.file.findMany({
            where: {
                fileType: {
                    startsWith: 'application/',
                },
            },
            select: {
                url: true,
                fileName: true,
            },
        });

        // Return the list of pdf files
        return NextResponse.json({ success: true, data: pdfFiles });
    }
    catch (err) {
        console.error('Error', err);
        return NextResponse.json({ success: false, message: 'There was an error' });
    }
}