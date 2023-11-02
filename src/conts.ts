import type { Empanadas } from "./types"

// Empandas que se venden
export const empanadas: Empanadas[] = [
    { title: 'Carne salada', stock: true },
    { title: 'Carne dulce', stock: true },
    { title: 'Pollo', stock: true },
    { title: 'Jamon y queso', stock: true },
    { title: 'Cebolla y queso', stock: true },
    { title: 'Verdura', stock: true },
]

// Precio por docena o 1/2 docena
export const priceDoc: number = 2500
export const priceMed: number = 2500 / 2

// Constantes para Card.tsx
export const add = 'add'
export const substract = 'substract'

// Estado inicial del pedido de Empanadas.tsx
export const initialOrder = {
    'Carne salada': { doc: 0, half: 0 },
    'Carne dulce': { doc: 0, half: 0 },
    'Pollo': { doc: 0, half: 0 },
    'Jamon y queso': { doc: 0, half: 0 },
    'Cebolla y queso': { doc: 0, half: 0 },
    'Verdura': { doc: 0, half: 0 }
}

// Estado incial del formulario de Form.tsx
export const inputsNames = {
    name: 'name',
    surname: 'surname',
    direction: 'direction',
    delivery: 'delivery',
    cash: 'cash',
    payment: 'payment',
    time: 'time'
}

// Valores de los inputs de la forma de entrega
export const inputDelyveryValues = {
    home: 'A domicilio',
    search: 'Retirar'
}

// Valores de los inputs de la forma de pago 
export const inputsPaymentValues = {
    efective: 'Efectivo',
    transfer: 'Transferencia'
}