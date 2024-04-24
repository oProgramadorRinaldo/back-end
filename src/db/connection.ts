import { MongoClient, ServerApiVersion } from 'mongodb';

export const client = new MongoClient("mongodb+srv://rinaldo:kirvano@kirvano.xi4jwkr.mongodb.net/?retryWrites=true&w=majority&appName=Kirvano", {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

export const db =  client.db('test')

