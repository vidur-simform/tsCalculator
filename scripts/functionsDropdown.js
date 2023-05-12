"use strict";
/* functions dropdown section */
const functionsDropdown = document.getElementById('functions-dropdown');
functionsDropdown.addEventListener('click', () => {
    document.getElementById("functions-content").classList.toggle("show");
});
//ceil
const ceilX = document.getElementById('ceil');
ceilX.addEventListener('click', () => {
    input.value = Math.ceil(Number(input.value)).toString();
});
//floor
const floorX = document.getElementById('floor');
floorX.addEventListener('click', () => {
    input.value = Math.floor(Number(input.value)).toString();
});
//rand
const random = document.getElementById('random');
random.addEventListener('click', () => {
    input.value = Math.random().toString();
});
//degree to dms
const degToDms = document.getElementById('deg-to-dms');
degToDms.addEventListener('click', () => {
    let deg = input.value;
    let minutes = ((Number(deg) - parseInt(deg)) * 60).toString();
    let seconds = ((Number(minutes) - parseInt(minutes) * 60)).toString();
    input.value = parseFloat(`${parseInt(deg)}.${parseInt(minutes)}${parseInt(seconds)}`).toFixed(4).toString();
});
//dms to degree
const dmsToDeg = document.getElementById('dms-to-deg');
dmsToDeg.addEventListener('click', () => {
    let dms = Number(input.value);
    let deg = parseInt(input.value);
    let sec = (Number(dms.toFixed(4)) - Number(dms.toFixed(2))) * 10000;
    let min = (Number(dms.toFixed(2)) - deg) * 100;
    deg = deg + min / 60 + sec / 3600;
    input.value = deg.toFixed(2).toString();
});
