import { inputDelyveryValues, inputsNames, inputsPaymentValues } from "../conts"
import type { ChangeInputs } from "./typesServices"
import { validateErrors } from "./validateErrors"

export const changeInputs = ({ inputs, event, setInputs, price, setErrors }: ChangeInputs) => {
    const name = event.currentTarget.name
    const value = event.currentTarget.value
    if (name == inputsNames.delivery && value == inputDelyveryValues.search) {
        setInputs(inputs => { return { ...inputs, [name]: value, [inputsNames.direction]: '' } })
    } else if (name == inputsNames.payment && value == inputsPaymentValues.transfer) {
        setInputs(inputs => { return { ...inputs, [name]: value, [inputsNames.cash]: '' } })
    } else setInputs(inputs => { return { ...inputs, [name]: value } })
    validateErrors({ input: { ...inputs, [name]: value }, setErrors, price })
}   