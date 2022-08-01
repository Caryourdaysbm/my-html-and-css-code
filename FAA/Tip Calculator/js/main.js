
// Variable declarations

const bill = document.getElementById("bill");
const buttons = document.querySelectorAll(".cl-percent");
const people = document.getElementById("people");
const custom = document.getElementById("custom");
let tipResult = document.getElementById("tip-per-person");
let totalResult = document.getElementById("total-per-person");
let reset = document.querySelector(".reset-btn");
const generatedText = document.querySelectorAll(".generated");
const billSect = document.querySelector("#bill-div");
const peopleSect = document.querySelector("#people-div");

// Input validations

bill.addEventListener("input", () => {
	if (bill.value != 0) {
		bill.classList.add("valid");
		bill.classList.remove("inValid");
		generatedText[0].innerHTML = "";
	} else if (bill.value == 0 || bill.value == "") {
		bill.classList.remove("valid");
		bill.classList.add("inValid");
		generatedText[0].innerHTML = `Can't be zero`;
	}
});

people.addEventListener("input", () => {
	if (people.value != 0) {
		people.classList.add("valid");
		people.classList.remove("inValid");
		generatedText[1].innerHTML = "";
	} else if (people.value == 0 || people.value == "") {
		people.classList.remove("valid");
		people.classList.add("inValid");
		generatedText[1].innerHTML = `Can't be zero`;
	}
});

custom.addEventListener("click", () => {
	if (bill.value == "") {
		generatedText[0].innerHTML = `Add Bill Amount`;
	}
	if (people.value == "") {
		generatedText[1].innerHTML = `Add Number of people`;
	}
});

// Button functions

buttons.forEach((btn) => {
	let btnVal = btn.value;

	btn.addEventListener("click", calculateTip);

	function calculateTip() {
		tip = parseFloat(bill.value) * btnVal;
		tipPerPerson = tip / parseFloat(people.value);
		billPerPerson = parseFloat(bill.value) / parseFloat(people.value);
		totalPerPerson = billPerPerson + tipPerPerson;

		tipResult.innerHTML = `$${tipPerPerson.toFixed(2)}`;
		totalResult.innerHTML = `$${totalPerPerson.toFixed(2)}`;
	}
});

custom.addEventListener("input", customTip);

function customTip() {
	tip = parseFloat(bill.value) * (custom.value / 100);
	tipPerPerson = tip / parseFloat(people.value);
	billPerPerson = parseFloat(bill.value) / parseFloat(people.value);
	totalPerPerson = billPerPerson + tipPerPerson;

	tipResult.innerHTML = `$${tipPerPerson.toFixed(2)}`;
	totalResult.innerHTML = `$${totalPerPerson.toFixed(2)}`;
}

reset.addEventListener("click", () => {
	custom.value = "";
	bill.value = "";
	people.value = "";
	tipResult.textContent = "$0.00";
	totalResult.textContent = "$0.00";
	billSect.style.outline = "none";
	peopleSect.style.outline = "none";
	generatedText[0].innerHTML = "";
	generatedText[1].innerHTML = "";
});
