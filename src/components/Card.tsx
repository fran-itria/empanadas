import { add, priceDoc, priceMed, substract } from "../conts";
import { useState } from "react";
import style from "./Card.module.css"

type props = {
  title: string;
  stock: boolean;
  option?: string;
  setOrder: React.Dispatch<React.SetStateAction<{
    'Carne salada': number;
    'Carne dulce': number;
    Pollo: number;
    'Jamon y queso': number;
    'Cebolla y queso': number;
    Verdura: number;
  }>>
  setPriceTotal: React.Dispatch<React.SetStateAction<number>>
};

export function Card({ title, stock, option, setOrder, setPriceTotal }: props) {
  const [total, setTotal] = useState<number>(0);
  const addTotal = () => {
    setTotal((total: number) => total + 1);
    setOrder(order => { return { ...order, [title]: total + 1 } })
    setPriceTotal(price => price += priceDoc)
  };
  const substractTotal = () => {
    setTotal((total: number) => total - 1);
    setOrder(order => { return { ...order, [title]: total - 1 } })
    setPriceTotal(price => price -= priceDoc)
  };
  return (
    <div className={style.card}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.prices}>
        <p className={style.price}>Docena: <b>${priceDoc}</b></p>
        <p className={style.price}>1/2: <b>${priceMed}</b></p>
      </div>
      <div className={style.buttons}>
        <button onClick={substractTotal} className={style.button}> - </button>
        <p className={style.total}>{total}</p>
        <button onClick={addTotal} className={style.button}> + </button>
      </div>
    </div>
  )
} 