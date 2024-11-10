/* Mostar div por cada cuenta bancaria */
// Obtenemos el localStorage para validar la cantidad de cuentas existentes
const bankAccount = JSON.parse(localStorage.getItem("bankAccount")) || [];

const bankContainer = document.getElementById("account-container-result")

bankAccount.forEach((elm) => {
const div = document.createElement("div")

div.classList.add("account-container-div")
div.innerHTML =
    `
    <h4> Bank: ${elm.bankName}</h4>
    <p> Currency: ${elm.bankCurrency}</p>
    <p> Balance: $ ${elm.bankBalance}</p>
`
console.log(div)
bankContainer.appendChild(div)
})

