import type { propsForm } from "../../types";
import './OrderArray.module.css'


export function OrderArray({ orderArray }: propsForm) {

    return (
        <ul>
            {
                orderArray?.map((order) => {
                    if (order.length > 0) {
                        const text = order.split("=");
                        const title = text[0];
                        const doc = Number(text[1].split(',')[0].replace('doc', ''))
                        const half = text[1].split(',')[1]
                        if (title != 'price')
                            return (
                                <li>
                                    {title}: {doc > 0 && Number(half.replace('med', '')) > 0 ?
                                        `${doc} docenas y media` :
                                        doc > 1 ? `${doc} docenas` :
                                            doc == 1 ? `${doc} docena` :
                                                doc == 0 && Number(half.replace('med', '')) > 0 ? 'media docena'
                                                    : <></>}
                                </li>
                            );
                    }
                })
            }
        </ul>
    )
}