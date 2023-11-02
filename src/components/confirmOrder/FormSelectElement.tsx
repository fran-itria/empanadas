import { changeInputs } from '../../services/changeInputs'
import type { formElements } from '../../types'
import style from './Form.module.css'

export function FormSelectElement({ name, type, inputName, error, valueCheck, functionCheck, statesAndPrice }: formElements) {
    const { inputs, setInputs, price, errors, setErrors } = statesAndPrice
    return (
        <div className={style.formSelectedInput}>
            <label className={style.selectLabel}>
                {name}:
                <input
                    name={inputName}
                    checked={functionCheck ? functionCheck(valueCheck?.value1, inputs) : null}
                    type={type}
                    value={valueCheck?.value1}
                    onChange={(event) => changeInputs({ inputs, event, setInputs, price, errors, setErrors })}
                    className={style.inputSelected}
                />
                {valueCheck?.value1}
                <input
                    name={inputName}
                    checked={functionCheck ? functionCheck(valueCheck?.value2, inputs) : null}
                    type={type}
                    value={valueCheck?.value2}
                    onChange={(event) => changeInputs({ inputs, event, setInputs, price, errors, setErrors })}
                    className={style.inputSelected}
                />
                {valueCheck?.value2}
            </label>
            {Object.keys(errors).length > 0 && error ? <strong>{error}</strong> : <></>}
        </div>
    )
}