import { priceDoc, priceMed } from "../conts";
import { useState } from "react";
import style from "./Card.module.css"
import type { propsCard } from "../types";
import { addTotal, substractTotal } from "../services/addSubstract";

export function Card({ title, stock, option, setOrder, setPriceTotal }: propsCard) {
  const [total, setTotal] = useState<number>(0);
  return (
    <div className={style.card}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.prices}>
        <p className={style.price}>Docena: <b>${priceDoc}</b></p>
        <p className={style.price}>1/2: <b>${priceMed}</b></p>
      </div>
      <div className={style.buttons}>
        <button onClick={() => substractTotal({ setOrder, setPriceTotal, setTotal, title, total })} className={style.button}> - </button>
        <p className={style.total}>{total}</p>
        <button onClick={() => addTotal({ setOrder, setPriceTotal, setTotal, title, total })} className={style.button}> + </button>
      </div>
    </div>
  )
} 