// Fetch y almacenar monedas desde la API
// Obtenemos el array currency
let currency = JSON.parse(localStorage.getItem("currency")) || [];
// Obtenemos el contador
// Debido a que viene de un API usamos una constante ya que los registros que se hagan serán aumentados en el contador a la cantidad de la API.
const currencyIdCounter = parseInt(localStorage.getItem("currencyIdCounter")) || 1;
function fetchAndStoreCurrencies() {
    if (currency.length === 0) {
        fetch('https://openexchangerates.org/api/currencies.json')
            .then((resp) => resp.json())
            .then((data) => {
                let newId = currencyIdCounter;
                Object.entries(data).forEach(([key, value]) => {
                    currency.push({ id: newId++, currencySymbol: key, currencyName: value });
                });
                localStorage.setItem('currency', JSON.stringify(currency));
                localStorage.setItem('currencyIdCounter', newId);
                console.log('Datos obtenidos y guardados:', currency); 
            })
            .catch((error) => {
                console.error('Error fetching currencies:', error);// Como mejora se puede hacer un modal
            });
    } else {
        console.log('Datos cargados desde localStorage:', currency);// Como mejora se puede hacer un modal
    }
}
// Llama a la función cuando la página se cargue
document.addEventListener('DOMContentLoaded', () => {
    fetchAndStoreCurrencies();
});


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