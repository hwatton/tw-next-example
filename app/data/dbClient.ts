// Create service client module using ES6 syntax.
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

// Set the AWS Region.
const REGION = "eu-north-1"; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.



const ddbClient = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID &&process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY? new DynamoDBClient({
  region: REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  },
}) : null

export { ddbClient };