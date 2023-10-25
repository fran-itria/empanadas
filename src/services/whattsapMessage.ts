import type { whattssapMessagesProps } from "./typesServices";

export const whatssapMessage = ({ inputs, orderArray, price }: whattssapMessagesProps) => {
    const { name, surname, cash, delivery, payment, direction } = inputs
    const space = '%20'
    const order: (string | undefined)[] | undefined = orderArray?.filter(order => {
        if (Number(order.split('=')[1]) > 0) return `${order.replace('=', ' ')}`
    })
    const message = `Hola${space}buenas${space}queria${space}realizar${space}
    un${space}pedido${space}para${space}las${space}(horario)
    ${space}a${space}nombre${space}de${space}${name} ${surname}${space}
    Pedido: 
    ${order?.map(pedido => {
        if (pedido?.split('=')[0] != 'price') return `${pedido?.replace('=', ' ')}`
    })}
    Forma de entrega: ${delivery}
    ${direction ? `Direccion: ${direction}` : ''}
    Total a pagar: ${price?.pop()}
    Forma de pago: ${payment}
    ${cash ? `Monto de pago: ${cash}` : ''}`

    return message
}
