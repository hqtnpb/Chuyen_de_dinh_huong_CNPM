let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
export const getDay = (timestamp) => {
    let date = new Date(timestamp);
    return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

export const getFullDay = (timestamp) => {
    let date = new Date(timestamp);
    return `${date.getDate()} ${
        month[date.getMonth()]
    }, ${date.getFullYear()} `;
};
