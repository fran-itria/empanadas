import type { Empanadas } from "./types"

// Empandas que se venden
export const empanadas: Empanadas[] = [
    { title: 'Carne salada', stock: true },
    { title: 'Carne dulce', stock: true },
    { title: 'Pollo', stock: true },
    { title: 'Jamon y queso', stock: true, option: 'Ricota' },
    { title: 'Cebolla y queso', stock: true },
    { title: 'Verdura', stock: true },
]

// Precio por docena o 1/2 docena
export const priceDoc: number = 2500
export const priceMed: number = 2500 / 2

// Imagenes de las empandas
const Empanadas1 = 'public/images/Empanadas1.jpeg'
const Empanadas2 = 'public/images/Empanadas2.jpeg'
const Empanadas3 = 'public/images/Empanadas3.jpeg'
const Empanadas4 = 'public/images/Empanadas4.jpeg'

export const images = [Empanadas1, Empanadas2, Empanadas3, Empanadas4]

// Constantes para Card.tsx
export const add = 'add'
export const substract = 'substract'

// Estado inicial del pedido de Empanadas.tsx
export const initialOrder = {
    'Carne salada': 0,
    'Carne dulce': 0,
    'Pollo': 0,
    'Jamon y queso': 0,
    'Cebolla y queso': 0,
    'Verdura': 0
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

export const inputDelyveryValues = {
    home: 'A domicilio',
    search: 'Retirar'
}

export const inputsPaymentValues = {
    efective: 'Efectivo',
    transfer: 'Transferencia'
}