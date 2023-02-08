export const day = new Date().getDate();
export const month = new Date().getMonth() + 1;
export const year = new Date().getFullYear();
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let AmPm = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
let minutesWithLeadingZeros = ("0" + minutes).slice(-2);
export let formattedTime = hours + " : " + minutesWithLeadingZeros + " " + AmPm;
