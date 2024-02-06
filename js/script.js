const bill = document.querySelector('#bill');
const tipPercentage = document.getElementsByClassName('tips');
const numberOfPersons = document.querySelector('#number');
const tipAmount = document.querySelector('.amount h1');
const totalPersons = document.querySelector('.total h1')
let amount;

Array.from(tipPercentage).forEach(e => {
    e.addEventListener("click", (e) => {
        let target = e.target.textContent;
        target = parseInt(target);
        let tip = target * bill;
        console.log(typeof tip);
        console.log(typeof target);
    })

});
