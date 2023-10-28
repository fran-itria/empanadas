import { useEffect, useState } from 'react'
import type { Inputs, errorsForm, propsForm } from '../../types';
import { getPrice } from '../../services/getPrice';
import { whatssapMessage } from '../../services/whattsapMessage';
import { validateErrors } from '../../services/validateErrors';
import { OrderArray } from './OrderArray';
import { Form } from './Form';

export function ConfirmOrder({ orderArray }: propsForm) {
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
            <Form
                inputs={inputs}
                setInputs={setInputs}
                errors={errors}
                setErrors={setErrors}
                price={price}
            />
            <p>Pedido:</p>
            <OrderArray orderArray={orderArray} />
            <p>Total: ${price ? price : <></>}</p>
            <div>
                <a href='/pedir'> Back </a>
                {Object.keys(errors).length > 0 ?
                    <a style={{ pointerEvents: 'none', cursor: 'not-allowed', opacity: '0.5' }}>Confirmar pedido</a>
                    :
                    <a href={`https://wa.me/3434403870/?text=${whatssapMessage({ inputs, orderArray })}`} target='_blank'>Confirmar pedido</a>
                }
            </div>
        </>
    )
}