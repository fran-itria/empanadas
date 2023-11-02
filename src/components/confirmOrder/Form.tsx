import type { Form } from "../../types";
import { FormElement } from "./FormElement";
import { FormSelectElement } from "./FormSelectElement";
import style from "./Form.module.css";
import { inputDelyveryValues, inputsNames, inputsPaymentValues, labelName } from "../../conts";
import { checkedDeliveryInput, checkedPaymentInput } from "../../services/checkedInputs";


export function Form({ inputs, setInputs, price, errors, setErrors }: Form) {
    return (
        <form className={style.form}>
            <FormElement
                name={labelName.name}
                type={'text'}
                inputName={inputsNames.name}
                error={errors.name}
                statesAndPrice={{ inputs, setInputs, errors, setErrors, price }}
            />
            <FormElement
                name={labelName.surname}
                type={'text'}
                inputName={inputsNames.surname}
                error={errors.surname}
                statesAndPrice={{ inputs, setInputs, errors, setErrors, price }}
            />
            <FormSelectElement
                name={labelName.delivery}
                type={'checkbox'}
                inputName={inputsNames.delivery}
                error={errors.delivery}
                functionCheck={checkedDeliveryInput}
                valueCheck={{ value1: inputDelyveryValues.home, value2: inputDelyveryValues.search }}
                statesAndPrice={{ inputs, setInputs, errors, setErrors, price }}
            />
            {inputs.delivery == inputDelyveryValues.home ?
                <FormElement
                    name={labelName.direction}
                    type={'text'}
                    inputName={inputsNames.direction}
                    error={errors.direction}
                    statesAndPrice={{ inputs, setInputs, errors, setErrors, price }}
                />
                :
                <></>
            }
            <FormSelectElement
                name={labelName.payment}
                type={'checkbox'}
                inputName={inputsNames.payment}
                error={errors.payment}
                functionCheck={checkedPaymentInput}
                valueCheck={{ value1: inputsPaymentValues.efective, value2: inputsPaymentValues.transfer }}
                statesAndPrice={{ inputs, setInputs, errors, setErrors, price }}

            />
            {inputs.payment == inputsPaymentValues.efective ?
                <FormElement
                    name={labelName.cash}
                    type={'number'}
                    inputName={inputsNames.cash}
                    error={errors.cash}
                    statesAndPrice={{ inputs, setInputs, errors, setErrors, price }}

                />
                :
                <></>
            }
            <FormElement
                name={labelName.time}
                type={'time'}
                inputName={inputsNames.time}
                error={errors.time}
                statesAndPrice={{ inputs, setInputs, errors, setErrors, price }}

            />
        </form>
    )
}