import { Request, Response } from "express";
import { ServicePayment,  } from '../service/index';
import { paymentTypes } from "../interfaces/paymentInterface";

export class ControllerPayment {
    async getAll(req: Request, res: Response){
        const { getAll } = new ServicePayment
        return await getAll(req, res)
    }

    async save(data: paymentTypes ,req: Request, res: Response){
        const { saveDataPayment } = new ServicePayment
        return saveDataPayment(data, req, res)
    }
}