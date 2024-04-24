import { Request, Response } from "express";
import { ServiceShipping } from '../service/index'
import { shippingTypes } from "../interfaces/shippingInterface";

export class ControllerShipping {
    async getAll(req: Request, res: Response){
        const { getAll } = new ServiceShipping
        return await getAll(req, res)
    }

    async save(data: shippingTypes ,req: Request, res: Response){
        const { saveDataShipping } = new ServiceShipping
        return await saveDataShipping(data, req, res)
    }
}