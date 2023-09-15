// Define los productos disponibles con sus nombres, precios y cantidades en stock
const productos = [
    { nombre: "Papas Margarita", precio: 3000, stock: 3 },
    { nombre: "Gaseosa CocaCola", precio: 2200, stock: 5 },
    { nombre: "Galletas Oreo", precio: 1700, stock: 8 },
    // Agrega más productos si es necesario
  ];
  
  // Crea un carrito de compras vacío
  const carrito = [];
  
  // Función para agregar productos al carrito
  function agregarAlCarrito(producto) {
    const productoEnStock = productos.find((p) => p.nombre === producto.nombre);
  
    if (!productoEnStock) {
      window.alert("El producto no está disponible.");
      return;
    }
  
    if (productoEnStock.stock === 0) {
      window.alert("El producto está agotado.");
      return;
    }
  
    const productoEnCarrito = carrito.find((p) => p.nombre === producto.nombre);
  
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }
  
    productoEnStock.stock--;
    window.alert("Producto agregado al carrito.");
  }
  
  // Función para mostrar el contenido del carrito
  function mostrarCarrito() {
    let mensaje = "Carrito de compras:\n";
    carrito.forEach((producto) => {
      mensaje += `${producto.nombre} - Cantidad: ${producto.cantidad} - Precio Subtotal: $${producto.cantidad * producto.precio}\n`;
    });
    window.alert(mensaje);
  }
  
  // Función para calcular y mostrar el precio total de la compra
  function calcularTotalCompra() {
    const total = carrito.reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0);
    window.alert(`Precio Total de la Compra: $${total}`);
  }
  
  // Función para mostrar el menú de opciones al usuario
  function mostrarMenu() {
    return prompt("\n1. Agregar producto al carrito \n2. Mostrar carrito \n3. Calcular total de compra \n4. Salir");
  }
  
  // Ciclo principal de la aplicación
  window.alert("Bienvenido a la aplicación de carrito de compras.");
  
  while (true) {
    const opcion = mostrarMenu();
    if (opcion === "4") {
      window.alert("Gracias por usar la aplicación. ¡Hasta luego!");
      break; // Sal del bucle cuando el usuario selecciona "4. Salir"
    }
    manejarOpcion(opcion);
  }
  
  // Función para manejar las opciones del usuario
  function manejarOpcion(opcion) {
    switch (opcion) {
      case "1":
        let mensaje = "\nProductos disponibles:\n";
        productos.forEach((producto, index) => {
          mensaje += `${index + 1}. ${producto.nombre} - Precio: $${producto.precio} - Stock: ${producto.stock}\n`;
        });
        const seleccion = parseInt(prompt(mensaje + "Selecciona un producto (número): "));
        if (seleccion >= 1 && seleccion <= productos.length) {
          agregarAlCarrito(productos[seleccion - 1]);
        } else {
          window.alert("Selección no válida.");
        }
        break;
  
      case "2":
        mostrarCarrito();
        break;
  
      case "3":
        calcularTotalCompra();
        break;
  
      case "4":
        window.alert("Gracias por usar la aplicación. ¡Hasta luego!");
        break;
  
      default:
        window.alert("Opción no válida.");
    }
  }