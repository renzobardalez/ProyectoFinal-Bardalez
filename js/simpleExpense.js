/* Opción dinámica de bank */
// Selccionamos el elemento select
const simpleExpenseAccount = document.getElementById("simpleExpenseAccount");
// Cargamos el array de cuentas y bancos para nombre de  la cuenta
const account = JSON.parse(localStorage.getItem("account")) || [];
const bankAccount = JSON.parse(localStorage.getItem("bankAccount")) || [];
// Cargamos el objeto state
const state = JSON.parse(localStorage.getItem("state")) || {};
// Iteramos sobre cada item
account.forEach((elm) => {
    const option = document.createElement("option");
    option.value = elm.id;
    const currentBank = bankAccount.find(b => b.id === elm.accountBankId)
    const bankName = currentBank ? currentBank.bankName : "Unknown bank";
    option.textContent = ` ${bankName} - ${elm.accountName}`;
    simpleExpenseAccount.appendChild(option);    
});
/* Modificación de balance de cuenta */
document.getElementById("saveSimpleExpense").addEventListener("click", function (event) {
    event.preventDefault();
    /* Verificación del array */
    const account = JSON.parse(localStorage.getItem("account")) || [];
    /* Obtenemos los valores de la página */
    const simpleExpenseAccountId = parseInt(document.getElementById("simpleExpenseAccount").value);
    const simpleExpenseAmmount = Math.abs(parseFloat(document.getElementById("simpleExpenseAmmount").value));
    if (!simpleExpenseAccountId || isNaN(simpleExpenseAmmount)
    ){
        const simpleExpenseMessage = document.getElementById("simpleExpenseMessage");
        simpleExpenseMessage.textContent = "Por favor ingrese valores válidos.";
        setTimeout(() => {
            window.location.reload();
        },1500);
        return;
    }
    const currentAccount = account.find(elm => elm.id === simpleExpenseAccountId)
    if(currentAccount){
        const currentBalance = currentAccount.accountBalance - simpleExpenseAmmount;
        currentAccount.accountBalance = currentBalance;
        localStorage.setItem("account",JSON.stringify(account));

        // Creamos el objeto transaction
        const transaction = { 
            date: new Date().toISOString(), 
            accountId: simpleExpenseAccountId, 
            bankName: bankAccount.find(b => b.id === currentAccount.accountBankId)?.bankName || "Unknown bank", 
            accountName: currentAccount.accountName, 
            amount: simpleExpenseAmmount, 
            inventory: state.inventory, 
            transaction_type: state.transaction_type }; 
        // Cargar las transacciones históricas y agregar la nueva 
        const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
        transactions.push(transaction); 
        localStorage.setItem("transactions", JSON.stringify(transactions));

        /* Mensaje de éxito */
        const simpleExpenseMessage = document.getElementById("simpleExpenseMessage");
        simpleExpenseMessage.textContent="Registro grabado con éxito.";
        /* Reseteamos los campos */
        document.getElementById("simpleExpenseAccount").value="";
        document.getElementById("simpleExpenseAmmount").value="";
        setTimeout(() => {
            window.location.reload();
        },1500);
    } else{
        const simpleExpenseMessage = document.getElementById("accountMessage");
        simpleExpenseMessage.textContent="Account not found";
    }


});