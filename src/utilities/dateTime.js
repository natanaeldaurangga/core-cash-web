const normalizeISO = (isoDate) => {
    let options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    let date = new Date(isoDate + "Z").toLocaleTimeString('id-ID', options);
    return date.substring(0, date.length - 3) + " WIB";
}

export const DateTimeUtil = {
    normalizeISO
};