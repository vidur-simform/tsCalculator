//log function
// function print(t) {
//     console.log(t);
// }

//fixed-exponential toggle
const fE: HTMLButtonElement = document.getElementById('f-e') as HTMLButtonElement;
fE.addEventListener('click', () => {
    fix = (fix == 0) ? 1 : 0;
    fE.classList.toggle('clicked-bg');
});

const input: HTMLInputElement = document.getElementById('input-text') as HTMLInputElement;
const expression: HTMLInputElement = document.getElementById('expression-text') as HTMLInputElement;
const numberInputs = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const equal: HTMLButtonElement = document.getElementById('equal') as HTMLButtonElement;
const brackets = document.getElementsByClassName('bracket');
const operatorSymbols: string[] = ["*", "+", "-", "/"];

//numbers input
for (let ele of numberInputs) {
    ele.addEventListener('click', () => {
        input.value += ele.innerHTML;
    })
}

//brackets
for (let ele of brackets) {
    ele.addEventListener('click', () => {
        input.value += ele.innerHTML;
    })
}

//operators
for (let ele of operators) {
    ele.addEventListener('click', () => {
        if (input.value == "") {
            expression.value = expression.value.substring(0, expression.value.length - 1) + ele.innerHTML;
        }
        else {
            expression.value += input.value + ele.innerHTML;
            input.value = "";
        }
    })
}
//clear
const clear: HTMLButtonElement = document.getElementById('clear') as HTMLButtonElement;
clear.addEventListener('click', () => {
    expression.value = "";
    input.value = "";
});

//backspace (erase last)
const eraseLast: HTMLButtonElement = document.getElementById('erase-last') as HTMLButtonElement;
eraseLast.addEventListener('click', () => {
    input.value = input.value.substring(0, input.value.length - 1);
});

//replace and evaluate
const replaceAndEvaluateAll = (target: string, method: (a: number, b: number) => string) => {
    let str = "", tarIndex = -1, i = -1, x = 0, y = 2, result = "0";
    while (true) {
        str = expression.value.toString();
        tarIndex = str.indexOf(target);
        if (tarIndex == -1)
            break;
        i = tarIndex - 1;
        while (i >= 0 && ((!isNaN(parseInt(str[i]))) || str[i] == '.'))
            i--;
        i++;
        x = parseFloat(str.substring(i, tarIndex));
        y = parseFloat(str.substring(tarIndex + target.length));
        result = method(x, y).toString();
        expression.value = str.replace(x.toString() + target + y.toString(), result);
    }
}

const logXBaseYMethod = (a: number, b: number) => (Math.log(a) / Math.log(b)).toFixed(5);
const ythRootOfXMethod = (a: number, b: number) => (Math.pow(a, 1 / b)).toFixed(5);

equal.addEventListener('click', () => {
    try {
        expression.value += input.value;

        //evaluate all logXbaseY
        replaceAndEvaluateAll("logbase", logXBaseYMethod);
        //evaluate all ythRoot Of X
        replaceAndEvaluateAll("ythroot", ythRootOfXMethod);

        input.value = eval((expression.value).replaceAll("^", "**").replaceAll("mod", "%")
            .replaceAll("÷", "/").replaceAll("x", "*"));
    }
    catch (err) {
        alert("Invalid expression!")
        expression.value = "";
        input.value = "";
    }
})

//alter sign
const alterSign: HTMLButtonElement = document.getElementById('altersign') as HTMLButtonElement;
alterSign.addEventListener('click', () => {
    input.value = (-1 * parseFloat(input.value)).toString();
});

//e 
const constE: HTMLButtonElement = document.getElementById('const-e') as HTMLButtonElement;
constE.addEventListener('click', () => {
    input.value = Math.E.toString();
});

//pi 
const constPi:HTMLButtonElement = document.getElementById('const-pi') as HTMLButtonElement;
constPi.addEventListener('click', () => {
    if (!isNaN(parseInt(input.value.slice(-1)))) {
        input.value = Math.PI.toString();
    }
    else {
        input.value += Math.PI;
    }
});

var deg = 0, fix = 1;

/* fixed to exponential */
document.getElementById('f-e')!
    .addEventListener('click', () => {
        if (fix == 1) {
            input.value = Number(input.value).toExponential().toString();
        }
        else {
            input.value = Number(input.value).toFixed(5).toString();
        }
    });