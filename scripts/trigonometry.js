"use strict";
/* Trigonometry section */
var hyp = 0;
var tri = 0;
const triFunctions = document.getElementsByClassName('tri');
const inverseTriFunctions = document.getElementsByClassName('atri');
const hypFunctions = document.getElementsByClassName('hyp');
const inverseHypFunctions = document.getElementsByClassName('ahyp');
const arrLen = triFunctions.length;
const hide = () => {
    for (let i = 0; i < arrLen; i++) {
        inverseTriFunctions[i].style.display = "none";
        hypFunctions[i].style.display = "none";
        inverseHypFunctions[i].style.display = "none";
    }
};
hide();
const toggleTri = (ele) => {
    ele.classList.toggle("clicked-bg");
    if (hyp == 0 && tri == 0) {
        for (let i = 0; i < arrLen; i++) {
            inverseTriFunctions[i].style.display = "";
            triFunctions[i].style.display = "none";
            tri = 1;
        }
    }
    else if (hyp == 0 && tri == 1) {
        for (let i = 0; i < arrLen; i++) {
            inverseTriFunctions[i].style.display = "none";
            triFunctions[i].style.display = "";
            tri = 0;
        }
    }
    else if (hyp == 1 && tri == 0) {
        for (let i = 0; i < arrLen; i++) {
            hypFunctions[i].style.display = "none";
            inverseHypFunctions[i].style.display = "";
            tri = 1;
        }
    }
    else {
        for (let i = 0; i < arrLen; i++) {
            inverseHypFunctions[i].style.display = "none";
            hypFunctions[i].style.display = "";
            tri = 0;
        }
    }
};
//arrow functions won't allow binding of this here that's why we required declaration
const toggleHyp = (ele) => {
    ele.classList.toggle("clicked-bg");
    if (tri == 0 && hyp == 0) {
        for (let i = 0; i < arrLen; i++) {
            triFunctions[i].style.display = "none";
            hypFunctions[i].style.display = "";
            hyp = 1;
        }
    }
    else if (tri == 0 && hyp == 1) {
        for (let i = 0; i < arrLen; i++) {
            hypFunctions[i].style.display = "none";
            triFunctions[i].style.display = "";
            hyp = 0;
        }
    }
    else if (tri == 1 && hyp == 0) {
        for (let i = 0; i < arrLen; i++) {
            inverseTriFunctions[i].style.display = "none";
            inverseHypFunctions[i].style.display = "";
            hyp = 1;
        }
    }
    else {
        for (let i = 0; i < arrLen; i++) {
            inverseHypFunctions[i].style.display = "none";
            inverseTriFunctions[i].style.display = "";
            hyp = 0;
        }
    }
};
//adding toggling
const triBtn2nd = document.getElementById('tri-btn-2nd');
triBtn2nd.addEventListener('click', function () { toggleTri(this); });
const triBtnHyp = document.getElementById('tri-btn-hyp');
triBtnHyp.addEventListener('click', function () { toggleHyp(this); });
const trigonometryDropdown = document.getElementById('trigonometry-dropdown');
trigonometryDropdown.addEventListener('click', () => {
    document.getElementById("trigonometry-content").classList.toggle("show");
});
const degRad = document.getElementById('deg-rad');
degRad.addEventListener('click', () => {
    if (deg == 0) {
        degRad.innerHTML = "DEG";
        deg = 1;
    }
    else {
        degRad.innerHTML = "RAD";
        deg = 0;
    }
});
//sin
document.getElementById('sin')
    .addEventListener('click', () => {
    input.value = (deg == 1) ? (Math.sin((Math.PI / 180) * Number(input.value))).toFixed(5) : (Math.sin(Number(input.value))).toFixed(5);
});
//cos
document.getElementById('cos')
    .addEventListener('click', () => {
    input.value = (deg == 1) ? (Math.cos((Math.PI / 180) * Number(input.value))).toFixed(5) : (Math.cos(Number(input.value))).toFixed(5);
});
//tan
document.getElementById('tan')
    .addEventListener('click', () => {
    input.value = (deg == 1) ? (Math.tan((Math.PI / 180) * Number(input.value))).toFixed(5) : (Math.tan(Number(input.value))).toFixed(5);
});
//sec
document.getElementById('sec')
    .addEventListener('click', () => {
    input.value = (deg == 1) ? (1 / Math.cos((Math.PI / 180) * Number(input.value))).toFixed(5) : (1 / Math.cos(Number(input.value))).toFixed(5);
});
//csc
document.getElementById('csc')
    .addEventListener('click', () => {
    input.value = (deg == 1) ? (1 / Math.sin((Math.PI / 180) * Number(input.value))).toFixed(5) : (1 / Math.sin(Number(input.value))).toFixed(5);
});
//cot
document.getElementById('cot')
    .addEventListener('click', () => {
    input.value = (deg == 1) ? (1 / Math.tan((Math.PI / 180) * Number(input.value))).toFixed(5) : (1 / Math.tan(Number(input.value))).toFixed(5);
});
//sin inverse
document.getElementById('asin')
    .addEventListener('click', () => {
    input.value = (deg == 1) ? ((180 / Math.PI) * Math.asin(Number(input.value))).toFixed(5) : (Math.asin(Number(input.value))).toFixed(5);
});
//cos inverse
document.getElementById('acos')
    .addEventListener('click', () => {
    input.value = (deg == 1) ? ((180 / Math.PI) * Math.acos(Number(input.value))).toFixed(5) : (Math.acos(Number(input.value))).toFixed(5);
});
//tan inverse
document.getElementById('atan')
    .addEventListener('click', () => {
    input.value = (deg == 1) ? ((180 / Math.PI) * Math.atan(Number(input.value))).toFixed(5) : (Math.atan(Number(input.value))).toFixed(5);
});
//sec inverse
document.getElementById('asec')
    .addEventListener('click', () => {
    input.value = (deg == 1) ? ((180 / Math.PI) * Math.acos(1 / Number(input.value))).toFixed(5) : (Math.acos(1 / Number(input.value))).toFixed(5);
});
//cosec inverse
document.getElementById('acsc')
    .addEventListener('click', () => {
    input.value = (deg == 1) ? ((180 / Math.PI) * Math.asin(1 / Number(input.value))).toFixed(5) : (Math.asin(1 / Number(input.value))).toFixed(5);
});
//cot inverse
document.getElementById('acot')
    .addEventListener('click', () => {
    input.value = (deg == 1) ? ((180 / Math.PI) * Math.atan(1 / Number(input.value))).toFixed(5) : (Math.atan(1 / Number(input.value))).toFixed(5);
});
//sinh
document.getElementById('sinh')
    .addEventListener('click', () => {
    input.value = Math.sinh(Number(input.value)).toFixed(5);
});
//cosh
document.getElementById('cosh')
    .addEventListener('click', () => {
    input.value = Math.cosh(Number(input.value)).toFixed(5);
});
//tanh
document.getElementById('tanh')
    .addEventListener('click', () => {
    input.value = Math.tanh(Number(input.value)).toFixed(5);
});
//sech
document.getElementById('sech')
    .addEventListener('click', () => {
    input.value = (1 / Math.cosh(Number(input.value))).toFixed(5);
});
//cosech
document.getElementById('csch')
    .addEventListener('click', () => {
    input.value = (1 / Math.sinh(Number(input.value))).toFixed(5);
});
//coth
document.getElementById('coth')
    .addEventListener('click', () => {
    input.value = (1 / Math.tanh(Number(input.value))).toFixed(5);
});
//sinh inverse 
document.getElementById('asinh')
    .addEventListener('click', () => {
    input.value = Math.asinh(Number(input.value)).toFixed(5);
});
//cosh inverse 
document.getElementById('acosh')
    .addEventListener('click', () => {
    input.value = Math.acosh(Number(input.value)).toFixed(5);
});
//tanh inverse
document.getElementById('atanh')
    .addEventListener('click', () => {
    input.value = Math.atanh(Number(input.value)).toFixed(5);
});
//sech inverse
document.getElementById('asech')
    .addEventListener('click', () => {
    input.value = Math.acosh(1 / Number(input.value)).toFixed(5);
});
//cosech inverse
document.getElementById('acsch')
    .addEventListener('click', () => {
    input.value = Math.asinh(1 / Number(input.value)).toFixed(5);
});
//coth inverse
document.getElementById('acoth')
    .addEventListener('click', () => {
    input.value = Math.atanh(1 / Number(input.value)).toFixed(5);
});
