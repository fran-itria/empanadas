import { changeInputs } from "../../services/changeInputs";
import type { formElements } from "../../types";
import style from './ConfirmOrder.module.css'

export function FormElement({ name, type, inputName, error, statesAndPrice }: formElements) {
    const { inputs, setInputs, price, errors, setErrors } = statesAndPrice
    return (
        <label className={style.label}>
            {name}
            <input
                name={inputName}
                type={type}
                onChange={(event) => changeInputs({ inputs, event, setInputs, price, errors, setErrors })} />
            {Object.keys(errors).length > 0 && error ? <strong>{error}</strong> : <></>}
        </label>
    )
}