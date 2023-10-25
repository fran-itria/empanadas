import type { propsTransformObject } from "./typesServices"

export const transformObjectToString = ({ order, setOrderTextParam, priceTotal }: propsTransformObject) => {
    for (const [key, value] of Object.entries(order)) {
        setOrderTextParam(orderTextParam => orderTextParam + `${key}=${value}-`)
    }
    setOrderTextParam(orderTextParam => orderTextParam + `price=${priceTotal}`)
}