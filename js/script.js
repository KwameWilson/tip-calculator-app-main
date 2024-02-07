const bill = document.querySelector('#bill');
const tipPercentage = document.getElementsByClassName('tips');
const numberOfPersons = document.querySelector('#number');
const tipAmount = document.querySelector('.amount h1');
const totalPersons = document.querySelector('.total h1')
let amount;

Array.from(tipPercentage).forEach(e => {
    e.addEventListener("click", (e) => {
        let target = e.target.textContent;
        target = parseInt(target) / 100;
        
        let tip = target * bill.value;
        tipAmount.textContent = tip;

        amount = tip + parseInt(bill.value);
        totalPersons.textContent = amount;
    })
});
