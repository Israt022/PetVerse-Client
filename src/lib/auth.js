import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("petversedb");

export const auth = betterAuth({
    emailAndPassword: { 
        enabled: true, 
    }, 
    // user: {
    //     additionalFields: {
    //         image: {
    //             type: "string",
    //             required: false,
    //         },
    //     },
    // },

    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
});