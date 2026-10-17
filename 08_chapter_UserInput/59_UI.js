let num = prompt("Enter a number:");
num = Number(num);  // convert string to number

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}

//prompt() will not work if you run this file with Node in VS Code.
//npm install prompt-sync  (Terminal > New Terminal & enter this command to install the prompt-sync package)
/*const prompt = require('prompt-sync')();

let num1 = prompt("Enter a number: ");
num1 = Number(num);

if (num1 % 2 === 0) {
    console.log(num1 + " is Even");
} else {
    console.log(num1 + " is Odd");
}*/