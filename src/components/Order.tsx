import { empanadas, initialOrder } from '../conts.ts'
import { Card } from "./Card.tsx";
import { useState } from "react";
import { transformObjectToString } from "../services/transformObjectToString.ts";
import style from "./Order.module.css";

export function Order() {
    const [order, setOrder] = useState(initialOrder)
    const [priceTotal, setPriceTotal] = useState<number>(0)
    const [orderTextParam, setOrderTextParam] = useState<string>('')
    return (
        <>
            {
                empanadas.map((empanada) => {
                    return (
                        <Card
                            title={empanada.title}
                            stock={empanada.stock}
                            option={empanada.option}
                            setOrder={setOrder}
                            setPriceTotal={setPriceTotal}
                        />
                    );
                })
            }
            <div className={style.confirm}>
                <a
                    href={`/confirm-order-${orderTextParam}`}
                    onClick={() => transformObjectToString({ order, setOrderTextParam, priceTotal })}
                    style={{ width: '200px' }}
                >
                    Confirmar
                </a >
            </div>
        </>
    )
}