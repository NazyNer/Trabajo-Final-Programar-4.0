const autosEnCarrito = JSON.parse(localStorage.getItem("autos-En-Carrito"));

//dom
const carritoVacio = document.querySelector("#carrito-vacio")
const carritoProductos = document.querySelector("#carrito-productos")
const carritoAcciones = document.querySelector("#carrito-acciones")
const carritoComprado = document.querySelector("#carrito-comprado")
const btnEliminar = documen.querySelector("#boton")
const btnVaciar = document.querySelector("#carrito-acciones-vaciar")
const total = document.querySelector("#total")
const btnComprar = document.querySelector("#carrito-acciones-comprar")
// /dom

function cargarAutosCarrito() {
  if (autosEnCarrito) {

    carritoVacio.classList.add("disabled")
    carritoComprado.classList.add("disabled")
    carritoProductos.classList.remove("disabled")
    carritoAcciones.classList.remove("disabled")
  
    carritoProductos.innerHTML = "";
  
    autosEnCarrito.forEach(auto => {
      const div = document.createElement("div");
      div.classList.add("carrito-producto");
      div.innerHTML = 
      `
        <img class="carrito-producto-imagen" src="${auto.imagen}" alt="${auto.marca} ${auto.modelo}">
        <div class="carrito-producto-titulo">
          <small>Titulo</small>
          <h3>${auto.marca} ${auto.modelo}</h3>
        </div>
        <div class="carrito-producto-cantidad">
          <small>Cantidad</small>
          <p>${auto.cantidad}</p>
        </div>
        <div class="carrito-producto-precio">
          <small>Precio</small>
          <p>$${auto.precio}</p>
        </div>
        <div class="carrito-producto-subtotal">
          <small>Subtotal</small>
          <p>$${auto.precio * auto.cantidad}</p>
        </div>
        <button class="carrito-producto-eliminar" onclick="eliminarDelCarrito(${auto.id})"><i class="bi bi-trash-fill"></i></button>
        </div> 
        `;
  
        contenedorAutos.append(div);
    });
  
  } else {
    carritoVacio.classList.remove("disabled")
    carritoComprado.classList.add("disabled")
    carritoProductos.classList.add("disabled")
    carritoAcciones.classList.add("disabled")
  }
  
}

cargarAutosCarrito()

function eliminarDelCarrito(id) {
  const I = autosEnCarrito.findIndex(a => a.id === id);
  autosEnCarrito.splice(I, 1);
  cargarAutosCarrito();

  localStorage.setItem("autos-En-Carrito", JSON.stringify(autosEnCarrito));
}

btnVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
  autosEnCarrito.length = 0;
  localStorage.setItem("autos-En-Carrito", JSON.stringify(autosEnCarrito));
  cargarAutosCarrito();
}

function actualizarTotal() {
  const totalCalculado = autosEnCarrito.reduce((acc, auto) => acc + (auto.precio * auto.cantidad), 0);
  total.innerText = `$${totalCalculado}`;
}
btnComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {

    autosEnCarrito.length = 0;
    localStorage.setItem("autos-En-Carrito", JSON.stringify(autosEnCarrito));
    carritoVacio.classList.add("disabled")
    carritoComprado.classList.remove("disabled")
    carritoProductos.classList.add("disabled")
    carritoAcciones.classList.add("disabled")

}