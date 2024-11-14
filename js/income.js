/* Opción dinámica de bank */
// Selccionamos el elemento select
const incomeAccount = document.getElementById("incomeAccount");
// Cargamos el array de cuentas y bancos para nombre de  la cuenta
const account = JSON.parse(localStorage.getItem("account")) || [];
const currency = JSON.parse(localStorage.getItem("currency")) || [];
const bank = JSON.parse(localStorage.getItem("bank")) || [];
// Cargamos el objeto state
const state = JSON.parse(localStorage.getItem("state")) || {};
// Iteramos sobre cada item para el contanido de cada option
account.forEach((elm) => {
    const option = document.createElement("option");
    option.value = elm.id;
    const currentBank = bank.find(b => b.id === elm.accountBankId)
    const bankName = currentBank ? currentBank.bankName : "Unknown bank";
    const currentCurrency = currency.find(b => b.id === elm.accountBankId)
    const currencySymbol = currentCurrency ? currentCurrency.currencySymbol : "Unknown bank";
    option.textContent = ` ${bankName} - ${elm.accountName} ${currencySymbol} ${elm.accountBalance}`;
    incomeAccount.appendChild(option);    
});
/* Modificación de balance de cuenta */
document.getElementById("saveIncome").addEventListener("click", function (event) {
    event.preventDefault();
    /* Verificación del array */
    const account = JSON.parse(localStorage.getItem("account")) || [];
    /* Obtenemos los valores de la página */
    const incomeAccountId = parseInt(document.getElementById("incomeAccount").value);
    const incomeAmmount = Math.abs(parseFloat(document.getElementById("incomeAmmount").value));
    if (!incomeAccountId || isNaN(incomeAmmount)
    ){
        const incomeMessage = document.getElementById("incomeMessage");
        incomeMessage.textContent = "Por favor ingrese valores válidos.";
        setTimeout(() => {
            window.location.reload();
        },1500);
        return;
    }
    const currentAccount = account.find(elm => elm.id === incomeAccountId)
    if(currentAccount){
        const currentBalance = currentAccount.accountBalance + incomeAmmount;
        currentAccount.accountBalance = currentBalance;
        localStorage.setItem("account",JSON.stringify(account));

        // Creamos el objeto transaction
        const transaction = { 
            date: new Date().toISOString(), 
            accountId: incomeAccountId, 
            bankName: bank.find(b => b.id === currentAccount.accountBankId)?.bankName || "Unknown bank", 
            accountName: currentAccount.accountName, 
            amount: incomeAmmount, 
            inventory: state.inventory, 
            transaction_type: state.transaction_type }; 
        // Cargar las transacciones históricas y agregar la nueva 
        const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
        transactions.push(transaction); 
        localStorage.setItem("transactions", JSON.stringify(transactions));

        /* Mensaje de éxito */
        const incomeMessage = document.getElementById("incomeMessage");
        incomeMessage.textContent="Registro grabado con éxito.";
        /* Reseteamos los campos */
        document.getElementById("incomeAccount").value="";
        document.getElementById("incomeAmmount").value="";
        setTimeout(() => {
            window.location.reload();
        },1500);
    } else{
        const incomeMessage = document.getElementById("incomeMessage");
        incomeMessage.textContent="Account not found";
    }


});