// Definir un objeto para el sistema de gestión de turnos
const sistemaGestionTurnos = {
    colaEspera: [],
    contadorTurnos: 1,
  
    // Función para tomar un turno
    tomarTurno: function () {
      const turno = this.contadorTurnos++;
      this.colaEspera.push(turno);
      return turno;
    },
  
    // Función para llamar a un cliente y eliminarlo de la cola
    llamarCliente: function () {
      if (this.colaEspera.length === 0) {
        return "No hay clientes en espera.";
      }
      const turnoLlamado = this.colaEspera.shift();
      return `Llamando al cliente con turno #${turnoLlamado}`;
    },
  
    // Función para mostrar la cola de espera actual
    mostrarColaEspera: function () {
      return this.colaEspera.join(", ");
    },
  
    // Función para mostrar el contador de turnos
    mostrarContadorTurnos: function () {
      return `Se han tomado ${this.contadorTurnos - 1} turnos hasta el momento.`;
    },
  };
  
  // Función para interactuar con el usuario mediante prompt
  function interactuarConUsuario() {
    while (true) {
      const opcion = prompt(
        "Elija una opción:\n" +
          "1. Tomar un turno\n" +
          "2. Llamar al siguiente cliente\n" +
          "3. Mostrar cola de espera\n" +
          "4. Mostrar contador de turnos\n" +
          "5. Salir"
      );
  
      switch (opcion) {
        case "1":
          const nuevoTurno = sistemaGestionTurnos.tomarTurno();
          alert(`Ha tomado el turno #${nuevoTurno}`);
          break;
        case "2":
          const llamadaCliente = sistemaGestionTurnos.llamarCliente();
          alert(llamadaCliente);
          break;
        case "3":
          const colaEspera = sistemaGestionTurnos.mostrarColaEspera();
          alert(`Cola de espera: ${colaEspera}`);
          break;
        case "4":
          const contadorTurnos = sistemaGestionTurnos.mostrarContadorTurnos();
          alert(contadorTurnos);
          break;
        case "5":
          return; // Salir del bucle
        default:
          alert("Opción no válida. Por favor, elija una opción válida.");
      }
    }
  }
  
  // Iniciar la interacción con el usuario
  interactuarConUsuario();