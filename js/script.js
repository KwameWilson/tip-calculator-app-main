const bill = document.querySelector('#bill');
const tipPercentage = document.querySelectorAll('.tip-percentage>*');
const numberOfPersons = document.querySelector('#number');
const tipAmount = document.querySelector('.amount h1');
const totalPersons = document.querySelector('.total h1')
let amount;

bill.addEventListener("change", () => {
    amount = bill.value;
    console.log(amount);

    if (typeof bill !== "number") {

    }
})
