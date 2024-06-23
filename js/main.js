//Proyecto Final 
//Logan Araujo Hernandez - Comisión 57695

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

//Alerta al precionar el boton para activar el modo oscuro.

const colorPagina = document.querySelector("#color-pagina");

colorPagina.addEventListener("click", () => {

    Swal.fire({
    title: 'Modo Oscuro',
    text: 'Activaste el modo oscuro',
    icon: 'error',
    iconColor: 'black',
    confirmButtonText: 'Ok',
    iconHtml: '🌙'
  })
})

//Simulador carrito de compra de las botellas

document.addEventListener("DOMContentLoaded", () => {
    const botonesCompra = document.querySelectorAll(".boton-compra");
    const carrito = [];
  
    botonesCompra.forEach(boton => {
      boton.addEventListener("click", () => {
        const titulo = boton.parentElement.querySelector(".card-title").textContent;
        const precio = {"Botella de agua - 1L": 1000, "Botella de agua - 5L": 5000, "Botella de agua - 20L": 10000}[titulo] || 0;
        
        const producto = carrito.find(p => p.titulo === titulo);
        producto ? producto.cantidad++ : carrito.push({titulo, precio, cantidad: 1});
        
        actualizarCarrito();
      });
    });
  
    function actualizarCarrito() {
      const listaCarrito = document.getElementById("lista-carrito");
      listaCarrito.innerHTML = "";
  
      let totalCarrito = 0;
  
      carrito.forEach(({titulo, precio, cantidad}) => {
        const itemCarrito = document.createElement("li");
        itemCarrito.textContent = `${titulo} - ${cantidad} Unidades - ${precio * cantidad} Pesos`;
        listaCarrito.appendChild(itemCarrito);
        totalCarrito += precio * cantidad;
      });
  
      document.getElementById("total-carrito").textContent = totalCarrito;
    }
});
  
//Api para simular lista de usuarios satisfechos

const urlUsuario1 = "https://jsonplaceholder.typicode.com/users"
const tituloUsuario1 = document.querySelector("#titulo-usuario1")

fetch(urlUsuario1)
    .then( (response) => response.json())
    .then( (data) => {
        data.forEach(usuario => {
            const p1 = document.createElement("h5");
            p1.textContent = usuario.name;
            tituloUsuario1.append(p1);
        });
})