import type { whattssapMessagesProps } from "./typesServices";

export const whatssapMessage = ({ inputs, orderArray, price }: whattssapMessagesProps) => {
    const { name, surname, cash, delivery, payment, direction } = inputs
    const space = '%20'
    const line = '%0A'
    const order: (string | undefined)[] | undefined = orderArray?.filter(order => {
        if (Number(order.split('=')[1]) > 0) return `${order.replace('=', ' ')}`
    })
    const message = `Hola${space}buenas${line}
    Queria${space}realizar${space}un${space}pedido${space}para${space}las${space}(horario)${space}a${space}nombre${space}de${space}${name} ${surname}${line}
    Pedido:${line}
    ${order?.map(pedido => {
        if (pedido?.split('=')[0] != 'price') return `${pedido?.replace('=', ' ')}${line}`
    })}
    Forma de entrega: ${delivery}${line}
    ${direction ? `Direccion: ${direction}${line}` : ''}
    Total a pagar: ${price?.pop()}${line}
    Forma de pago: ${payment}${line}
    ${cash ? `Monto de pago: ${cash}${line}` : ''}`

    return message
}
