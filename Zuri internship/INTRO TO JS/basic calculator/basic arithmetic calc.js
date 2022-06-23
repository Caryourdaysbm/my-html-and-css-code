function sumNumber(num1, num2){
    var result = parseFloat(num1) + parseFloat(num2);
    console.log(result);

}
function subtractNumber(num1, num2){
    var result = parseFloat(num1) - parseFloat(num2);
    console.log(result);

}
function multiplyNumber(num1, num2){
    var result = parseFloat(num1) * parseFloat(num2);
    console.log(result);
}
function divideNumber(num1, num2){
    var result = parseFloat(num1) / parseFloat(num2);
    console.log(result);

}
function modNumber(num1, num2){
    var result = parseFloat(num1) % parseFloat(num2);
    console.log(result);
}

var num1 = prompt('input a first number')
var operator = prompt('input a basic math operator')
var num2 = prompt('input a second number')

if (operator == '+' ){
    sumNumber(num1, num2)
}
else if (operator == '-' ) {
    subtractNumber(num1, num2)
}
else if (operator == '/' ){
    divideNumber(num1, num2)
}
else if (operator == '%' ){
    modNumber(num1, num2)
}
else {
    console.log("please input a basic math operator")
}
