/* Mostar div por cada cuenta bancaria */
// Obtenemos el localStorage para validar la cantidad de cuentas existentes
const account = JSON.parse(localStorage.getItem("account")) || [];
const currency = JSON.parse(localStorage.getItem("currency")) || [];
const bankAccount = JSON.parse(localStorage.getItem("bankAccount")) || [];
const bankContainer = document.getElementById("account-container-result")

account.forEach((elm) => {
    const div = document.createElement("div")
    div.classList.add("account-container-div")

    const currentBank = bankAccount.find(b => b.id === parseInt(elm.accountBankId));
    const currentCurrency = currency.find(c => c.id === parseInt(elm.accountCurrencyId));
    const currencySymbol = currentCurrency ? currentCurrency.currencySymbol:'';
    const bankName = currentBank ? currentBank.bankName : '';

    div.innerHTML =
        `
        <h4> Bank: ${bankName}</h4>
        <p> Balance: ${currencySymbol} ${elm.accountBalance}</p>
    `
    /* VER COMO AGREGAR EL SIBOLO DEL ARRAY CURRENCY */
    bankContainer.appendChild(div)
})

