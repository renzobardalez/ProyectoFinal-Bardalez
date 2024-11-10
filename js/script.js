/* Mostar div por cada cuenta bancaria */
const bankContainer = document.getElementById("account-container-result")

bankAccount.forEach((elm) => {
const div = document.createElement("div")

div.classList.add("account-container-div")
div.innerHTML =`
<h4> Account: ${elm.account_description}</h4>
<p> Number: ${elm.account_number}</p>
<p> Balance: $ ${elm.account_balance}</p>
`
console.log(div)
bankContainer.appendChild(div)
})

