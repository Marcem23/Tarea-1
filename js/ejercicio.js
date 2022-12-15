

let nombre = ""
nombre = prompt("¿Cómo te llamas?")
alert("Hola " + nombre + ", bienvenido al blog!")

// Elegir tu Zona inicial
let Zona = 0
Zona = prompt("Elige tu Zona: 1 Norte, 2 centro, 3 Sur")

// Mostrar tu Zona inicial
if (Zona == 1) { 
alert("Tu zona inicial es Norte")
} else if (Zona == 2) {
alert("Tu zona inicial es Centro")
} else if (Zona == 3) {
alert("Tu Zona inicial es Sur")
} else {
alert("No eligio ninguno")
}
