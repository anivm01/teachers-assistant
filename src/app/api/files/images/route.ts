import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const imageFiles = await db.file.findMany({
            where: {
                fileType: {
                    startsWith: 'image/',
                },
            },
            select: {
                url: true,
                fileName: true,
            },
        });

        // Return the list of image files
        return NextResponse.json({ success: true, data: imageFiles });
    }
    catch (err) {
        console.error('Error', err);
        return NextResponse.json({ success: false, message: 'There was an error' });
    }
}