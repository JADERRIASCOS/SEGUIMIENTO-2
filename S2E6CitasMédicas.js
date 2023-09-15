// Estructura de una cita médica
function Cita(paciente, fecha, hora, medico) {
    this.paciente = paciente;
    this.fecha = fecha;
    this.hora = hora;
    this.medico = medico;
}

// Arreglo para almacenar las citas
const citasProgramadas = [];

// Función para programar citas
function programarCita(paciente, fecha, hora, medico) {
    const nuevaCita = new Cita(paciente, fecha, hora, medico);
    citasProgramadas.push(nuevaCita);
    alert("Cita programada con éxito.");
}

// Función para ver citas programadas
function verCitasProgramadas() {
    if (citasProgramadas.length === 0) {
        alert("No hay citas programadas.");
    } else {
        let citasTexto = "Citas programadas:\n";

        citasProgramadas.forEach((cita, index) => {
            citasTexto += `Cita ${index + 1}:\n`;
            citasTexto += `Paciente: ${cita.paciente}\n`;
            citasTexto += `Fecha: ${cita.fecha}\n`;
            citasTexto += `Hora: ${cita.hora}\n`;
            citasTexto += `Médico: ${cita.medico}\n`;
            citasTexto += "------------------------\n";
        });

        alert(citasTexto); // Mostrar citas en ventana emergente
    }
}

// Función para cancelar citas
function cancelarCita(numeroCita) {
    if (numeroCita >= 1 && numeroCita <= citasProgramadas.length) {
        citasProgramadas.splice(numeroCita - 1, 1);
        alert(`La cita ${numeroCita} ha sido cancelada.`);
    } else {
        alert("Número de cita inválido.");
    }
}

// Interfaz de consola
let continuar = true;

while (continuar) {
    const opcion = prompt(
        "Bienvenido al sistema de gestión de citas médicas.\n" +
        "1. Programar cita\n" +
        "2. Ver citas programadas\n" +
        "3. Cancelar cita\n" +
        "4. Salir\n" +
        "Seleccione una opción:"
    );

    switch (opcion) {
        case "1":
            const paciente = prompt("Ingrese el nombre del paciente:");
            const fecha = prompt("Ingrese la fecha de la cita (YYYY-MM-DD):");
            const hora = prompt("Ingrese la hora de la cita (HH:MM):");
            const medico = prompt("Ingrese el nombre del médico:");
            programarCita(paciente, fecha, hora, medico);
            break;
        case "2":
            verCitasProgramadas();
            break;
        case "3":
            const numeroCita = parseInt(prompt("Ingrese el número de cita a cancelar:"));
            cancelarCita(numeroCita);
            break;
        case "4":
            alert("Gracias por usar el sistema de gestión de citas médicas.");
            continuar = false;
            break;
        default:
            alert("Opción inválida. Por favor, seleccione una opción válida.");
    }
}
