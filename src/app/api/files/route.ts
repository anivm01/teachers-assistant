// This will be in your Next.js app directory: `src/app/api/images/upload/route.ts`
import { NextRequest, NextResponse } from 'next/server';
import { PutObjectCommand, ObjectCannedACL } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from 'uuid';
import s3 from '@/lib/digitalOceanSpaces';
import { db } from "@/lib/db";
import { getAuthSession } from '@/lib/auth';

export async function POST(req: NextRequest) {
    try {
        const session = await getAuthSession()

        //is user logged in?
        if (!session?.user) {
            return new Response('Unauthorized', { status: 401 })
        }
        // is user an admin
        const isAdmin = await db.user.findFirst({
            where: {
                id: session.user.id,
                type: "Admin"
            }
        })

        if (!isAdmin) {
            return new Response('Unauthorized', { status: 401 })
        }

        const formData = await req.formData();
        const file = formData.get("file");
        console.log(file)

        if (!file || typeof file === "string") {
            return new Response("File is required.", { status: 400 });
        }

        const fileName = uuidv4() + "-" + file.name; // Unique file name
        const contentType = file.type;
        const buffer = Buffer.from(await file.arrayBuffer());

        // Upload file to Digital Ocean Spaces
        const uploadResult = await s3.send(new PutObjectCommand({
            Bucket: process.env.DO_SPACES_NAME, // Make sure you have this in your .env
            Key: `uploads/${fileName}`,
            Body: buffer, // or file
            ACL: 'public-read', // If you want the file to be publicly accessible
            ContentType: contentType,
        }));
        console.log(uploadResult)
        // Assuming the upload was successful and you have a public URL pattern
        const fileUrl = `https://${process.env.DO_SPACES_NAME}.${process.env.DO_SPACES_ENDPOINT}/uploads/${fileName}`;

        // Save file record in the database
        const savedFile = await db.file.create({
            data: {
                fileName: fileName,
                url: fileUrl,
                fileType: contentType,
                // Include other fields as necessary
            },
        });
        console.log(savedFile)

        return NextResponse.json({ success: true, data: savedFile });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ success: false, message: 'Error uploading file' });
    }
}




