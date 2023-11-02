import type { propsTransformObject } from "./typesServices"

export const transformObjectToString = ({ order, setOrderTextParam, priceTotal }: propsTransformObject) => {
    const keys: string[] = Object.keys(order)
    const values: { doc: number, half: number }[] = Object.values(order)
    values.forEach((value, i) => {
        if (Number(value.doc) > 0 || Number(value.half) > 0) {
            setOrderTextParam(orderTextParam => orderTextParam + `${keys[i]}=${value.doc}doc,${value.half}med-`)
        }
    })
    setOrderTextParam(orderTextParam => orderTextParam + `price=${priceTotal}`)
}