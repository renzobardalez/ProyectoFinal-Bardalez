/* Registro de banco */
document.getElementById("saveBank").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que la página se recargue
    /* Verificación del array */
    let bankAccount = JSON.parse(localStorage.getItem("bankAccount")) || [];
    let bankIdCounter = parseInt(localStorage.getItem("bankIdCounter")) || 1;
    /* Incrementamos el id para el siguiente uso */
    let newId = bankIdCounter;
    /* Obtenemos los valores de la página */
    const bankName = document.getElementById("bankName").value;
    const bankDescription = document.getElementById("bankDescription").value;
    if (!bankName){
        const bankMessage = document.getElementById("bankMessage");
        bankMessage.textContent = "Por favor ingrese valores válidos.";
        setTimeout(() => {
            window.location.reload();
        },1500);
        return;
    }
    /* Creación del array */
    let newAccount = {
        id: newId,
        bankName: bankName,
        bankDescription: bankDescription,
    };
    bankAccount.push(newAccount);
    localStorage.setItem("bankAccount", JSON.stringify(bankAccount));
    localStorage.setItem("bankIdCounter", newId +1);
    /* Mensaje de éxito */
    const bankMessage = document.getElementById("bankMessage");
    bankMessage.textContent="Registro grabado con éxito.";
    /* Reseteamos los campos */
    document.getElementById("bankName").value="";
    document.getElementById("bankDescription").value="";
    setTimeout(() => {
        window.location.reload();
    },1500);
});