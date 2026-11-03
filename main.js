//datos de los clientes
let cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234",dni: "44788834"},
    { nombre: "Gera", saldo: 150, password: "5678", dni: "10247439"},
    { nombre: "Sabi", saldo: 60, password: "9102", dni: "98005362"}
];
// console.log(cuentas)

//almacenamiento de pantallas
let pantalla1 = document.querySelector(".pantalla1");
let pantalla2 = document.querySelector(".pantalla2");
let pantalla3 = document.querySelector(".pantalla3");
let pantalla4 = document.querySelector(".pantalla4");
let pantalla5 = document.querySelector(".pantalla5");
// console.log(pantalla1)

// datos ingresados al input almacenados en let
let inputDni = document.getElementById("codigoDeDni");
let inputClave = document.getElementById("digitacionDeClave");
let inputRetiro = document.getElementById("digitacionDeRetiro");
let inputIngreso = document.getElementById("digitacionDeIngreso");
// console.log(inputIngreso)


//
let datoActual = null;
let saldoVisible = false;



//formula para activar y desactivar las pantallas
function mostrarPantalla(pantalla) {

    pantalla1.style.display = "none";
    pantalla2.style.display = "none";
    pantalla3.style.display = "none";
    pantalla4.style.display = "none";
    pantalla5.style.display = "none";

    pantalla.style.display = "block";
}

mostrarPantalla(pantalla1);


//formula para ingresar si tu dni es correcto
function validarDni() {

    let dniIngresado = inputDni.value;

    datoActual = cuentas.find(function(cuenta) {
        return cuenta.dni === dniIngresado;
    }); //Formula confusa, para repasar

    if (datoActual) {
        mostrarPantalla(pantalla5);

    } else {

        alert("DNI incorrecto. Inténtelo nuevamente.");
        
    }
}

//Formula para confirmar contraseña
function confirmarClave() {

    let claveIngresada = inputClave.value;

    if (datoActual.password === claveIngresada) {

        mostrarPantalla(pantalla2);

    } else {

        alert("Contraseña incorrecta. Inténtelo nuevamente.");

    }
}

//regresas a pantalla 1
function salida() {
    inputDni.value = "";
    inputClave.value = "";
    datoActual = null;

    mostrarPantalla(pantalla1);
}

//regresas a pantalla 2 (Osea el menu)
function regresarMenu() {
    mostrarPantalla(pantalla2);
}


//ingresa a la seccion de retiro (osea pantalla3)

function irARetirar() {
    mostrarPantalla(pantalla3);
}

//va a la seccion para ingresar cantidades (osea pantalla4)
function ingresarMonto() {
    mostrarPantalla(pantalla4);
}

//Ingresa la cantida segun el boton que presiones a la variable "seleccionarRetiro"
function seleccionarRetiro(monto) {
    inputRetiro.value = monto;
}

//Ingresa la cantida segun el boton que presiones a la variable "seleccionarIngreso"
function seleccionarIngreso(monto) {
    inputIngreso.value = monto;
}

//Solo me dara mensaje de ingresar a ventanilla por que se me va el tiempo :,c

function acercarseVentanilla() {
    alert("Por favor, acercarse a ventanilla");
}



//ver saldo (remplazando elementos como mi profe me enseño)
function verSaldo() {

    let boton = document.querySelector(".verSaldoActual");
    let icono = boton.querySelector("i");
    let texto = boton.querySelector("h3");

    if (saldoVisible === false) {

        icono.className = "";
        icono.textContent = "S/. " + datoActual.saldo;

        texto.textContent = "Ocultar Saldo";

        saldoVisible = true;

    } else {

        icono.className = "bi bi-eye-fill";
        icono.textContent = "";

        texto.textContent = "Ver Saldo Actual";

        saldoVisible = false;
    }
}










//Al hacer clicl en el boton de confirmar se ejecuta la funcion (pantalla 3)
function confirmarRetiro() {

    let montoRetirar = Number(inputRetiro.value);

    if (montoRetirar < 20 || inputRetiro.value === "") {
        alert("Ingrese un monto mayor a S/. 20, POR FAVOR");
        return;
    }

    if (montoRetirar > datoActual.saldo) {
        alert("Saldo insuficiente.");
        return;
    }

    datoActual.saldo = datoActual.saldo - montoRetirar;
    // Justp aqui se descuenta el dinero

    alert("Transacción exitosa.");

    inputRetiro.value = "";

    mostrarPantalla(pantalla2);
}


//Al hacer clicl en el boton de confirmar se ejecuta la funcion (pantalla 4)
function confirmarIngreso() {

    let montoIngresar = Number(inputIngreso.value);

    if (inputIngreso.value === "" || montoIngresar < 20) {
        alert("Ingrese una cantidad mayor a S/. 20, POR FAVOR.");
        return;
    }




    datoActual.saldo = datoActual.saldo + montoIngresar;

    alert("Transacción exitosa.");

    inputIngreso.value = "";

    mostrarPantalla(pantalla2);
}

/*------Funcion de hora-------*/

function actualizarHora() {
    let hora = new Date();

    document.getElementById("horaActual").textContent =
        "Hora: " + hora.toLocaleTimeString("es-PE");
}

actualizarHora();

setInterval(actualizarHora, 1000);