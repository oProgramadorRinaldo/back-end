import { Router, Request, Response } from 'express';
import { ControllerPayment, ControllerShipping } from '../controller/index';
import { VerifyAccess } from '../middleware/verifyAccess';
import { message } from '../middleware/messageErrors';

const { execute } = new VerifyAccess()
const router = Router();

router.post('/', async (req: Request, res: Response) => {
    const validAccess = execute(req, res)
    if (validAccess) return
    const { body } = req;
    const paymentSavecontroller = await new ControllerPayment().save(body.payment, req, res)
    const shippingSaveController = await new ControllerShipping().save(body.shipping, req, res)
    if(paymentSavecontroller && shippingSaveController) {
        return message('sucess', req, res)
    }
    return message('error', req, res)
});

router.get('/payment', async (req: Request, res: Response) => {
    const validAccess = execute(req, res)
    if (validAccess) return
    return res.json(await new ControllerPayment().getAll(req, res)) 
})

router.get('/shipping', async (req: Request, res: Response) => {
    const validAccess = execute(req, res)
    if (validAccess) return
    return res.json(await new ControllerShipping().getAll(req, res))
})

export default router;



