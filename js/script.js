/* Variables inventory y transaction_type */
// Para limpiar las variables al volver al menú
function resetVariables(){
    localStorage.removeItem('state')
}
// Inicializamos las variables como null del objeto state
function initializaState(){
    localStorage.setItem('state', JSON.stringify({inventory: null, transaction_type: null}));
}
// Función a llamar cuando hacemos click en un boton que nos dirige a un módulo expense, income, sell, purchase, etc que nos permite actualizar las variables inventory y transaction_type.
function setInventory(inventory){
    initializaState();
    const state = JSON.parse(localStorage.getItem('state')) || {};
    state.inventory = inventory
    localStorage.setItem('state', JSON.stringify(state));
}
function setTransactionType(type){
    const state = JSON.parse(localStorage.getItem('state')) || {};
    state.transaction_type = type
    localStorage.setItem('state', JSON.stringify(state));
}
