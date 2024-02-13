const bill = document.querySelector('#bill');
const tipPercentage = document.getElementsByClassName('tips');
const customTipPercentage = document.querySelector('.tip-percentage #custom');
const numberOfPersons = document.querySelector('#number');
const tipAmountPerPerson = document.querySelector('.amount h1');
const totalPerPersons = document.querySelector('.total h1');
const reset = document.querySelector('button.btn');
let amount;
let messages =

    Array.from(tipPercentage).forEach(e => {
        e.addEventListener("click", (e) => {

            const setError = (element, message) => {
                const inputTab = element.parentElement;
                const errorDisplay = inputTab.querySelector('.error');

                errorDisplay.innerText = message;
                inputTab.classList.add('error');
                inputTab.classList.remove('success');
            }

            // How did the .error classList end up on the errorDisplay Div



            const setSuccess = element => {
                const inputTab = element.parentElement;
                const errorDisplay = inputTab.querySelector('.error');

                errorDisplay.textContent = "";
                errorDisplay.classList.add('success');
                errorDisplay.classList.remove('error');
            }

            const validateInputs = () => {
                const billValue = bill.value;
                const numberOfPersonsValue = numberOfPersons.value;

                if (billValue === '') {
                    console.log('Input fields cannot be left blank');
                    setError(bill, "Input fields cannot be left blank");
                    tipAmountPerPerson.textContent = '$0.00'
                    totalPerPersons.textContent = '$0.00'

                } else {
                    setSuccess(bill);
                }

                if (numberOfPersonsValue === '') {
                    console.log('Input fields cannot be left blank');
                    setError(numberOfPersons, "Input fields cannot be left blank");
                    tipAmountPerPerson.textContent = '$0.00'
                    totalPerPersons.textContent = '$0.00'
                } else {
                    setSuccess(numberOfPersons);
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

customTipPercentage.addEventListener('change', () => {
    let customValue = customTipPercentage.value;
    let tip = parseInt(customValue) / 100 * parseInt(bill.value);
    let amount = tip + parseInt(customValue)

    tipAmountPerPerson.textContent = tip;
    totalPerPersons.textContent = amount;
    console.log(amount)
})

reset.addEventListener('click', () => {
    bill.value = ''
    numberOfPersons.value = ''
    tipAmountPerPerson.textContent = '$0.00'
    totalPerPersons.textContent = '$0.00'
})