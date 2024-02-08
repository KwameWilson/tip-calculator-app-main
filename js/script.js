const bill = document.querySelector('#bill');
const tipPercentage = document.getElementsByClassName('tips');
const numberOfPersons = document.querySelector('#number');
const tipAmountPerPerson = document.querySelector('.amount h1');
const totalPerPersons = document.querySelector('.total h1')
let amount;
let messages =

    Array.from(tipPercentage).forEach(e => {
        e.addEventListener("click", (e) => {

            const validateInputs = () => {
                const billValue = bill.value;
                const numberOfPersonsValue = numberOfPersons.value;

                if (billValue === '' || numberOfPersonsValue === "") {
                    console.log('Input fields cannot be left blank');
                } else {

                }
            }

            validateInputs()




            let target = e.target.textContent;
            target = parseInt(target) / 100;

            let tip = target * bill.value;
            amount = tip + parseInt(bill.value);

            let tipPerPerson = tip / numberOfPersons.value;

            tipAmountPerPerson.textContent = tipPerPerson;
            totalPerPersons.textContent = amount;

        })
    });


