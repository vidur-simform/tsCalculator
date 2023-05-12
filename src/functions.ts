//toggle functions on column of 2nd button 
const btn2ndColumn = document.getElementsByClassName('btn-2nd-column');

const btn2nd: HTMLDivElement = document.getElementById('btn-2nd') as HTMLDivElement;
const toggle2nd = () => {
    btn2nd.classList.toggle('clicked-bg');
    for (let ele of btn2ndColumn) {
        ele.classList.toggle("hidden");
    }
}
btn2nd.addEventListener('click', toggle2nd);


//factorial
const factorial = (num: number): number => {
    let ans = 1;
    for (let i = 1; i <= num; i++) {
        ans *= i;
    }
    return ans;
}

//ln
document.getElementById('ln')!
    .addEventListener('click', () => {
        input.value = (Math.log(Number(input.value))).toString();
    });

//log
document.getElementById('log')!
    .addEventListener('click', () => {
        input.value = (Math.log10(Number(input.value))).toString();
    });

//log x base y
const logXBaseY: HTMLDivElement = document.getElementById('log-x-base-y') as HTMLDivElement;
logXBaseY.addEventListener('click', () => {
    if (operatorSymbols.includes(expression.value.slice(-1))) {
        expression.value = expression.value.substring(0, expression.value.length - 1) + "logbase";
    }
    else {
        expression.value += input.value + "logbase";
        input.value = "";
    }
});

//10^x
document.getElementById('ten-power-x')!
    .addEventListener('click', () => {
        input.value = (10 ** Number(input.value)).toString();
    });

//2^x
document.getElementById('two-power-x')!
    .addEventListener('click', () => {
        input.value = (2 ** Number(input.value)).toString();
    });

//e^x
document.getElementById('e-power-x')!
    .addEventListener('click', () => {
        input.value = ((Math.E) ** Number(input.value)).toString();
    });

//square
document.getElementById('square')!
    .addEventListener('click', () => {
        input.value = (Number(input.value) ** 2).toString();
    });
//cube
document.getElementById('cube')!
    .addEventListener('click', () => {
        input.value = (Number(input.value) ** 3).toString();
    });

//square root
document.getElementById('square-root')!
    .addEventListener('click', () => {
        input.value = (Number(input.value) ** (1 / 2)).toString();
    });

//cube root
document.getElementById('cube-root')!
    .addEventListener('click', () => {
        input.value = (Number(input.value) ** (1 / 3)).toString();
    });

//one by x
document.getElementById('one-by-x')!
    .addEventListener('click', () => {
        input.value = (1 / Number(input.value)).toFixed(2);
    });

//abs x (|x|)
document.getElementById('abs')!
    .addEventListener('click', () => {
        input.value = Math.abs(Number(input.value)).toString();
    });

//abs2
document.getElementById('abs2')!
    .addEventListener('click', () => {
        input.value = Math.abs(Number(input.value)).toString();
    });

//exp //bug
document.getElementById('exp')!
    .addEventListener('click', () => {
        if (operatorSymbols.includes(expression.value.slice(-1))) {
            input.value = input.value.substring(0, input.value.length - 1) + ".e";
        }
        else
            input.value += ".e";
    });

//modulo
document.getElementById('mod')!
    .addEventListener('click', () => {
        if (operatorSymbols.includes(expression.value.slice(-1))) {
            expression.value = expression.value.substring(0, expression.value.length - 1) + "mod";
        }
        else {
            expression.value += input.value + "mod";
            input.value = "";
        }
    });

//x power y
document.getElementById('x-power-y')!
    .addEventListener('click', () => {
        if (operatorSymbols.includes(expression.value.slice(-1))) {
            expression.value = expression.value.substring(0, expression.value.length - 1) + "^";
        }
        else {
            expression.value += input.value + "^";
            input.value = "";
        }
    });

//yth root of x
document.getElementById('yth-root-of-x')!
    .addEventListener('click', () => {
        if (operatorSymbols.includes(expression.value.slice(-1))) {
            expression.value = expression.value.substring(0, expression.value.length - 1) + "ythroot";
        }
        else {
            expression.value += input.value + "ythroot";
            input.value = "";
        }
    });

//factorial
document.getElementById('fact')!
    .addEventListener('click', () => {
        expression.value += factorial(Number(input.value));
        input.value = "";
    });