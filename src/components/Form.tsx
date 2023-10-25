import { useState } from 'react'
import style from './Form.module.css'
import { inputsNames } from "../conts";

type props = {
    orderArray: string[] | undefined
}
type Inputs = {
    name: string
    surname: string
    direction?: string
}
export function Form({ orderArray }: props) {
    const [delivery, setDelivery] = useState<boolean>(false)
    const [inputs, setinputs] = useState<Inputs>({
        name: '',
        surname: '',
        direction: ''
    })
    const changeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value
        setinputs(inputs => { return { ...inputs, [name]: value } })
    }
    const price: (number | undefined)[] | undefined = orderArray?.map((order) => {
        if (order.length > 0) {
            const text = order.split("=");
            const title = text[0];
            const amount: number = Number(text[1]);
            if (amount > 0 && title == 'price')
                return (
                    amount
                );
        }
    })
    return (
        <>
            <form className={style.form}>
                <label className={style.label}>
                    Nombre:
                    <input name={inputsNames.name} type="text" onChange={(event) => changeInputs(event)} />
                </label>
                <label className={style.label}>
                    Apellido:
                    <input name={inputsNames.surname} type="text" onChange={(event) => changeInputs(event)} />
                </label>
                <label className={style.label}>
                    Forma de entrega:
                    <input
                        name={inputsNames.delivery}
                        type='checkbox'
                        onClick={() => setDelivery(delivery => !delivery)}
                    />
                    A domicilio
                    <input
                        name={inputsNames.retire}
                        type='checkbox'
                        onClick={() => setDelivery(delivery => !delivery)}
                    />
                    Retirar
                </label>
                {delivery ?
                    <label className={style.label}>
                        Direccion:
                        <input name={inputsNames.direction} type="text" />
                    </label> : <></>
                }

            </form>
            <p>Orden:</p>
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
            <a href='https://wa.me/3434403870/?text=Hola%20soy...'>Confirmar pedido</a>
        </>
    )
}