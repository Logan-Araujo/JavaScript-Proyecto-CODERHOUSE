//PreEntrega 2 
//Logan Araujo Hernandez - Comisión 57695

//Calcular costo total de un producto (Tienda de ropa)

alert("Bienvenid@ a la tienda de ropa!")
alert("Vendemos lindas opciones de Camisas y Pantalones!")

//En este array se guardaran las camisas que se compren
const camisas = []

let coloresCamisa;
let preciosCamisa;

//Este ciclo es para la venta de camisas en la que si no deseas comprar ninguna camisa escribes "salir"
do {
    coloresCamisa = prompt("De que color le gustaria comprar su camisa?.\n-Blanco \n-Negro \n-Verde \n-Azul \n-Morado \nSi desea salir, escriba \"salir\"");

    if (coloresCamisa.toLowerCase() !== "salir") {

    do{    
        preciosCamisa = parseInt(prompt("De que talla deseas la camisa? (Escriba el precio) \n-Talla S = $1000 \n-Talla M = $2000 \n-Talla L = $3000 \n-Talla XL = $4000 \n-Talla XXL = $5000 \nSi desea salir, escriba \"salir\""));
    } while (isNaN(preciosCamisa) || preciosCamisa === "" || preciosCamisa === null)

        let compraCamisa = {

            color: coloresCamisa,
            precio: preciosCamisa
        }
        camisas.push(compraCamisa);
    }

} while (coloresCamisa.toLowerCase() !== "salir")

//Esta function es para determinar el costo total de las camisas
function calcularCostoTotalCamisas() {
    let total = camisas.reduce((acc, camisas) => acc + camisas.precio, 0);
    return total;
}

//Estos console.log son para mostrar en cosola el array de las camisas compradas y el costo total de las mismas
console.log("Camisas compradas", camisas)
console.log("Costo total de las camisas $", calcularCostoTotalCamisas());

alert("Desea llevar algun pantalon?")

//En este array se guardaran los pantalones que se compren
const pantalones = []

let coloresPantalon;
let preciosPantalon;

//Este ciclo es para la venta de pantalones en la que si no deseas comprar ningun pantalon escribes "salir"
do {
    coloresPantalon = prompt("De que color le gustaria comprar su pantalon?.\n-Blanco \n-Negro \n-Verde \n-Azul \n-Morado \nSi desea salir, escriba \"salir\"");

    if (coloresPantalon.toLowerCase() !== "salir") {

    do{    
        preciosPantalon = parseInt(prompt("De que talla deseas la camisa? (Escriba el precio) \n-Talla 38 = $1000 \n-Talla 40 = $2000 \n-Talla 42 = $3000 \n-Talla 44 = $4000 \n-Talla 46 = $5000 \nSi desea salir, escriba \"salir\""));
    } while (isNaN(preciosPantalon) || preciosPantalon === "" || preciosPantalon === null)

        let compraPantalon = {

            color: coloresPantalon,
            precio: preciosPantalon
        }
        pantalones.push(compraPantalon);
    }

} while (coloresPantalon.toLowerCase() !== "salir")

//Esta funtion es para determinar el costo total de los pantalones   
function calcularCostoTotalPantalones() {
    let total = pantalones.reduce((acc, pantalones) => acc + pantalones.precio, 0);
    return total;
}

//Esta funtion es para determinar el costo total de la compra
function calcularCostoTotalGeneral() {
    let total = calcularCostoTotalCamisas() + calcularCostoTotalPantalones();
    return total;
}

//Estos console.log son para mostrar en cosola el array de los pantalones comprados, el costo total de los mismos y el costo total de toda la compra
console.log("Pantalones comprados", pantalones)
console.log("Costo total de los pantalones $", calcularCostoTotalPantalones());
console.log("El costo total de la compra es $", calcularCostoTotalGeneral());