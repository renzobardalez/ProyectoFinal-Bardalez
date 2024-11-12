/* Mostar div por cada cuenta bancaria */
// Obtenemos el localStorage para validar la cantidad de cuentas existentes
const account = JSON.parse(localStorage.getItem("account")) || [];
const bankContainer = document.getElementById("account-container-result")

account.forEach((elm) => {
const div = document.createElement("div")

div.classList.add("account-container-div")
div.innerHTML =
    `
    <h4> Bank: ${elm.accountBank}</h4>
    <p> Currency: ${elm.accountCurrency}</p>
    <p> Balance: ${elm.accountBalance}</p>
`
/* VER COMO AGREGAR EL SIBOLO DEL ARRAY CURRENCY */
console.log(div)
bankContainer.appendChild(div)
})

