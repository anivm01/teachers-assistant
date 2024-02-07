import { S3Client } from '@aws-sdk/client-s3';
// Ensure environment variables are set
const spacesEndpoint = process.env.DO_SPACES_ENDPOINT;
const accessKeyId = process.env.DO_SPACES_KEY;
const secretAccessKey = process.env.DO_SPACES_SECRET;
const region = process.env.DO_SPACES_REGION;

if (!spacesEndpoint || !accessKeyId || !secretAccessKey || !region) {
    throw new Error("DigitalOcean Spaces environment variables are not set");
}

const s3 = new S3Client({
    region: region,
    endpoint: spacesEndpoint,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
    },
    forcePathStyle: true,
});


export default s3;
