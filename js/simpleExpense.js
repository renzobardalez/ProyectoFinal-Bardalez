/* Opción dinámica de bank */
// Selccionamos el elemento select
const simpleExpenseBank = document.getElementById("simpleExpenseBank");
// Cargamos el array
const bankAccount = JSON.parse(localStorage.getItem("bankAccount")) || [];
// Iteramos sobre cada item
bankAccount.forEach((elm) => {
    const option = document.createElement("option");
    option.value = elm.id;
    option.textContent = elm.bankName;
    simpleExpenseBank.appendChild(option);    
});