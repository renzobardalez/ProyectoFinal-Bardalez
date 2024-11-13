/* Opción dinámica de bank */
// Selccionamos el elemento select
const simpleExpenseAccount = document.getElementById("simpleExpenseAccount");
// Cargamos el array
const account = JSON.parse(localStorage.getItem("account")) || [];
// Iteramos sobre cada item
account.forEach((elm) => {
    const option = document.createElement("option");
    option.value = elm.id;
    option.textContent = elm.accountName; // VER COMO AGREGAR EL NOMBRE DEL BANCO
    simpleExpenseAccount.appendChild(option);    
});

/* Modificación de balance de cuenta */
document.getElementById("saveSimpleExpense").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que la página se recargue
    /* Verificación del array */
    const account = JSON.parse(localStorage.getItem("account")) || [];
    /* Obtenemos los valores de la página */
    const simpleExpenseAccountId = simpleExpenseAccount.value;
    const simpleExpenseAmmount = document.getElementById("simpleExpenseAmmount").value;
    if (!simpleExpenseBank || isNaN(simpleExpenseAmmount)
    ){
        const simpleExpenseMessage = document.getElementById("simpleExpenseMessage");
        simpleExpenseMessage.textContent = "Por favor ingrese valores válidos.";
        setTimeout(() => {
            window.location.reload();
        },1500);
        return;
    }
    const currentBalance = account.accountBalance - simpleExpenseAmmount
    /* Modificación del array */
    let newBalance = {
        accountBalance: parseFloat(currentBalance)
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