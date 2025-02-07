const input = document.getElementById("input");
const parrafo = document.getElementById("parrafo");
function contraseña() {
    const longitud = input.value.length;
    if (longitud <= 8) {
        parrafo.textContent = "contraseña NO segura";
        parrafo.setAttribute("class", "rojo");
    } else if (longitud > 8 && longitud <= 11) {
        parrafo.textContent = "contraseña CASI segura";
        parrafo.setAttribute("class", "azul");
    } else {
        parrafo.textContent = "contraseña MUY segura";

        parrafo.setAttribute("class", "verde");
    }
}

input.addEventListener("keyup", contraseña);
