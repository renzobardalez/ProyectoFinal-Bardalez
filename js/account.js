/* Opción dinámica de bank */
// Selccionamos el elemento select
const accountBank = document.getElementById("accountBank");
// Cargamos el array
const bankAccount = JSON.parse(localStorage.getItem("bankAccount")) || [];
// Iteramos sobre cada item
bankAccount.forEach((elm) => {
    const option = document.createElement("option");
    option.value = elm.bankName;
    option.textContent = elm.bankName;
    accountBank.appendChild(option);    
});
/* Opción dinámica de currency */
// Selccionamos el elemento select
const accountCurrency = document.getElementById("accountCurrency");
// Cargamos el array
const currency = JSON.parse(localStorage.getItem("currency")) || [];
// Iteramos sobre cada item
currency.forEach((elm) => {
    const option = document.createElement("option");
    option.value = elm.currencyName;
    option.textContent = elm.currencyName;
    accountCurrency.appendChild(option);   
});

/* Registro de cuenta bancaria */
document.getElementById("saveAccount").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que la página se recargue
    /* Verificación del array */
    let account = JSON.parse(localStorage.getItem("account")) || [];
    let accountIdCounter = parseInt(localStorage.getItem("accountIdCounter")) || 1;
    /* Incrementamos el id para el siguiente uso */
    let newId = accountIdCounter;
    /* Obtenemos los valores de la página */
    const accountBank = document.getElementById("accountBank").value;
    const accountCurrency = document.getElementById("accountCurrency").value;
    const accountName = document.getElementById("accountName").value;
    const accountNumber = document.getElementById("accountNumber").value;
    const accountDescription = document.getElementById("accountDescription").value;
    const accountBalance = document.getElementById("accountBalance").value;
    if (!accountBank || !accountCurrency || !accountName || !accountNumber  ||! accountDescription || isNaN(accountBalance)
    ){
        const accountMessage = document.getElementById("accountMessage");
        accountMessage.textContent = "Por favor ingrese valores válidos.";
        setTimeout(() => {
            window.location.reload();
        },1500);
        return;
    }
    /* Creación del array */
    let newAccount = {
        id: newId,
        accountBank: accountBank,
        accountCurrency: accountCurrency,
        accountName: accountName,
        accountNumber: accountNumber,
        accountDescription: accountDescription,
        accountBalance: accountBalance
    };
    account.push(newAccount);
    localStorage.setItem("account", JSON.stringify(account));
    localStorage.setItem("accountIdCounter", newId +1);
    /* Mensaje de éxito */
    const accountMessage = document.getElementById("accountMessage");
    accountMessage.textContent="Registro grabado con éxito.";
    /* Reseteamos los campos */
    document.getElementById("accountBank").value="";
    document.getElementById("accountCurrency").value="";
    document.getElementById("accountName").value="";
    document.getElementById("accountNumber").value="";
    document.getElementById("accountDescription").value="";
    document.getElementById("accountBalance").value="";
    setTimeout(() => {
        window.location.reload();
    },1500);
});