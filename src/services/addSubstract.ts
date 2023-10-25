import { priceDoc } from "../conts";
import type { porpsAddSubstract } from "./typesServices";

export const addTotal = ({ setOrder, setPriceTotal, setTotal, title, total}: porpsAddSubstract) => {
    setTotal((total: number) => total + 1);
    setOrder(order => { return { ...order, [title]: total + 1 } })
    setPriceTotal(price => price += priceDoc)
};

export const substractTotal = ({ setOrder, setPriceTotal, setTotal, title, total}: porpsAddSubstract) => {
    setTotal((total: number) => total - 1);
    setOrder(order => { return { ...order, [title]: total - 1 } })
    setPriceTotal(price => price -= priceDoc)
  };