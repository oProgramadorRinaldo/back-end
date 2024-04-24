import { Request, Response } from "express"
import { paymentTypes } from "../interfaces/paymentInterface"
import { ObjectId } from "mongodb";
import { db } from "../db/connection";


export class RepositoryPayment {
    constructor() { }

    async save(data: paymentTypes, req: Request, res: Response) {
        try {
            await db
                .collection<paymentTypes>('payment')
                .insertOne(data)
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            res.statusCode = 200
            return await db
                .collection<paymentTypes>('payment')
                .find()
                .toArray()
        } catch (e) {
            console.log(e)
            return false
        }
    }
}