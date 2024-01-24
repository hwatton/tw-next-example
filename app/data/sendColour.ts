'use server'

import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export const sendColour = async (formData: FormData)=>{

    const REGION = "eu-north-1"; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.

const ddbClient = process.env.AWS_ACCESS_KEY_ID &&process.env.AWS_SECRET_ACCESS_KEY? new DynamoDBClient({
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
}) : null
const stuff= formData.get("colour")
const params = {
    TableName: "colour-library",
    Item: {
        colour: stuff,

    },
  };
if (ddbClient) {
  try {
    const data = await ddbClient.send(new PutCommand(params));
    console.log("Success - item added", data);


  } catch (err) {
    console.log("Error", err);
  }
} else {
    console.log('db client not loaded correctly')}
}