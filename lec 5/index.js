let num1 = 0;
let num2 = 0;

let data = (e) => {
    e.preventDefault();
    let num1 = Number(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
}

let calc = (e) => {
    e.preventDefault();
    let plus = () => {
        data();
        let result = num1 + num2;
        document.getElementById("result").innerHTML = result;
        plus();
    }

    let minus = () => {
        data();
        let result = num1 - num2;
        document.getElementById("result").innerHTML = result;
        minus();
    }

    let multi = () => {
        data();
        let result = num1 * num2;
        document.getElementById("result").innerHTML = result;
        multi();
    }

    let divi = () => {
        data();
        let result = num1 / num2;
        document.getElementById("result").innerHTML = result;
        divi();
    }
}

document.getElementById("display").innerHTML = plus();
document.getElementById("display").innerHTML = minus();
document.getElementById("display").innerHTML = multi();
document.getElementById("display").innerHTML = divi();