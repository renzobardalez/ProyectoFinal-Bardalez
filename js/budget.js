/* Opción dinámica de category */
// Selccionamos el elemento select
const budgetCategory = document.getElementById("budgetCategory");
// Cargamos el array
const category = JSON.parse(localStorage.getItem("category")) || [];
// Iteramos sobre cada item
category.forEach((elm) => {
    const option = document.createElement("option");
    option.value = elm.id;
    option.textContent = elm.categoryName;
    budgetCategory.appendChild(option);    
});
/* Opción dinámica de currency */
// Selccionamos el elemento select
const budgetCurrency = document.getElementById("budgetCurrency");
// Cargamos el array
const currency = JSON.parse(localStorage.getItem("currency")) || [];
// Iteramos sobre cada item
currency.forEach((elm) => {
    const option = document.createElement("option");
    option.value = elm.id;
    option.textContent = elm.currencyName;
    budgetCurrency.appendChild(option);   
});
/* Registro de budget */
document.getElementById("saveBudget").addEventListener("click", function (e) {
    e.preventDefault(); // Evita que la página se recargue
    /* Verificación del array */
    let budget = JSON.parse(localStorage.getItem("budget")) || [];
    let budgetIdCounter = parseInt(localStorage.getItem("budgetIdCounter")) || 1;
    /* Incrementamos el id para el siguiente uso */
    let newId = budgetIdCounter;
    /* Obtenemos los valores de la página */
    const budgetCategory = document.getElementById("budgetCategory").value;
    const budgetCurrency = document.getElementById("budgetCurrency").value;
    const budgetAmmount = document.getElementById("budgetAmmount").value;
    const budgetDescription = document.getElementById("budgetAmmount").value;
    if (!budgetCategory || !budgetCurrency || isNaN(budgetAmmount)){
        const budgetMessage = document.getElementById("budgetMessage");
        budgetMessage.textContent = "Por favor ingrese valores válidos.";
        setTimeout(() => {
            window.location.reload();
        },1500);
        return;
    }
    if(budgetAmmount<0){
        const budgetMessage = document.getElementById("budgetMessage");
        budgetMessage.textContent = "Por favor ingrese un valor positivo.";
        setTimeout(() => {
            window.location.reload();
        },1500);
        return;
    }
    /* Creación del array */
    let newBudget = {
        id: newId,
        budgetCategory: budgetCategory,
        budgetCurrency: budgetCurrency,
        budgetAmmount: budgetAmmount,
        budgetDescription: budgetDescription
    };
    budget.push(newBudget);
    localStorage.setItem("budget", JSON.stringify(budget));
    localStorage.setItem("budgetIdCounter", newId +1);
    /* Mensaje de éxito */
    const budgetMessage = document.getElementById("budgetMessage");
    budgetMessage.textContent="Registro grabado con éxito.";
    /* Reseteamos los campos */
    document.getElementById("budgetCategory").value="";
    document.getElementById("budgetCurrency").value="";
    document.getElementById("budgetAmmount").value="";
    document.getElementById("budgetDescription").value="";
    setTimeout(() => {
        window.location.reload();
    },1500);
});
// Ubicamos el contenedor
const budgetResultsContainer = document.getElementById("budgetResultsContainer");
// Obtenemos el array bank
const budget = JSON.parse(localStorage.getItem("budget")) || [];
// Iteramos cada div resultado
budget.forEach((elm) => {
    const div = document.createElement("div")
    div.classList.add("budget-container-div")
    div.innerHTML =
    `
    <div> Budget id: ${elm.id}</div>
    <div> Budget categroy: ${elm.budgetCategory}</div>
    <div> Budget categroy: ${elm.budgetCurrency}</div>
    <div> Budget ammount: ${elm.budgetAmmount}</div>
    <div> Budget ammount: ${elm.budgetDescription}</div>
    `
    budgetResultsContainer.appendChild(div)
});