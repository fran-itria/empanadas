// Tipo para el arreglo de empanadas en const.tsx
export type Empanadas = {
    title: titleKey,
    stock: boolean,
    option?: string
}

// Tipo para las props de Card.tsx
export type SetOrder = React.Dispatch<React.SetStateAction<{
    'Carne salada': {
        doc: number;
        half: number;
    };
    'Carne dulce': {
        doc: number;
        half: number;
    };
    Pollo: {
        doc: number;
        half: number;
    };
    'Jamon y queso': {
        doc: number;
        half: number;
    };
    'Cebolla y queso': {
        doc: number;
        half: number;
    };
    Verdura: {
        doc: number;
        half: number;
    };
}>>

export type titleKey = "Carne salada" | "Carne dulce" | "Pollo" | "Jamon y queso" | "Cebolla y queso" | "Verdura"

export type propsCard = {
    title: titleKey;
    stock: boolean;
    option?: string;
    setOrder: SetOrder
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
