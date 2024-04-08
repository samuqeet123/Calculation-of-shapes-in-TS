"use strict";
function cal(opr, num1, num2) {
    let result;
    switch (opr) {
        case "addition":
            result = num1 + num2;
            console.log(`The addition will be ${result}`);
            break;
        case "Substraction":
            result = num1 - num2;
            console.log(`The substraction will be ${result}`);
            break;
        case "multiplication":
            result = num1 * num2;
            console.log(`The multiplication will be ${result}`);
            break;
        case "division":
            result = num1 / num2;
            console.log(`The division will be ${result}`);
            break;
        default: console.log("Try addition, substraction, multiplication or division");
    }
}
cal("Sub", 56, 92);
// create function to find the area of circle, ractangle, square, triangle
