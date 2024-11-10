const bank = [
    {
        id_bank: 1,
        bank_description: "Interbank"
    },
    {
        id_bank: 2,
        bank_description: "BCP"
    }
]
const currency = [
    {
        id_currency: 1,
        currency: "Soles"
    },
    {
        id_currency: 2,
        currency: "Dólares"
    }
]
// const bankAccount = [
//     {
//         id_account: 1,
//         id_bank: 1,
//         id_currency: 1,
//         account_description: "Interbank Millonaria",
//         account_number: 123456789,
//         account_balance: 0.00
//     },
//     {
//         id_account: 2,
//         id_bank: 1,
//         id_currency: 1,
//         account_description: "Interbank Crédito Soles",
//         account_number: 123442424,
//         account_balance: 0.00
//     },
//     {
//         id_account: 3,
//         id_bank: 1,
//         id_currency: 2,
//         account_description: "Interbank Crédito Dólares",
//         account_number: 1234322424,
//         account_balance: 0.00
//     },
//     {
//         id_account: 4,
//         id_bank: 2,
//         account_description: "BCP Ahorro",
//         account_number: 12345632,
//         account_balance: 0.00
//     }
// ]
/* Registro de cuenta bancaria */
document.getElementById("saveBankAccount").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que la página se recargue
    /* Verificación del array */
    let bankAccount = JSON.parse(localStorage.getItem("bankAccount")) || [];
    let idCounter = parseInt(localStorage.getItem("idCounter")) || 1;
    /* Incrementamos el id para el siguiente uso */
    let newId = idCounter;

    /* Obtenemos los valores de la página */
    const bankName = document.getElementById("bankName").value;
    const bankCurrency = document.getElementById("bankCurrency").value;
    const bankDescription = document.getElementById("bankDescription").value;
    const bankBalance = parseFloat(document.getElementById("bankBalance").value);
    if (!bankName || !bankCurrency || !bankDescription || isNaN(bankBalance)){
        const bankMessage = document.getElementById("bankMessage");
        bankMessage.textContent = "Por favor ingrese valores válidos.";
        return;
    }

    /* Creación del array */
    let newAccount = {
        id: newId,
        bankName: bankName,
        bankCurrency: bankCurrency,
        bankDescription: bankDescription,
        bankBalance: bankBalance
    };


    bankAccount.push(newAccount);
    localStorage.setItem("bankAccount", JSON.stringify(bankAccount));
    localStorage.setItem("idCounter", newId +1);
    /* Mensaje de éxito */
    const bankMessage = document.getElementById("bankMessage");
    bankMessage.textContent="Registro grabado con éxito.";
    /* Reseteamos los campos */
    document.getElementById("bankName").value="";
    document.getElementById("bankCurrency").value="";
    document.getElementById("bankDescription").value="";
    document.getElementById("bankBalance").value="";
});