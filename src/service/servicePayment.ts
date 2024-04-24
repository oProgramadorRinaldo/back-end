import { Request, Response } from "express";
import { paymentTypes } from "../interfaces/paymentInterface";
import { message } from "../middleware/messageErrors";
import { validDataEmpty } from "../middleware/validData";
import { RepositoryPayment } from "../repository/respositoryPayment";

export const validNumberCard = (data: paymentTypes) => {
    const regexNumberSequencial = /^(?!.*(\d{4})\s\1\s\1\s\1)\d{4}\s\d{4}\s\d{4}\s\d{4}$/
    const regexNumberRepeat = /^(?!.*(\d)(?:\s*\1){3})(?:\d{4}\s?){4}$/g
    if(regexNumberSequencial.test(data.number) && regexNumberRepeat.test(data.number)){
        return false
    }else{
        return true
    }
}

export const validDateCard = (data: paymentTypes) => {
    const date = new Date
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    if(data.year >= year && data.month >= month){
        return false
    }else{
        return true
    }
}

export class ServicePayment {
    async saveDataPayment(data: paymentTypes, req: Request, res: Response){
        const validEmpty = validDataEmpty([data])
        if(validEmpty) return message('empty', req, res)
        const validCardNumber = validNumberCard(data)
        if(validCardNumber) return message('invalid', req, res)
        const validCardDate = validDateCard(data)
        if(validCardDate) return message('invalid', req, res)
        const { save } = new RepositoryPayment
        return await save(data, req, res)
    }

    async getAll(req: Request, res: Response){
        const { findAll } = new RepositoryPayment
        return await findAll(req, res)
    }
}