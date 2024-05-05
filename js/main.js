// Pre-Entrega 1 
// Caldular el costo total de un grupo de productos (Botellas de agua)

alert("Bienvenid@ a la tienda de botellas")

const primerBotella = 1000;
const segundaBotella = 2000;
const terceraBotella = 3000;
const cuartaBotella = 4000;
const quintaBotella = 5000;

const nombreBotella = prompt("Cual botella le gustaria comprar? \n1 litro \n2 litros \n3 litros \n4 litros \n5 litros").toLowerCase();
  
let cantidad = parseInt(prompt("Cuantas botellas desea comprar?"));

function calcularCostoTotal() {
let total = 0;

        switch (nombreBotella) {
            case "1 litro":
                return cantidad * primerBotella;
            case "2 litros":
                return cantidad * segundaBotella;
            case "3 litros":
                return cantidad * terceraBotella;
            case "4 litros":
                return cantidad * cuartaBotella;
            case "5 litros":
                return cantidad * quintaBotella;
            default: 
            
        }  
     
    return total;
    
}

let resultado = (calcularCostoTotal())
console.log("El costo total es: " + "$" + resultado + " pesos")
alert("El costo total es: " + "$" + calcularCostoTotal() + " pesos")