import { add, priceDoc, priceMed, substract } from "../conts";
import { useState } from "react";
import style from "./Card.module.css"
import React from '@astrojs/react'

type props = {
  title: string;
  stock: boolean;
  option?: string;
};

export function Card({ title, stock, option }: props) {
  const [total, setTotal] = useState<number>(0);
  const addTotal = () => {
    console.log(add)
    setTotal((total: number) => total + 1);
  };
  const substractTotal = () => {
    console.log(substract)
    setTotal((total: number) => total - 1);
  };
  return (
    <div className={style.card}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.prices}>
        <p className={style.price}>Docena: <b>${priceDoc}</b></p>
        <p className={style.price}>1/2: <b>${priceMed}</b></p>
      </div>
      <div className={style.buttons}>
        <button onClick={addTotal} className={style.button}> + </button>
        <p className={style.total}>{total}</p>
        <button onClick={substractTotal} className={style.button}> - </button>
      </div>
    </div>
  )
} 