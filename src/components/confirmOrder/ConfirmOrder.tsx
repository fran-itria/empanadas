import { useEffect, useState } from 'react'
import type { Inputs, errorsForm, propsConfirmOrder } from '../../types';
import { getPrice } from '../../services/getPrice';
import { whatssapMessage } from '../../services/whattsapMessage';
import { validateErrors } from '../../services/validateErrors';
import { OrderArray } from './OrderArray';
import { Form } from './Form';
import style from "./ConfirmOrder.module.css";

export function ConfirmOrder({ orderArray }: propsConfirmOrder) {
    const [inputs, setInputs] = useState<Inputs>({
        name: '',
        surname: '',
        delivery: '',
        direction: '',
        payment: '',
        cash: '',
        time: ''
    })
    const [errors, setErrors] = useState<errorsForm>({})
    const price = Number(getPrice(orderArray))
    useEffect(() => { validateErrors({ input: inputs, setErrors, price }) }, [])
    return (
        <div className={style.containerConfirm}>
            <Form
                inputs={inputs}
                setInputs={setInputs}
                errors={errors}
                setErrors={setErrors}
                price={price}
            />
            <p className={style.orderText}>Pedido:</p>
            <OrderArray orderArray={orderArray} />
            <p className={style.total}>Total: ${price ? price : <></>}</p>
            <div className={style.buttons}>
                <a href='/pedir'> Volver </a>
                {Object.keys(errors).length > 0 ?
                    <a className={style.notConfirm}>Confirmar pedido</a>
                    :
                    <a href={`https://wa.me/3435023925/?text=${whatssapMessage({ inputs, orderArray })}`} target='_blank'>Confirmar pedido</a>
                }
            </div>
        </div>
    )
}