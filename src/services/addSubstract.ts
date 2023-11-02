import { priceDoc, priceMed } from "../conts";
import type { propsAddSubstractHalf, propsAddSubstractTotal } from "./typesServices";


export const addTotal = ({ basic, total, setTotal }: propsAddSubstractTotal) => {
    const { setOrder, setPriceTotal, title } = basic
    setTotal((total: number) => total + 1);
    setOrder((order) => { return { ...order, [title]: { ...order[title], doc: total + 1 } } })
    setPriceTotal(price => price += priceDoc)
};

export const substractTotal = ({ basic, total, setTotal }: propsAddSubstractTotal) => {
    const { setOrder, setPriceTotal, title } = basic
    setTotal((total: number) => total - 1);
    setOrder(order => { return { ...order, [title]: { ...order[title], doc: total - 1 } } })
    setPriceTotal(price => price -= priceDoc)
};

export const addHalf = ({ basic, half, setHalf }: propsAddSubstractHalf) => {
    const { setOrder, setPriceTotal, title } = basic
    if (half < 1) {
        setHalf((total: number) => total + 1);
        setOrder(order => { return { ...order, [title]: { ...order[title], half: half + 1 } } })
        setPriceTotal(price => price += priceMed)
    }
}

export const substractHalf = ({ basic, half, setHalf }: propsAddSubstractHalf) => {
    const { setOrder, setPriceTotal, title } = basic
    setHalf((total: number) => total - 1);
    setOrder(order => { return { ...order, [title]: { ...order[title], half: half - 1 } } })
    setPriceTotal(price => price += priceMed)
}