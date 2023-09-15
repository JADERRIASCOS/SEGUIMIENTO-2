// Declaración de variables para las estadísticas
let totalUsuariosAtendidos = 0;
let totalAtencionTerminal = 0;
let totalAtencionAsesoria = 0;
let totalEstudiantesAtendidos = 0;
let totalDirectivosAtendidos = 0;

// Función para solicitar datos al usuario
function solicitarDatos() {
  const cedula = prompt("Por favor, ingresa tu número de cédula:");
  const tipoAtencion = prompt("Selecciona el tipo de atención (terminal/asesoría):").toLowerCase();

  if (tipoAtencion === "terminal") {
    totalUsuariosAtendidos++;
    totalAtencionTerminal++;
  } else if (tipoAtencion === "asesoría") {
    totalUsuariosAtendidos++;
    totalAtencionAsesoria++;
    
    const tipoAsesoria = prompt("Selecciona el tipo de asesoría (estudiante/directivo):").toLowerCase();
    
    if (tipoAsesoria === "estudiante") {
      totalEstudiantesAtendidos++;
    } else if (tipoAsesoria === "directivo") {
      totalDirectivosAtendidos++;
    } else {
      alert("Tipo de asesoría no válido.");
    }
  } else {
    alert("Tipo de atención no válido.");
  }
}

// Ciclo para recopilar datos de atención
while (true) {
  const continuar = prompt("¿Deseas ingresar otro registro de atención? (sí/no)").toLowerCase();
  if (continuar === "no") {
    break;
  }
  solicitarDatos();
}

// Mostrar estadísticas
console.log("Estadísticas de atención:");
console.log("Total de usuarios atendidos: " + totalUsuariosAtendidos);
console.log("Total de usuarios en atención terminal: " + totalAtencionTerminal);
console.log("Total de usuarios en atención de asesoría: " + totalAtencionAsesoria);
console.log("Total de estudiantes atendidos: " + totalEstudiantesAtendidos);
console.log("Total de directivos atendidos: " + totalDirectivosAtendidos);