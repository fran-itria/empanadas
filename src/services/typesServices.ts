import type { Inputs, Price, SetOrder, errorsForm, titleKey } from "../types";

// Tipo para la funcion de transformar el objeto a string 
export type propsTransformObject = {
    order: any,
    setOrderTextParam: React.Dispatch<React.SetStateAction<string>>
    priceTotal: number
}
export type Value = {
    doc: string
    half: string
}

// Tipo para las funciones de sumar y restar la cantidad de docenas a pedir
export type basicProps = {
    setOrder: SetOrder
    setPriceTotal: React.Dispatch<React.SetStateAction<number>>,
    title: titleKey,
}
export type propsAddSubstractTotal = {
    basic: basicProps
    total: number
    setTotal: React.Dispatch<React.SetStateAction<number>>
}
export type propsAddSubstractHalf = {
    basic: basicProps
    half: number
    setHalf: React.Dispatch<React.SetStateAction<number>>
}

export type Order = {
    title: {
        doc: number
        half: number
    }
}

// Tipo para la funcion que escribe los inputs
export type ChangeInputs = {
    price: Price
    event: React.ChangeEvent<HTMLInputElement>,
    setInputs: React.Dispatch<React.SetStateAction<Inputs>>
    setErrors: React.Dispatch<React.SetStateAction<{}>>
    errors: errorsForm
    inputs: Inputs
}

//  Tipo para la funcion de creacion del mensaje 
export type whattssapMessagesProps = {
    inputs: Inputs
    orderArray: string[] | undefined
}

//  Tipo para la funcion que valida el formulario
export type validateErrorsProps = {
    input: Inputs
    setErrors: React.Dispatch<React.SetStateAction<errorsForm>>
    price: Price
}

