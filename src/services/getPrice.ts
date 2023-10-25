import type { Price } from "../types";

export const getPrice = (orderArray: string[] | undefined): Price => {
    return orderArray?.map((order) => {
        if (order.length > 0) {
            const text = order.split("=");
            const title = text[0];
            const amount: number = Number(text[1]);
            if (amount > 0 && title == 'price')
                return (
                    amount
                );
        }
    })
}