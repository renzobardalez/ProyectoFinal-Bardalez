/* Registro de categoria */
document.getElementById("saveCategory").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que la página se recargue
    /* Verificación del array */
    let category = JSON.parse(localStorage.getItem("category")) || [];
    let categoryIdCounter = parseInt(localStorage.getItem("bankIdCounter")) || 1;
    /* Incrementamos el id para el siguiente uso */
    let newId = categoryIdCounter;
    /* Obtenemos los valores de la página */
    const categoryName = document.getElementById("categoryName").value;
    const categoryDescription = document.getElementById("categoryDescription").value;
    if (!categoryName){
        const categoryMessage = document.getElementById("categoryMessage");
        categoryMessage.textContent = "Por favor ingrese valores válidos.";
        setTimeout(() => {
            window.location.reload();
        },1500);
        return;
    }
    /* Creación del array */
    let newAccount = {
        id: newId,
        categoryName: categoryName,
        categoryDescription: categoryDescription,
    };
    category.push(newAccount);
    localStorage.setItem("category", JSON.stringify(category));
    localStorage.setItem("categoryIdCounter", newId +1);
    /* Mensaje de éxito */
    const categoryMessage = document.getElementById("categoryMessage");
    categoryMessage.textContent="Registro grabado con éxito.";
    /* Reseteamos los campos */
    document.getElementById("categoryName").value="";
    document.getElementById("categoryDescription").value="";
    setTimeout(() => {
        window.location.reload();
    },1500);
});