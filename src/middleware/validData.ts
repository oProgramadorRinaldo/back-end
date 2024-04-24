import { paymentTypes } from "../interfaces/paymentInterface";
import { shippingTypes } from "../interfaces/shippingInterface";

export const validDataEmpty = (data: paymentTypes[] | shippingTypes[]) => {
    let isEmpty = false
    data.forEach((element: paymentTypes | shippingTypes) => {
        if(!element) {
            return isEmpty = true
        };
    });
    return isEmpty
}