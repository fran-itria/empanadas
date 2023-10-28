import { useEffect, useState } from 'react'
import style from './Form.module.css'
import { inputDelyveryValues, inputsNames, inputsPaymentValues } from "../conts";
import type { Inputs, errorsForm, propsForm } from '../types';
import { changeInputs } from '../services/changeInputs';
import { getPrice } from '../services/getPrice';
import { whatssapMessage } from '../services/whattsapMessage';
import { validateErrors } from '../services/validateErrors';
import { checkedDeliveryInput, checkedPaymentInput } from '../services/checkedInputs';

export function Form({ orderArray }: propsForm) {
    const [inputs, setInputs] = useState<Inputs>({
        name: '',
        surname: '',
        delivery: '',
        direction: '',
        payment: '',
        cash: '0',
        time: ''
    })
    const [errors, setErrors] = useState<errorsForm>({})
    const price = Number(getPrice(orderArray))
    useEffect(() => { validateErrors({ input: inputs, setErrors, price }) }, [])
    return (
        <>
            <form className={style.form}>
                <label className={style.label}>
                    Nombre:
                    <input
                        name={inputsNames.name}
                        type="text"
                        onChange={(event) => changeInputs({ inputs, event, setInputs, price, errors, setErrors })} />
                    {Object.keys(errors).length > 0 && errors.name ? <strong>{errors.name}</strong> : <></>}
                </label>
                <label className={style.label}>
                    Apellido:
                    <input
                        name={inputsNames.surname}
                        type="text"
                        onChange={(event) => changeInputs({ inputs, event, setInputs, price, errors, setErrors })} />
                    {Object.keys(errors).length > 0 && errors.surname ? <strong>{errors.surname}</strong> : <></>}
                </label>
                <label className={style.label}>
                    Entrega:
                    <input
                        name={inputsNames.delivery}
                        checked={checkedDeliveryInput(inputDelyveryValues.home, inputs)}
                        type='checkbox'
                        value={inputDelyveryValues.home}
                        onChange={(event) => changeInputs({ inputs, event, setInputs, price, errors, setErrors })}
                    />
                    A domicilio
                    <input
                        name={inputsNames.delivery}
                        checked={checkedDeliveryInput(inputDelyveryValues.search, inputs)}
                        type='checkbox'
                        value={inputDelyveryValues.search}
                        onChange={(event) => changeInputs({ inputs, event, setInputs, price, errors, setErrors })}
                    />
                    Retirar
                    {Object.keys(errors).length > 0 && errors.delivery ? <strong>{errors.delivery}</strong> : <></>}
                </label>
                {inputs.delivery == inputDelyveryValues.home ?
                    <label className={style.label}>
                        Direccion:
                        <input
                            name={inputsNames.direction}
                            type="text"
                            onChange={(event) => changeInputs({ inputs, event, setInputs, price, errors, setErrors })} />
                        {Object.keys(errors).length > 0 && errors.direction ? <strong>{errors.direction}</strong> : <></>}
                    </label> : <></>
                }
                <label>
                    Pago:
                    <input
                        type='checkbox'
                        name={inputsNames.payment}
                        // checked={!inputs.payment ? false : inputs.payment == inputsPaymentValues.efective ? true : false}
                        checked={checkedPaymentInput(inputsPaymentValues.efective, inputs)}
                        value={inputsPaymentValues.efective}
                        onChange={(event) => changeInputs({ inputs, event, setInputs, price, errors, setErrors })}
                        required
                    />
                    Efectivo
                    <input
                        type='checkbox'
                        name={inputsNames.payment}
                        // checked={!inputs.payment ? false : inputs.payment == inputsPaymentValues.transfer ? true : false}
                        checked={checkedPaymentInput(inputsPaymentValues.transfer, inputs)}
                        value={inputsPaymentValues.transfer}
                        onChange={(event) => changeInputs({ inputs, event, setInputs, price, errors, setErrors })}
                    />
                    Transferencia
                    {Object.keys(errors).length > 0 && errors.payment ? <strong>{errors.payment}</strong> : <></>}
                </label>
                {inputs.payment == inputsPaymentValues.efective ?
                    <label>
                        Monto a pagar:
                        <input
                            type='number'
                            name={inputsNames.cash}
                            onChange={(event) => changeInputs({ inputs, event, setInputs, price, errors, setErrors })}
                        />
                        {Object.keys(errors).length > 0 && errors.cash ? <strong>{errors.cash}</strong> : <></>}
                    </label>
                    : <></>}
                <label>
                    Horario:
                    <input
                        type='time'
                        name={inputsNames.time}
                        onChange={(event) => changeInputs({ inputs, event, setInputs, price, errors, setErrors })}
                    />
                    {Object.keys(errors).length > 0 && errors.time ? <strong>{errors.time}</strong> : <></>}
                </label>
            </form>
            <p>Pedido:</p>
            <ul>
                {
                    orderArray?.map((order) => {
                        if (order.length > 0) {
                            const text = order.split("=");
                            const title = text[0];
                            const doc = Number(text[1].split(',')[0].replace('doc', ''))
                            const half = text[1].split(',')[1]
                            if (title != 'price')
                                return (
                                    <li>
                                        {title}: {doc > 0 && Number(half.replace('med', '')) > 0 ?
                                            `${doc} docenas y media` :
                                            doc > 1 ? `${doc} docenas` :
                                                doc == 1 ? `${doc} docena` :
                                                    doc == 0 && Number(half.replace('med', '')) > 0 ? 'media docena'
                                                        : <></>}
                                    </li>
                                );
                        }
                    })
                }
            </ul>
            <p>Total: ${price ? price : <></>}</p>
            {Object.keys(errors).length > 0 ?
                <a style={{ pointerEvents: 'none', cursor: 'not-allowed', opacity: '0.5' }}>Confirmar pedido</a>
                :
                <a href={`https://wa.me/3434403870/?text=${whatssapMessage({ inputs, orderArray })}`} target='_blank'>Confirmar pedido</a>
                // <a onClick={() => whatssapMessage({ inputs, orderArray })}>Confirmar pedido</a>
            }
        </>
    )
}