const idr = (num) => {
    return "IDR " + (new Intl.NumberFormat("id-ID").format(num));
}

const usd = (num) => {
    return "IDR " + (new Intl.NumberFormat("en-US").format(num));
}



export const CurrencyFormat = {
    idr,
    usd
};
