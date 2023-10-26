import type { errorsForm } from "../types";
import type { validateErrorsProps } from "./typesServices";

export const validateErrors = ({ input, setErrors, price }: validateErrorsProps) => {
    console.log(price)
    console.log(input.cash)
    
    let error: errorsForm = {}

    if (input.name.length == 0) {
        error.name = 'Complete su nombre'
    } else delete error.name

    if (input.surname.length == 0) {
        error.surname = 'Complete su apellido'
    } else delete error.surname

    if (input.delivery.length == 0) {
        error.delivery = 'Selecciona una forma de entrega'
    } else delete error.delivery

    if (input.direction?.length == 0) {
        error.direction = 'Complete su direccion'
    } else delete error.direction

    if (input.payment.length == 0) {
        error.payment = 'Seleccione una forma de pago'
    } else delete error.payment

    if (Number(input.cash) < Number(price)) {
        error.cash = 'Monto insuficiente'
    } else delete error.cash

    if (input.time.length == 0) {
        error.time = 'Seleccione un horario'
    } else delete error.time

    setErrors(error)
}