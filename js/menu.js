/* Mostar div por cada cuenta bancaria */
// Obtenemos el localStorage para validar la cantidad de cuentas existentes
const account = JSON.parse(localStorage.getItem("account")) || [];
const currency = JSON.parse(localStorage.getItem("currency")) || [];
const bank = JSON.parse(localStorage.getItem("bank")) || [];
const bankContainer = document.getElementById("account-container-result");

account.forEach((elm) => {
    const div = document.createElement("div")

    const currentBank = bank.find(b => b.id === parseInt(elm.accountBankId));
    const bankName = currentBank ? currentBank.bankName : '';
    const currentCurrency = currency.find(c => c.id === parseInt(elm.accountCurrencyId));
    const currencySymbol = currentCurrency ? currentCurrency.currencySymbol:'';

    div.innerHTML =
        `
        <a href ="../pages/transactions.html">
        <h4> Bank: ${bankName}</h4>
        <p> Name: ${elm.accountName}</p>
        <p> Balance: ${currencySymbol} ${elm.accountBalance}</p>
        </a>
        `
    bankContainer.appendChild(div)
})
