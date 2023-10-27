export const getPrice = (orderArray: string[] | undefined): string | void => {
    let price = ''
    const amount: string[] | undefined = orderArray?.filter((order) => {
        if (order.length > 0) {
            const text = order.split("=");
            const title = text[0];
            const amount: number = Number(text[1]);
            if (amount > 0 && title == 'price') return order
        }
    })
    if (amount) {
        return price = amount[0].split('=')[1]
    }
}