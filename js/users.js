/* Apertura y cierre de modal de registro */

const openRegister = document.getElementById('openRegister');
const registerContainer = document.getElementById('registerContainer');
const closeRegister = document.getElementById('closeRegister');

/* Abre modal de registro */
openRegister.addEventListener('click',()=>{
    registerContainer.style.display = 'flex';
});
/* Cierra modal de registro */
closeRegister.addEventListener('click',()=>{
    registerContainer.style.display = 'none';
});

/* Registro */

document.getElementById("regButton").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que se envíe el formulario al hacer clic

    const name = document.getElementById("regName").value;
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    /* Creación del array */
    const user = {name: name, username: username, password: password };
    /* Verificación del array */
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (!username) { const regLogInMessage = document.getElementById("regLogInMessage"); regLogInMessage.textContent = "El nombre de usuario no puede estar vacío. Por favor intente de nuevo."; 
    return;
    }

    if(users.find(elm => elm.username === username) ){
        const regLogInMessage = document.getElementById("regLogInMessage");
        regLogInMessage.textContent = "El usuario ya existe, por favor intente con otro usuario.";
        return;
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    const regLogInMessage = document.getElementById("regLogInMessage");
    regLogInMessage.textContent = "Usuario registrado con éxito";
    
    setTimeout(() => {
        registerContainer.style.display = 'none';
    },2000);
});


/* Validación */
document.getElementById("logInButton").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que la página se recargue

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Recupera la lista de usuarios del localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Busca si hay un usuario que coincida
    const validUser = users.find(user => user.username === username && user.password === password);
    const logInMessage = document.getElementById("logInMessage");
    if (validUser) {
        /* Redirección de página central de la app */
        window.location.href = "pages/menu.html" 
    } else {
        logInMessage.textContent = "Usuario o clave incorrectos. Intente nuevamente."
        logInMessage.style.color = 'red';

    }

});