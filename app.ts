// src/index.js
import express, {Request, Response} from "express";
import dotenv from "dotenv";
import router from "./src/router";
import cors from "cors"
import { client } from "./src/db/connection";

const app = express();

client.connect().then(() => {
  console.log('MONGODB connect!')
}).catch(err => console.log(err))

dotenv.config();
app.use(cors())
app.use(express.json())
app.use('/', router)

export default app;