let sesion = prompt("Ingrese su número de documento");
window.alert(`Bienvenido! ${sesion}`);

class CuentaBancaria {
    constructor(numeroCuenta, saldoInicial = 0) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldoInicial;
    }

    depositarEfectivo(monto) {
        if (monto > 0) {
            this.saldo += monto;
            window.alert(`Depósito en efectivo de $${monto} realizado con éxito. Saldo actual: $${this.saldo}`);
        } else {
            window.alert("El monto del depósito en efectivo debe ser mayor que cero.");
        }
    }

    depositarCheque(monto) {
        if (monto > 0) {
            window.alert(`Depósito de cheque de $${monto} en proceso de verificación.`);
            // Simulación de proceso de verificación de cheque (puede ser más complejo en la implementación real).
            setTimeout(() => {
                this.saldo += monto;
                window.alert(`Depósito de cheque de $${monto} verificado y realizado con éxito. Saldo actual: $${this.saldo}`);
            }, 2000); // Simulamos una verificación de 2 segundos
        } else {
            window.alert("El monto del depósito de cheque debe ser mayor que cero.");
        }
    }

    depositar(monto, esEfectivo) {
        if (esEfectivo) {
            this.depositarEfectivo(monto);
        } else {
            this.depositarCheque(monto);
        }
    }

    retirar(monto) {
        if (monto > 0 && this.saldo >= monto) {
            this.saldo -= monto;
            window.alert(`Retiro de $${monto} realizado con éxito. Saldo actual: $${this.saldo}`);
        } else {
            window.alert("No se pudo completar el retiro. Verifique el monto o saldo disponible.");
        }
    }

    transferir(destino, monto) {
        if (monto > 0 && this.saldo >= monto) {
            this.saldo -= monto;
            destino.depositarEfectivo(monto);
            window.alert(`Transferencia de $${monto} a la cuenta ${destino.numeroCuenta} realizada con éxito.`);
        } else {
            window.alert("No se pudo completar la transferencia. Verifique el monto o saldo disponible.");
        }
    }
}

// Crear una lista de cuentas bancarias
const cuentas = [];

// Función para crear una nueva cuenta bancaria
function crearCuenta() {
    const numeroCuenta = prompt("Ingrese 4 dígitos para su cuenta nueva:");

    // Verificar si la cuenta ya existe
    const cuentaExistente = cuentas.find(cuenta => cuenta.numeroCuenta === numeroCuenta);
    if (cuentaExistente) {
        window.alert(`La cuenta con número ${numeroCuenta} ya existe.`);
    } else {
        const saldoInicial = parseFloat(prompt("Ingrese el saldo inicial:"));
        const nuevaCuenta = new CuentaBancaria(numeroCuenta, saldoInicial);
        cuentas.push(nuevaCuenta);
        window.alert(`Se ha creado una nueva cuenta con número ${numeroCuenta}.`);
    }
}

// Función para realizar operaciones en una cuenta existente
function operarCuenta() {
    let numeroCuenta = prompt("Ingrese el PIN de 4 dígitos de la cuenta en la que desea operar:");
    let cuenta = cuentas.find(cuenta => cuenta.numeroCuenta === numeroCuenta);
    let intentos = 1;

    while (!cuenta && intentos < 3) {
        window.alert(`PIN incorrecto. Intento ${intentos} de 3.`);
        numeroCuenta = prompt("Ingrese el PIN de 4 dígitos de la cuenta en la que desea operar:");
        cuenta = cuentas.find(cuenta => cuenta.numeroCuenta === numeroCuenta);
        intentos++;
    }

    if (cuenta) {
        const opcion = prompt("Seleccione una opción:\n1. Depositar\n2. Retirar\n3. Transferir\n4. Ver Saldo");

        if (opcion === "1") {
            const esEfectivo = confirm("¿Es un depósito en efectivo? (Cancelar para cheque)");
            const monto = parseFloat(prompt("Ingrese el monto a depositar:"));
            cuenta.depositar(monto, esEfectivo);
        } else if (opcion === "2") {
            const monto = parseFloat(prompt("Ingrese el monto a retirar:"));
            cuenta.retirar(monto);
        } else if (opcion === "3") {
            const cuentaDestino = prompt("Ingrese el número de cuenta de destino:");
            const destino = cuentas.find(cuenta => cuenta.numeroCuenta === cuentaDestino);

            if (destino) {
                const monto = parseFloat(prompt("Ingrese el monto a transferir:"));
                cuenta.transferir(destino, monto);
                window.alert(`Nuevo saldo de la cuenta ${cuenta.numeroCuenta}: $${cuenta.saldo}`);
                window.alert(`Nuevo saldo de la cuenta ${destino.numeroCuenta}: $${destino.saldo}`);
            } else {
                window.alert("Cuenta de destino no encontrada.");
            }
        } else if (opcion === "4") {
            window.alert(`Saldo de la cuenta ${cuenta.numeroCuenta}: $${cuenta.saldo}`);
        } else {
            window.alert("Opción no válida.");
        }
    } else {
        window.alert("Ha excedido el número de intentos permitidos.");
    }
}

// Menú principal
while (true) {
    const opcionPrincipal = prompt("Seleccione una opción:\n1. Crear nueva cuenta\n2. Operar cuenta existente\n3. Cerrar sesión");

    if (opcionPrincipal === "1") {
        crearCuenta();
    } else if (opcionPrincipal === "2") {
        operarCuenta();
    } else if (opcionPrincipal === "3") {
        window.alert("Gracias por usar nuestro sistema bancario. ¡Hasta luego!");
        break;
    } else {
        window.alert("Opción no válida.");
    }
}