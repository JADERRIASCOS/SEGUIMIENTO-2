let reservas = [];
let continuar = true;

while (continuar) {
    window.alert("Bienvenido al apartado de reservas de HotelNoah");

    let menuprincipal = prompt("Menú principal, \n1. Reservas \n2. Consultar reserva \n3. Habitaciones reservadas");

    if (menuprincipal === "1") {
        window.alert("Por favor seleccione el tipo de habitación que desea");

        let menu = {
            tipo: "\n1. Individual \n2. Doble \n3. Familiar",
            smoking: "\n1. Fumadores \n2. No fumadores"
        };

        let seleccione = prompt(menu.tipo);
        window.alert(`Opción ${seleccione} seleccionada`);

        let seleccione2 = prompt(menu.smoking);
        window.alert(`Opción ${seleccione2} seleccionada`);

        let info = {
            nombre: prompt("Por favor introduce tus nombres y apellidos completos"),
            país: prompt("Por favor indique tu país de origen"),
            documento: prompt("Por favor ingrese su número de documento o pasaporte")
        };

        if (seleccione === "3") {
            info.personas = prompt("Número de personas: 3. 4.");
            if (info.personas !== "3" && info.personas !== "4") {
                window.alert("Número de personas no permitido para el tipo de habitación seleccionada. Por favor, ingresa otro valor o cambia el tipo de habitación.");
            }
        }

        if (seleccione === "3") {
            let llevarMascotas = prompt("¿Llevará mascotas? 1. Sí 2. No");
            info.llevarMascotas = llevarMascotas === "1" ? "Sí" : "No";
            window.alert(`Llevará mascotas: ${info.llevarMascotas}`);
        }

        window.alert(`Nombre ${info.nombre} registrado exitosamente`);
        window.alert(`País de origen ${info.país} registrado exitosamente`);
        window.alert(`Dato ${info.documento} registrado exitosamente`);

        let reserva = {
            llegada: prompt("Ingrese la fecha estimada de llegada DD/MM/AA"),
            salida: prompt("Ingrese la fecha estimada de salida DD/MM/AA")
        };

        window.alert(`Su fecha de llegada quedó programada para el día ${reserva.llegada} y su fecha de salida quedó programada para el día ${reserva.salida}. Nos vemos pronto!`);

        reservas.push({
            nombre: info.nombre,
            tipo: seleccione,
            fumadores: seleccione2,
            personas: info.personas,
            llegada: reserva.llegada,
            salida: reserva.salida,
            documento: info.documento,
            llevarMascotas: info.llevarMascotas
        });
    } else if (menuprincipal === "2") {
        let ingresarN = prompt("Por favor ingrese su número de documento o pasaporte");

        // Buscar la reserva por el número de documento o pasaporte
        let reservaEncontrada = reservas.find(reserva => reserva.documento === ingresarN);

        if (reservaEncontrada) {
            window.alert("Reserva encontrada. A continuación, se muestra la información de la reserva:");

            window.alert(`\nNombre: ${reservaEncontrada.nombre} \nTipo de habitación: ${reservaEncontrada.tipo} \nFumadores: ${reservaEncontrada.fumadores} \nNúmero de personas: ${reservaEncontrada.personas} \nFecha de llegada: ${reservaEncontrada.llegada} \nFecha de salida: ${reservaEncontrada.salida} \nNúmero de documento o pasaporte: ${reservaEncontrada.documento} \nLlevará mascotas: ${reservaEncontrada.llevarMascotas}`);
        } else {
            window.alert("No se encontró ninguna reserva con ese número de documento o pasaporte.");
        }
    } else if (menuprincipal === "3") {
        window.alert("Número de reservas disponibles para el mes de septiembre: 4");
    } else {
        window.alert("Opción no válida. Por favor, ingrese una opción válida.");
    }

    let opcion = prompt("¿Desea realizar otra operación? (S para continuar, cualquier otra tecla para salir)").toUpperCase();
    if (opcion !== "S") {
        continuar = false;
    }
}

window.alert("Gracias por usar nuestro servicio de reservas. ¡Hasta luego!");