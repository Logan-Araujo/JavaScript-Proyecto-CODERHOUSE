//PreEntrega 3
//Logan Araujo Hernandez - Comisión 57695

//Implementar DOM, Eventos y Storage.

//Modo oscuro (cambiar entre modo oscuro y claro) con LocalStorage.

const botonColor = document.querySelector("#color-pagina");
const body = document.body;

let modoOscuro = localStorage.getItem("modo-oscuro");

function activarModoOscuro() {
    body.classList.add("modo-oscuro");
    localStorage.setItem("modo-oscuro", "activado");
}

function desactivarModoOscuro() {
    body.classList.remove("modo-oscuro");
    localStorage.setItem("modo-oscuro", "desactivado");
}

if (modoOscuro === "activado") {
    activarModoOscuro();
} else {
    desactivarModoOscuro();
}

botonColor.addEventListener("click", () => {
    modoOscuro = localStorage.getItem("modo-oscuro");

    if (modoOscuro === "activado") {
        desactivarModoOscuro();
    } else {
        activarModoOscuro();
    }

})

//Agregar Articulos a una lista de compra

const agregarForm = document.querySelector("#agregar-form")
const agregarInput = document.querySelector("#agregar-input")
const agregar = document.querySelector("#agregar")

agregarForm.addEventListener("submit", agregarArticulos);

function agregarArticulos(a) {
    a.preventDefault();

    if (agregarInput.value != "") {
    let item = document.createElement("li");
    item.innerText = agregarInput.value;

    agregar.append(item);
    } else {
        alert("Debes ingresar una camisa para agregarla a la lista de compra.");
    }
    
    agregarInput.focus();
    agregarForm.reset();
}