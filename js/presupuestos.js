document.addEventListener("DOMContentLoaded", () => {
       

const producto = document.getElementById("producto");
const pintura = document.getElementById("pintura");
const envio = document.getElementById("envio");
const plazo = document.getElementById("plazo");
const total = document.getElementById("total");


function calcularTotal() {
        
    let precio = Number(producto.value) || 0;

    if (pintura.checked) {
        precio += 20;
    }
    if (envio.checked) {
        precio += 10;
    }

    let dias = Number(plazo.value); 

    if (dias >= 8 && dias <= 14) {
        precio = precio - (precio * 0.05); // 5% descuento
    } 
    else if (dias >= 15) {
        precio = precio - (precio * 0.10); // 10% descuento
    }
    total.textContent = precio.toFixed(2);
}

producto.addEventListener("change", calcularTotal);
envio.addEventListener("change", calcularTotal);
pintura.addEventListener("change", calcularTotal);
plazo.addEventListener("input", calcularTotal);

calcularTotal();

console.log("precio:", producto.value);
comsole.log("dias:", plazo.value);

});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e) {

    if (!condiciones.checked) {
        e.preventDefault();
        alert("Debes aceptar las condiciones")
    }

//Parametros obligatorios pare el envío 

    let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{1,15}$/;
    let regexApellidos = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{1,40}$/;
    let regexTelefono = /^[0-9]{9}$/;
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let nombre = document.getElementById("nombre").value.trim();
    let apellidos = document.getElementById("apellidos").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let email = document.getElementById("email").value.trim();

    if (!regexNombre.test(nombre)) {
        alert("Nombre incorrecto");
        e.preventDefault();
        return;
    }

    if (!regexApellidos.test(apellidos)) {
        alert("Apellidos incorrectos");
        e.preventDefault();
        return;
    }

    if (!regexTelefono.test(telefono)) {
        alert("Teléfono incorrecto");
        e.preventDefault();
        return;
    }

    if (!regexEmail.test(email)) {
        alert("Email incorrecto");
        e.preventDefault();
        return;
    }

});



