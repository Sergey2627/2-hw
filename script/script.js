var number1 = prompt("Введіть перше число:");
var number2 = prompt("Введіть друге число:");

var num1 = parseFloat(number1);
var num2 = parseFloat(number2);

var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;

alert(num1 + " + " + num2 + " = " + sum + "\n" +
      num1 + " - " + num2 + " = " + difference + "\n" +
      num1 + " * " + num2 + " = " + product + "\n" +
      num1 + " / " + num2 + " = " + quotient);
