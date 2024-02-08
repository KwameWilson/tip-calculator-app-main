const bill = document.querySelector('#bill');
const tipPercentage = document.getElementsByClassName('tips');
const customTipPercentage = document.querySelector('.tip-percentage #custom')
const numberOfPersons = document.querySelector('#number');
const tipAmountPerPerson = document.querySelector('.amount h1');
const totalPerPersons = document.querySelector('.total h1')
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
                    setError(bill, "Input fields cannot be left blank")
                } else {
                    setSuccess(bill);
                }

                if (numberOfPersonsValue === '') {
                    console.log('Input fields cannot be left blank');
                    setError(numberOfPersons, "Input fields cannot be left blank")
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
    let amount = tip + parseInt(customTipPercentage.value)
    console.log(amount)
})