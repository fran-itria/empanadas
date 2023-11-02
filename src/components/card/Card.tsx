// import { priceDoc, priceMed } from "../conts";
import { useState } from "react";
import style from "./Card.module.css"
import type { propsCard } from "../../types";
import { addDoc, addHalf, substractDoc, substractHalf } from "../../services/addSubstract";

export function Card({ title, stock, setOrder, setPriceTotal }: propsCard) {
  const [total, setTotal] = useState<number>(0);
  const [half, setHalf] = useState<number>(0)
  return (
    <div className={stock ? style.card : style.notStock}>
      <h2 className={style.title}>{title}</h2>
      {/* <div className={style.prices}>
        <p className={style.price}>Docena: <b>${priceDoc}</b></p>
        <p className={style.price}>1/2: <b>${priceMed}</b></p>
      </div> */}
      <div className={style.doc}>
        <p className={style.text}>Docenas:</p>
        <button
          onClick={() => substractDoc({ basic: { setOrder, setPriceTotal, title }, total, setTotal })}
          className={total > 0 ? style.button : style.disbled}>
          -
        </button>
        <p className={style.total}>{total}</p>
        <button
          onClick={() => addDoc({ basic: { setOrder, setPriceTotal, title }, total, setTotal })}
          className={style.button}>
          +
        </button>
      </div>
      <div className={style.midle}>
        <p className={style.text}>1/2:</p>
        <button
          onClick={() => substractHalf({ basic: { setOrder, setPriceTotal, title }, half, setHalf })}
          className={half > 0 ? style.button : style.disbled}>
          -
        </button>
        <p className={style.total}>{half}</p>
        <button
          onClick={() => addHalf({ basic: { setOrder, setPriceTotal, title }, half, setHalf })}
          className={half == 0 ? style.button : style.disbled}>
          +
        </button>
      </div>
      {!stock ?
        <>
          <p className={style.notStockText}>Sin stock</p>
          <div className={style.box}></div>
          <div className={style.box2}></div>
        </>
        : <></>}
    </div>
  )
} 