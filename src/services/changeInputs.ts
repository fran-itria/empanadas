import type { ChangeInputs } from "./typesServices"

export const changeInputs = ({ event, setInputs }: ChangeInputs) => {
    const name = event.currentTarget.name
    const value = event.currentTarget.value
    setInputs(inputs => { return { ...inputs, [name]: value } })
}