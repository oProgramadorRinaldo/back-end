import { Request, Response } from "express";
import { message } from "./messageErrors";

export class VerifyAccess{
    execute(req: Request, res: Response){
        const { access_token } = req.query
        if(process.env.TOKEN !== access_token){
            return message('unauthorized', req, res)
        }
    }
}