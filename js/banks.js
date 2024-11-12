const bank = [
    {
        id_bank: 1,
        bank_description: "Interbank"
    },
    {
        id_bank: 2,
        bank_description: "BCP"
    }
]
const currency = [
    {
        id_currency: 1,
        currency: "Soles"
    },
    {
        id_currency: 2,
        currency: "Dólares"
    }
]

/* Registro de cuenta bancaria */
document.getElementById("saveBank").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que la página se recargue
    /* Verificación del array */
    let bankAccount = JSON.parse(localStorage.getItem("bankAccount")) || [];
    let idCounter = parseInt(localStorage.getItem("idCounter")) || 1;
    /* Incrementamos el id para el siguiente uso */
    let newId = idCounter;

    /* Obtenemos los valores de la página */
    const bankName = document.getElementById("bankName").value;
    const bankDescription = document.getElementById("bankDescription").value;
    if (!bankName || !bankDescription 
        // || isNaN(bankBalance) <-- USAR PARA ACCOUNT
    ){
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
    localStorage.setItem("idCounter", newId +1);
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