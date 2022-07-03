let billEl = document.querySelector("#bill");
let noOfPeople = document.querySelector("#people");
billEl.addEventListener('keypress', e => {
    console.log(e.target.value)
})