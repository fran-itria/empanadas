import { useEffect, useState } from 'react'
import style from './Form.module.css'
import { inputsNames } from "../conts";
import type { Inputs, propsForm } from '../types';
import { changeInputs } from '../services/changeInputs';
import { getPrice } from '../services/getPrice';
import { whatssapMessage } from '../services/whattsapMessage';

export function Form({ orderArray }: propsForm) {
    const [delivery, setDelivery] = useState<boolean>(false)
    const [cash, setCash] = useState<boolean>(false)
    const [inputs, setInputs] = useState<Inputs>({
        name: '',
        surname: '',
        delivery: '',
        direction: '',
        payment: '',
        cash: '0'
    })
    const price = getPrice(orderArray)
    return (
        <>
            <form className={style.form}>
                <label className={style.label}>
                    Nombre:
                    <input name={inputsNames.name} type="text" onChange={(event) => changeInputs({ event, setInputs })} />
                </label>
                <label className={style.label}>
                    Apellido:
                    <input name={inputsNames.surname} type="text" onChange={(event) => changeInputs({ event, setInputs })} />
                </label>
                <label className={style.label}>
                    Entrega:
                    <input
                        name={inputsNames.delivery}
                        type='checkbox'
                        value='A domicilio'
                        onClick={() => setDelivery(delivery => !delivery)}
                        onChange={(event) => changeInputs({ event, setInputs })}
                    />
                    A domicilio
                    <input
                        name={inputsNames.delivery}
                        type='checkbox'
                        value='Retirar'
                        onChange={(event) => changeInputs({ event, setInputs })}
                    />
                    Retirar
                </label>
                {delivery ?
                    <label className={style.label}>
                        Direccion:
                        <input name={inputsNames.direction} type="text" onChange={(event) => changeInputs({ event, setInputs })} />
                    </label> : <></>
                }
                <label>
                    Pago:
                    <input
                        type='checkbox'
                        name={inputsNames.payment}
                        value='Efectivo'
                        onClick={() => setCash(cash => !cash)}
                        onChange={(event) => changeInputs({ event, setInputs })}
                    />
                    Efectivo
                    <input
                        type='checkbox'
                        name={inputsNames.payment}
                        value='Transferencia'
                        onChange={(event) => changeInputs({ event, setInputs })}
                    />
                    Transferencia
                </label>
                {cash ?
                    <label>
                        Monto a pagar:
                        <input
                            type='number'
                            name={inputsNames.cash}
                            onChange={(event) => changeInputs({ event, setInputs })}
                        />
                    </label>
                    : <></>}
            </form>
            <p>Pedido:</p>
            <ul>
                {
                    orderArray?.map((order) => {
                        if (order.length > 0) {
                            const text = order.split("=");
                            const title = text[0];
                            const amount: number = Number(text[1]);
                            if (amount > 0 && title != 'price')
                                return (
                                    <li>
                                        {title}: {amount} docenas
                                    </li>
                                );
                        }
                    })
                }
            </ul>
            <p>Total: ${price}</p>
            <a href={`https://wa.me/3434403870/?text=${whatssapMessage({ inputs, orderArray, price })}`} target='_blank'>Confirmar pedido</a>
        </>
    )
}

// https://wa.me/3434403870/?text=${whatssapMessage({ inputs, orderArray })} target='_blank'