// If any bug occurs here reference to learn more about this code: https://docs.digitalocean.com/reference/api/spaces-api/
import "dotenv";
import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Create an S3Client which communicates with the digital ocean spaces space
// which is needed for this application
export class DigitalOceanSpacesClient extends S3Client {
  constructor() {
    super({
      endpoint: process.env.DIGITAL_OCEAN_SPACES_ENDPOINT,
      region: process.env.DIGITAL_OCEAN_SPACES_REGION,
      credentials: {
        // @ts-ignore:next-line
        accessKeyId: process.env.DIGITAL_OCEAN_SPACES_ACCESS_KEY_ID,
        // @ts-ignore:next-line
        secretAccessKey: process.env.DIGITAL_OCEAN_SPACES_SECRET_ACCESS_KEY,
      },
    });
  }

  async uploadFile({
    fileBuffer,
    fileName,
  }: {
    fileBuffer: Buffer;
    fileName: String;
  }) {
    const FILE_EXPIRY = 900; // seconds 15 min
    const data = await this.send(
      new PutObjectCommand({
        Bucket: process.env.DIGITAL_OCEAN_SPACES_BUCKET_NAME,
        Key: `${process.env.DIGITAL_OCEAN_SPACES_DOWNLOADS_PATH}${fileName}`,
        Body: fileBuffer,
        ACL: "private",
      })
    );

    const downloadLink = await getSignedUrl(
      this,
      new GetObjectCommand({
        Bucket: process.env.DIGITAL_OCEAN_SPACES_BUCKET_NAME,
        Key: `${process.env.DIGITAL_OCEAN_SPACES_DOWNLOADS_PATH}${fileName}`,
      }),
      { expiresIn: FILE_EXPIRY }
    );

    return { data, downloadLink };
  }
}
