/* Opción dinámica de bank */
// Selccionamos el elemento select
const detailedExpenseAccount = document.getElementById("detailedExpenseAccount");
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
    const currentCurrency = currency.find(c => c.id === elm.accountCurrencyId)
    const currencySymbol = currentCurrency ? currentCurrency.currencySymbol : "Unknown bank";
    option.textContent = ` ${bankName} - ${elm.accountName} ${currencySymbol} ${elm.accountBalance}`;
    detailedExpenseAccount.appendChild(option);    
});
/* Opción dinámica de category */
/* Seleccionamos el desplegable category */
const detailedExpenseCategory = document.getElementById("detailedExpenseCategory");
// Cargamos el array de transactions
const category = JSON.parse(localStorage.getItem("category")) || [];
// Iteramos sobre cada item para el contanido de cada option
category.forEach((elm) => {
    const option = document.createElement("option")
    option.value = elm.id;
    option.textContent =`${elm.categoryName}`
    detailedExpenseCategory.appendChild(option)
});



/* Modificación de balance de cuenta */
document.getElementById("saveDetailedExpense").addEventListener("click", function (event) {
    event.preventDefault();
    /* Verificación del array */
    const account = JSON.parse(localStorage.getItem("account")) || [];
    /* Obtenemos los valores de la página */
    const detailedExpenseAccountId = parseInt(document.getElementById("detailedExpenseAccount").value);
    const detailedExpenseDescription = document.getElementById("detailedExpenseDescription").value;
    const detailedExpenseCategoryId = parseInt(document.getElementById("detailedExpenseCategory").value);
    const detailedExpenseAmmount = Math.abs(parseFloat(document.getElementById("detailedExpenseAmmount").value));
    const detailedExpenseCommentary = document.getElementById("detailedExpenseCommentary").value;
    if (!detailedExpenseAccountId || !detailedExpenseDescription || !detailedExpenseCategoryId || isNaN(detailedExpenseAmmount) || !detailedExpenseCommentary){
        const detailedExpenseMessage = document.getElementById("detailedExpenseAmmount");
        detailedExpenseMessage.textContent = "Por favor ingrese valores válidos.";
        setTimeout(() => {
            window.location.reload();
        },1500);
        return;
    }
    const currentAccount = account.find(elm => elm.id === detailedExpenseAccountId)
    const currentCategory = category.find(elm =>  elm.id === detailedExpenseCategoryId)
    if(currentAccount && currentCategory){
        const currentBalance = currentAccount.accountBalance - detailedExpenseAmmount;
        currentAccount.accountBalance = currentBalance;
        localStorage.setItem("account",JSON.stringify(account));

        // Creamos el objeto transaction
        const detailedTransaction = { 
            date: new Date().toISOString(), 
            accountId: detailedExpenseAccountId, 
            bankName: bank.find(b => b.id === currentAccount.accountBankId)?.bankName || "Unknown bank", 
            accountName: currentAccount.accountName,
            descriptionName: detailedExpenseDescription,
            categoryName: category.find(c => c.id === currentCategory.id)?.categoryName || "Unknown category", 
            amount: detailedExpenseAmmount,
            commentary: detailedExpenseCommentary,
            inventory: state.inventory, 
            transaction_type: state.transaction_type }; 
        // Cargar las transacciones históricas y agregar la nueva 
        const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
        transactions.push(detailedTransaction); 
        localStorage.setItem("transactions", JSON.stringify(transactions));

        /* Mensaje de éxito */
        const detailedExpenseMessage = document.getElementById("detailedExpenseMessage");
        detailedExpenseMessage.textContent="Registro grabado con éxito.";
        /* Reseteamos los campos */
        document.getElementById("detailedExpenseAccount").value="";
        document.getElementById("detailedExpenseDescription").value="";
        document.getElementById("detailedExpenseCategory").value="";
        document.getElementById("detailedExpenseAmmount").value="";
        document.getElementById("detailedExpenseCommentary").value="";
        setTimeout(() => {
            window.location.reload();
        },1500);
    } else{
        const detailedExpenseMessage = document.getElementById("detailedExpenseMessage");
        detailedExpenseMessage.textContent="Account not found";
    }
});
