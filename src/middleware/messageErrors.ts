import { Request, Response } from "express";

export const message = (name: string, req: Request, res: Response) => {
    switch (name) {
        case 'unauthorized':
            res.statusCode = 401
            res.send('Unauthorized')
            return true
        case 'empty':
            res.statusCode = 406
            res.send('Data is empty')
            return true
        case 'invalid':
            res.statusCode = 406
            res.send('Data is invalid')
            return true
        case 'sucess':
            res.statusCode = 200
            res.send('Data Saved')
            return true
        default:
            res.statusCode = 400
            res.send('Erro tente novamente')
            return true
    }
}