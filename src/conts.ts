type Empanadas = {
    title: string,
    stock: boolean,
    option?: string
}

export const empanadas: Empanadas[] = [
    { title: 'Carne salada', stock: true },
    { title: 'Carne dulce', stock: true },
    { title: 'Pollo', stock: true },
    { title: 'Jamon y queso', stock: true, option: 'Ricota' },
    { title: 'Cebolla y queso', stock: true },
    { title: 'Verdura', stock: true },
]

export const priceDoc: number = 2500
export const priceMed: number = 2500 / 2

const Empanadas1 = 'public/images/Empanadas1.jpeg'
const Empanadas2 = 'public/images/Empanadas2.jpeg'
const Empanadas3 = 'public/images/Empanadas3.jpeg'
const Empanadas4 = 'public/images/Empanadas4.jpeg'

export const images = [Empanadas1, Empanadas2, Empanadas3, Empanadas4]

export const add = 'add'
export const substract = 'substract'

export const initialOrder = {
    'Carne salada': 0,
    'Carne dulce': 0,
    'Pollo': 0,
    'Jamon y queso': 0,
    'Cebolla y queso': 0,
    'Verdura': 0
}

export const inputsNames = {
    name: 'name',
    surname: 'surname',
    direction: 'direction',
    delivery: 'delivery',
    retire: 'retire'
}