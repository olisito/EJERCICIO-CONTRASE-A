const inputUser = document.getElementById("inputUser");
const inputPass = document.getElementById("inputPass");
const parrafo = document.getElementById("parrafo");
const button = document.getElementById("button");

function contraseña() {
    const longitud = inputPass.value.length;
    if (inputUser.value.length == 0 && inputPass.value.length == 0) {
        parrafo.textContent = "";
    } else if (longitud == 0){
        parrafo.textContent = "";
    } else if (longitud <= 8) {
        parrafo.textContent = "contraseña NO segura";
        parrafo.setAttribute("class", "rojo");
        button.disabled = true;
    } else if (longitud > 8 && longitud <= 11) {
        parrafo.textContent = "contraseña CASI segura";
        parrafo.setAttribute("class", "azul");
        button.disabled = true;
    } else if (longitud > 11){
        parrafo.textContent = "contraseña MUY segura";
        parrafo.setAttribute("class", "verde");
        if (inputUser.value.length != 0) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }
}

function mostrarUsuario() {
    alert("HOLA " + inputUser.value);
}

button.addEventListener("click", mostrarUsuario);
inputPass.addEventListener("keyup", contraseña);
inputUser.addEventListener("keyup", contraseña);
