import type { ChangeInputs } from "./typesServices"
import { validateErrors } from "./validateErrors"

export const changeInputs = ({ inputs, event, setInputs, price, setErrors }: ChangeInputs) => {
    const name = event.currentTarget.name
    const value = event.currentTarget.value
    setInputs(inputs => { return { ...inputs, [name]: value } })
    validateErrors({input: {...inputs, [name]: value }, setErrors, price})
}