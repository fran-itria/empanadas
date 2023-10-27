// Tipo para el arreglo de empanadas en const.tsx
export type Empanadas = {
    title: string,
    stock: boolean,
    option?: string
}

// Tipo para las props de Card.tsx
export type propsCard = {
    title: string;
    stock: boolean;
    option?: string;
    setOrder: React.Dispatch<React.SetStateAction<{
        'Carne salada': number;
        'Carne dulce': number;
        Pollo: number;
        'Jamon y queso': number;
        'Cebolla y queso': number;
        Verdura: number;
    }>>
    setPriceTotal: React.Dispatch<React.SetStateAction<number>>
};

// Tipo para el estado del formulario en Form.tsx
export type propsForm = {
    orderArray: string[] | undefined
}
export type Inputs = {
    name: string
    surname: string
    delivery: string
    direction?: string
    payment: string
    cash: string
    time: string
}
export type Price = number

// Tipo para los errores del fomrulario en Form.tsx
export type errorsForm = {
    name?: string
    surname?: string
    delivery?: string
    direction?: string
    payment?: string
    cash?: string
    time?: string
}
