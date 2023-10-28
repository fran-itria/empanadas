import type { propsTransformObject } from "./typesServices"

export const transformObjectToString = ({ order, setOrderTextParam, priceTotal }: propsTransformObject) => {
    const keys: string[] = Object.keys(order)
    const values: { doc: string, half: string }[] = Object.values(order)
    values.forEach((value, i) => {
        if (Number(value.doc) > 0 || Number(value.half) > 0) {
            setOrderTextParam(orderTextParam => orderTextParam + `${keys[i]}=${value.doc}doc,${value.half}med-`)
        }
    })
    // for (const [key, value] of Object.entries(order)) {
    //     const doc:  doc = value.
    //     setOrderTextParam(orderTextParam => orderTextParam + `${key}=${textValues.doc}doc${textValues.half}med-`)
    // }
    setOrderTextParam(orderTextParam => orderTextParam + `price=${priceTotal}`)
}