import type { whattssapMessagesProps } from "./typesServices";

export const whatssapMessage = ({ inputs, orderArray }: whattssapMessagesProps) => {
    const { name, surname, cash, delivery, payment, direction, time } = inputs
    const space = '%20'
    const line = '%0A'
    const order: (string | undefined)[] | undefined = orderArray?.filter(order => {
        if (Number(order.split('=')[1]) > 0 && !order.includes('price')) return order?.replace('=', ' ')
    })
    let orderMessage = ''
    order?.forEach(order => {
        const number = order?.split('=')[1]
        const text = order?.split('=')[0]
        orderMessage += `
        - ${text}: ${number} ${number && Number(number) > 1 ? 'docenas' : 'docena'}${line}`
    })
    const message = `Hola${space}buenas${line}Queria${space}realizar${space}un${space}pedido${space}para${space}las${space}${time}hs${space}a${space}nombre${space}de${space}${name} ${surname}${line}Pedido:${line}${orderMessage}Forma de entrega: ${delivery}${line}${direction ? `Direccion: ${direction}` : ``}${line}Forma de pago: ${payment}${Number(cash) > 0 ? `${line}Monto de pago: ${cash}` : ''}`

    return message
}
