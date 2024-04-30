//element creation for number 1
let num1element = document.createElement("p");
let textnum1Element = document.createTextNode("1");
num1element.appendChild(textnum1Element);
let parentElementrow1 = document.querySelector(".innerRow1");
parentElementrow1.appendChild(num1element);
//element creation for number 2
let num2element = document.createElement("p");
let textnum2Element = document.createTextNode("2");
num2element.appendChild(textnum2Element);
parentElementrow1.appendChild(num2element);
//element creation for number3
let num3element = document.createElement("p");
let textnum3Element = document.createTextNode("3");
num3element.appendChild(textnum3Element);
parentElementrow1.appendChild(num3element);
//element creation for number 4
let num4element = document.createElement("p");
let textnum4Element = document.createTextNode("4");
num4element.appendChild(textnum4Element);
let parentElementrow2 = document.querySelector(".innerRow2");
parentElementrow2.appendChild(num4element);

// element creation for number 5.

let num5element = document.createElement("p");
let textnum5Element = document.createTextNode("5");
num5element.appendChild(textnum5Element);
parentElementrow2.appendChild(num5element);

//element creation for number 6

let num6element = document.createElement("p");
let textnum6Element = document.createTextNode("6");
num6element.appendChild(textnum6Element);
parentElementrow2.appendChild(num6element);

// element creation for number 7

let num7element = document.createElement("p");
let textnum7Element = document.createTextNode("7");
num7element.appendChild(textnum7Element);
let parentElementrow3 = document.querySelector(".innerRow3");
parentElementrow3.appendChild(num7element);

//element creation for number 8

let num8element = document.createElement("p");
let textnum8Element = document.createTextNode("8");
num8element.appendChild(textnum8Element);
parentElementrow3.appendChild(num8element);

//element creation for number 9

let num9element = document.createElement("p");
let textnum9Element = document.createTextNode("9");
num9element.appendChild(textnum9Element);
parentElementrow3.appendChild(num9element);

//element creation for number 0

let num0element = document.createElement("p");
let textnum0Element = document.createTextNode("0");
num0element.appendChild(textnum0Element);
let parentElementrow4 = document.querySelector(".innerRow4");
parentElementrow4.appendChild(num0element);

let displayElement = document.querySelector(".display");
let displayElement1 = document.querySelector(".display1");

let submitbuttonElement = document.querySelector(".submit");
submitbuttonElement.addEventListener("click", function () {
  let code = displayElement.value;
  let result = eval(code);
  displayElement1.innerText = result;
});
