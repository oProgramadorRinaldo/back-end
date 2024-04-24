import { Request, Response } from "express"
import { shippingTypes } from "../interfaces/shippingInterface"
import { db } from "../db/connection"

export class RepositoryShipping {
    constructor() { }

    async save(data: shippingTypes, req: Request, res: Response) {
        try {
            await db
                .collection<shippingTypes>('shipping')
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
            .collection<shippingTypes>('shipping')
            .find()
            .toArray()

        } catch (e) {
            console.log(e)
            return false
        }
    }
}