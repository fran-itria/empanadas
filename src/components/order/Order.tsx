import { empanadas, initialOrder } from '../../conts.ts'
import { Card } from "../card/Card.tsx";
import { useState } from "react";
import { transformObjectToString } from "../../services/transformObjectToString.ts";
import style from "./Order.module.css";
import type { InitialOrder } from '../../services/typesServices.ts';

export function Order() {
    const [order, setOrder] = useState<InitialOrder>(initialOrder)
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
                            setOrder={setOrder}
                            setPriceTotal={setPriceTotal}
                        />
                    );
                })
            }
            <div className={style.confirm}>
                {
                    priceTotal > 0 ?
                        <a
                            href={`/confirm-order-${orderTextParam}`}
                            onClick={() => transformObjectToString({ order, setOrderTextParam, priceTotal })}
                            className={style.buttonConfirm}
                        >
                            Confirmar
                        </a >
                        :
                        <a className={style.notButtonConfirm}>
                            Confirmar
                        </a>
                }
            </div>
        </>
    )
}