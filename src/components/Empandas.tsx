import { empanadas, initialOrder } from '../conts.ts'
import { Card } from "../components/Card.tsx";
import { useState } from "react";

export function Empanadas() {
    const [order, setOrder] = useState(initialOrder)
    const [priceTotal, setPriceTotal] = useState<number>(0)
    const [orderTextParam, setOrderTextParam] = useState<string>('')
    const transformObjectToString = () => {
        for (const [key, value] of Object.entries(order)) {
            setOrderTextParam(orderTextParam => orderTextParam + `${key}=${value}-`)
        }
        setOrderTextParam(orderTextParam => orderTextParam + `price=${priceTotal}`)
    }
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
            <a
                href={`/confirm-order-${orderTextParam}`}
                onClick={() => transformObjectToString()}
                style={{ width: '200px' }}
            >
                Confirmar
            </a >
        </>
    )
}