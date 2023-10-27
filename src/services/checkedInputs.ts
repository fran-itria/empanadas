import type { Inputs } from "../types"

export const checkedDeliveryInput = (value: string, inputs: Inputs) => {
    if (!inputs.delivery) return false
    else if (inputs.delivery == value) return true
    else return false
}

export const checkedPaymentInput = (value: string, inputs: Inputs) => {
    if (!inputs.payment) return false
    else if (inputs.payment == value) return true
    else return false
}