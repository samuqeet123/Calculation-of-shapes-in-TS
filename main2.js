"use strict";
console.log(Math.PI.toFixed(3));
console.log(Math.random());
console.log(Math.floor(Math.random() * 100));
let r = 35;
let rad = Math.PI * r ** 2;
console.log(rad);
let circle = (radius) => {
    let result = Math.PI * radius ** 2;
    return `If radius is ${radius}, the the circle will be ${result.toFixed(3)}`;
};
console.log(circle(35));