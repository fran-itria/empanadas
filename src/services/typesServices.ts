import type { Inputs, Price, errorsForm, propsForm } from "../types";

export type propsTransformObject = {
    order: any,
    setOrderTextParam: React.Dispatch<React.SetStateAction<string>>
    priceTotal: number
}

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

export type ChangeInputs = {
    price: Price
    event: React.ChangeEvent<HTMLInputElement>,
    setInputs: React.Dispatch<React.SetStateAction<Inputs>>
    setErrors: React.Dispatch<React.SetStateAction<{}>>
    errors: errorsForm
    inputs: Inputs
}

export type whattssapMessagesProps = {
    inputs: Inputs
    orderArray: string[] | undefined
    price: (number | undefined)[] | undefined
}

export type validateErrorsProps = {
    input: Inputs
    setErrors: React.Dispatch<React.SetStateAction<errorsForm>>
    price: Price
}

