let billEl = document.querySelector("#bill");
let noOfPeopleEl = document.querySelector("#people");
let tipPercentagesEl = document.querySelectorAll(".cl-percent");
let tipAmountPerPersonEl = document.querySelector("#tip-per-person");
let totalAmountPerPersonEl = document.querySelector("#total-per-person");

let billAmount = 0;
let noOfPeople = 0;
let tipPercentage = 0;

billEl.addEventListener('keyup', e => {
    billAmount = Number(e.target.value);
})

noOfPeopleEl.addEventListener('keyup', e => {
    noOfPeople = Number(e.target.value);
})

Array.from(tipPercentagesEl).forEach(tipPercentages => {
    tipPercentages.addEventListener('click', e => {
        if (e.target.innerText.includes("%")) {
            tipPercentage = Number(e.target.innerText.replace("%", ""));}
        })
})
function calculateTip(){
    let tipAmount = billAmount * (tipPercentage/100);
    let totalAmount = billAmount + tipAmount; 
    let tipAmountPerPerson = tipAmount / noOfPeople;
    let totalAmountPerPerson = totalAmount / noOfPeople;
    updateValues({tipAmountPerPerson, totalAmountPerPerson});
}

function updateValues({tipAmountPerPerson, totalAmountPerPerson}){
tipAmountPerPersonEl.innerText = tipAmount.toFiixed(2);
totalAmountPerPersonEl.innerText=totalAmount.toFiixed(2);
}