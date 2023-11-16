import type { propsConfirmOrder } from "../../types";
import './OrderArray.module.css'


export function OrderArray({ orderArray }: propsConfirmOrder) {
    return (
        <ul>
            {
                orderArray?.map((order) => {
                    if (order.length > 0) {
                        const text = order.split("=");
                        const title = text[0];
                        if (title != 'price') {
                            const doc = Number(text[1].split(',')[0].replace('doc', ''))
                            const half = Number(text[1].split(',')[1].replace('med', ''))
                            return (
                                <li>
                                    {title}: {doc == 1 && half > 0 ?
                                        `${doc} docena y media` :
                                        doc > 1 && half > 0 ?
                                            `${doc} docenas y media` :
                                            doc > 1 ? `${doc} docenas` :
                                                doc == 1 ? `${doc} docena` :
                                                    doc == 0 && half > 0 ? '1/2 docena'
                                                        : <></>}
                                </li>
                            );
                        }
                    }
                })
            }
        </ul>
    )
}