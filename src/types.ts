export type titleKey = "Carne salada" | "Carne dulce" | "Pollo" | "Jamon y queso" | "Cebolla y queso" | "Verdura"

// Tipo para el arreglo de empanadas en const.tsx
export type Empanadas = {
    title: titleKey,
    stock: boolean
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

export type propsCard = {
    title: titleKey;
    stock: boolean;
    setOrder: SetOrder
    setPriceTotal: React.Dispatch<React.SetStateAction<number>>
};

// Tipo para el parametro del componente ConfirmOrder y OrderArray
export type propsConfirmOrder = {
    orderArray: string[] | undefined
}

// Tipo para el estado del formulario en Form.tsx
export type Inputs = {
    name: string
    surname: string
    delivery: string
    direction?: string
    payment: string
    cash?: string
    time: string
}
export type Price = number

// Tipo para el formulario 
export type Form = {
    inputs: Inputs
    setInputs: React.Dispatch<React.SetStateAction<Inputs>>
    errors: errorsForm
    setErrors: React.Dispatch<React.SetStateAction<errorsForm>>
    price: number
}

// Tipo para los elementos del formulario
export type formElements = {
    name: string
    type: string
    statesAndPrice: Form
    inputName: string
    error: string | undefined
    functionCheck?: Function
    valueCheck?: {
        value1: string
        value2: string
    }
}

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