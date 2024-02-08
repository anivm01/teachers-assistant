import { db } from "@/lib/db";
import s3 from "@/lib/digitalOceanSpaces";
import { DeleteObjectCommand } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, res: NextResponse) => {
    try {
        const fileName = req.nextUrl.pathname.split('/').pop();

        const fileExists = await db.file.findFirst({
            where: { fileName },
        })
        if (!fileExists) {
            return new NextResponse("File doesn't exist", { status: 404 })
        }

        // Step 1: Delete the file from Digital Ocean Spaces
        const deleteParams = {
            Bucket: process.env.DO_SPACES_NAME, // Your Spaces bucket name
            Key: `uploads/${fileName}`,
        };

        await s3.send(new DeleteObjectCommand(deleteParams));

        // Step 2: Delete the file reference from the database
        await db.file.delete({
            where: { id: fileExists.id },
        });

        return NextResponse.json({ success: true, message: 'File deleted successfully' });
    } catch (err) {
        console.error('Upload error:', err);
        return NextResponse.json({ success: false, message: 'Failed to delete file!' });
    }
};