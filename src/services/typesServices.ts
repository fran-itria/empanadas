import type { Inputs, Price, errorsForm } from "../types";

// Tipo para la funcion de transformar el objeto a string 
export type propsTransformObject = {
    order: any,
    setOrderTextParam: React.Dispatch<React.SetStateAction<string>>
    priceTotal: number
}

// Tipo para las funciones de sumar y restar la cantidad de docenas a pedir
export type porpsAddSubstract = {
    setOrder: React.Dispatch<React.SetStateAction<{
        'Carne salada': number;
        'Carne dulce': number;
        Pollo: number;
        'Jamon y queso': number;
        'Cebolla y queso': number;
        Verdura: number;
    }>>,
    setPriceTotal: React.Dispatch<React.SetStateAction<number>>,
    setTotal: React.Dispatch<React.SetStateAction<number>>
    title: string,
    total: number
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

