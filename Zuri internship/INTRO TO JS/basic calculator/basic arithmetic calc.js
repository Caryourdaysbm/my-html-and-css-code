function sumNumber(num1, num2){
    var result = parseFloat(num1) + parseFloat(num2);
    alert (result)

}
function subtractNumber(num1, num2){
    var result = parseFloat(num1) - parseFloat(num2);
    alert (result)

}
function multiplyNumber(num1, num2){
    var result = parseFloat(num1) * parseFloat(num2);
    alert (result)
}
function divideNumber(num1, num2){
    var result = parseFloat(num1) / parseFloat(num2);
<<<<<<< HEAD
    alert (result)
=======
   alert (result);
>>>>>>> 8f8b8064907cfc6bfded3f2ac353de61ec0ff373

}
function modNumber(num1, num2){
    var result = parseFloat(num1) % parseFloat(num2);
    alert (result)
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
    alert("please input a basic math operator")
}
