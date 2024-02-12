import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3 from "./digitalOceanSpaces";
import { NextRequest, NextResponse } from "next/server";

export async function downloadHandler(
    req: NextRequest,
) {
    const fileName = decodeURIComponent(req.nextUrl.pathname.split('/').pop() || '');

    if (!fileName) {
        return new NextResponse(JSON.stringify({ error: "Invalid request: fileName is required." }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const bucketName = process.env.DO_SPACES_NAME!;
    const objectKey = `uploads/${fileName}`; // Adjust the key according to how you store files

    try {
        const command = new GetObjectCommand({
            Bucket: bucketName,
            Key: objectKey,
        });

        // Generate a signed URL for the object, valid for 1 hour (3600 seconds)
        const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
        // Respond with the signed URL
        return NextResponse.json({ success: true, message: 'File deleted successfully', url: signedUrl });
        // res.status(200).json({ url: signedUrl });
    } catch (error) {
        console.error('Error generating signed URL:', error);
        return new NextResponse("Failed to generate signed URL", { status: 500 })

        //res.status(500).json({ error: 'Failed to generate signed URL' });
    }
}