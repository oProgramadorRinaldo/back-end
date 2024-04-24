import { Request, Response } from "express";
import { shippingTypes } from "../interfaces/shippingInterface";
import { message } from "../middleware/messageErrors";
import { validDataEmpty } from "../middleware/validData";
import { RepositoryShipping } from "../repository/respositoryShipping";

export class ServiceShipping {
    async saveDataShipping(data: shippingTypes, req: Request, res: Response){
        const validEmpty = validDataEmpty([data])
        if(validEmpty) return message('empty', req, res)
        const { save } = new RepositoryShipping
        return await save(data, req, res)
    }

    async getAll(req: Request, res: Response){
        const { findAll } = new RepositoryShipping
        const response = await findAll(req, res)
        return response
    }
}