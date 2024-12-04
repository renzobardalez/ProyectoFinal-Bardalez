/* Registro de currency */
document.getElementById("saveCurrency").addEventListener("click", function (e) {
    e.preventDefault(); // Evita que la página se recargue
    /* Verificación del array */
    let currency = JSON.parse(localStorage.getItem("currency")) || [];
    let currencyIdCounter = parseInt(localStorage.getItem("currencyIdCounter")) || 1;
    /* Incrementamos el id para el siguiente uso */
    let newId = currencyIdCounter;
    /* Obtenemos los valores de la página */
    const currencyName = document.getElementById("currencyName").value;
    const currencySymbol = document.getElementById("currencySymbol").value;
    if (!currencyName || !currencySymbol){
        const currencyMessage = document.getElementById("currencyMessage");
        currencyMessage.textContent = "Por favor ingrese valores válidos.";
        setTimeout(() => {
            window.location.reload();
        },1500);
        return;
    }
    /* Creación del array */
    let newCurrency = {
        id: newId,
        date: new Date().toISOString(),
        currencyName: currencyName,
        currencySymbol: currencySymbol,
    };
    currency.push(newCurrency);
    localStorage.setItem("currency", JSON.stringify(currency));
    localStorage.setItem("currencyIdCounter", newId +1);
    /* Mensaje de éxito */
    const currencyMessage = document.getElementById("currencyMessage");
    currencyMessage.textContent="Registro grabado con éxito.";
    /* Reseteamos los campos */
    document.getElementById("currencyName").value="";
    document.getElementById("currencySymbol").value="";
    setTimeout(() => {
        window.location.reload();
    },1500);
});
// Ubicamos el contenedor
const configResultsContainer = document.getElementById("configResultsContainer");
// Obtenemos el array bank
const currency = JSON.parse(localStorage.getItem("currency")) || [];
// Iteramos cada div resultado
currency.forEach((elm) => {
    const div = document.createElement("div")
    div.classList.add("config-container-div")
    div.innerHTML =
    `
    <div> Currency id: ${elm.id}</div>
    <div> Currency name: ${elm.currencyName}</div>
    <div> Currency symbol: ${elm.currencySymbol}</div>
    <div> Date: ${elm.date}</div>
    `
    configResultsContainer.appendChild(div)
});