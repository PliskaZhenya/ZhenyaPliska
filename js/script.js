let seconds = prompt("input seconds");
const min = 60;
const hour = min * 60;
const day = hour * 24;
let days = Math.floor(seconds/day);
let reminder = seconds % day;
let hours = Math.floor(reminder/hour);
reminder = reminder % hour;
let mins = Math.floor(reminder/min);
reminder = reminder % min;
console.log(String(days).padStart(2, "0") + ":" + String(hours).padStart(2, "0") + ":" + String(mins).padStart(2, "0") + ":" + String(reminder).padStart(2, "0"));

