import type { textMessage, tittleMessage, whattssapMessagesProps } from "./typesServices";

export const whatssapMessage = ({ inputs, orderArray }: whattssapMessagesProps) => {
    const { name, surname, cash, delivery, payment, direction, time } = inputs
    const space = '%20'
    const line = '%0A'
    const order: (string | undefined)[] | undefined = orderArray?.filter(order => {
        // if (Number(order.split('=')[1]) > 0 && !order.includes('price')) return order?.replace('=', ' ') // Filtrar distinto precio solo doc
        if (order.split('=')[0] != 'price') return order?.replace('=', ' ')
    })
    let orderMessage = ''
    order?.forEach(order => {
        const title: tittleMessage = order?.split('=')[0]
        const text: textMessage = order?.split('=')[1].split(',')
        let doc = 0
        let med = 0
        if (text) {
            doc = Number(text[0].replace('doc', ''))
            med = Number(text[1].replace('med', ''))
        }
        orderMessage += `- ${title}: ${doc > 1 && med == 1 ?
            `${doc} docenas y media` :
            doc > 1 ? `${doc} docenas` :
                doc == 1 ? `${doc} docena` :
                    doc == 0 && med == 1 ? 'media docena' :
                        ''}${line}`
        // Mensaje solo cuando se trata de docenas  
        // const number = order?.split('=')[1]
        // const text = order?.split('=')[0]
        // orderMessage += `- ${text}: ${number} ${number && Number(number) > 1 ? 'docenas' : 'docena'}${line}`
    })
    const message = `Hola${space}buenas${line}Queria${space}realizar${space}un${space}pedido${space}para${space}las${space}${time}hs${space}a${space}nombre${space}de${space}${name} ${surname}${line}Pedido:${line}${orderMessage}Forma de entrega: ${delivery}${direction ? `${line}Direccion: ${direction}` : ``}${line}Forma de pago: ${payment}${Number(cash) > 0 ? `${line}Monto de pago: ${cash}` : ''}`

    return message
}
