const autos = [
  {
    id: 1,
    marca: "aiways",
    modelo: "u5",
    imagen: "http://cdn.imagin.studio/getImage?customer=img&make=aiways&modelFamily=u5&width=2600&zoomType=fullscreencdn.imagin.studio/",
    precio: 1500,
    cantidad: 0
  },
  {
    id: 2,
    marca: "cupra",
    modelo: "ateca",
    imagen: "https://cdn.imagin.studio/getImage?customer=img&make=cupra&modelFamily=ateca&width=2600&zoomType=fullscreen&paintId=pspc0138",
    precio: 3000,
    cantidad: 0
  },
  {
    id: 3,
    marca: "infinit",
    modelo: "qx30",
    imagen: "https://cdn.imagin.studio/getImage?customer=img&make=infiniti&modelFamily=qx30&width=2600&zoomType=fullscreen&paintId=pspc0256",
    precio: 10000,
    cantidad: 0
  },
  {
    id: 4,
    marca: "ldv",
    modelo: "deliver-9",
    imagen: "http://cdn.imagin.studio/getImage?customer=img&make=ldv&modelFamily=deliver-9&width=2600&zoomType=fullscreencdn.imagin.studio/",
    precio: 10000,
    cantidad: 0
  },
  {
    id: 5,
    marca: "mazda",
    modelo: "cx-30",
    imagen: "http://cdn.imagin.studio/getImage?customer=img&make=mazda&modelFamily=cx-30&width=2600&zoomType=fullscreen&paintId=pspc0278",
    precio: 1000,
    cantidad: 0
  },
  {
    id: 7,
    marca: "renault",
    modelo: "duster",
    imagen: "http://cdn.imagin.studio/getImage?customer=img&make=renault&modelFamily=duster&width=2600&zoomType=fullscreen&paintId=pspc0124",
    precio: 1600,
    cantidad: 0
  },
  {
    id: 8,
    marca: "volkswagen",
    modelo: "atlas",
    imagen: "http://cdn.imagin.studio/getImage?customer=img&make=volkswagen&modelFamily=atlas&width=2600&zoomType=fullscreen&paintId=pspc0220sspc0004",
    precio: 1489,
    cantidad: 0
  },
  {
    id: 9,
    marca: "ford",
    modelo: "bronco",
    imagen: "http://cdn.imagin.studio/getImage?customer=img&make=ford&modelFamily=bronco&width=2600&zoomType=fullscreen&paintId=pspc0092",
    precio: 1700,
    cantidad: 0
  },
  {
    id: 10,
    marca: "mercedes",
    modelo: "eqe",
    imagen: "http://cdn.imagin.studio/getImage?customer=img&make=mercedes&modelFamily=eqe&width=2600&zoomType=fullscreen&paintId=pspc0004sspc0033",
    precio: 1700,
    cantidad: 0
  }
]

// dom
const contenedorAutos = document.querySelector("#contenedor-productos")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numerito = document.querySelector("#numerito");
// /dom

function cargarAutos(productosElegidos) {
  contenedorAutos.innerHTML = "";
  autos.forEach(auto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img class="producto-imagen" src="${auto.imagen}" alt="">
      <div class="producto-detalles">
        <h3 class="producto-titulo">${auto.marca} ${auto.modelo}</h3>
        <p class="producto-precio">$${auto.precio}</p>
        <button class="producto-agregar" onclick="agregarAlCarrito(${auto.id})">Agregar</button>
      </div>
    `;
    contenedorAutos.append(div)
  })
}

cargarAutos();
let autosEnCarrito;
let autosEnCarritoLS = localStorage.getItem("autos-En-Carrito");
if (autosEnCarritoLS) {
  autosEnCarrito = JSON.parse(autosEnCarritoLS);
  actualizarNumerito();
} else {
  autosEnCarrito = [];
}

function agregarAlCarrito(id) {

  const autoAgregado = autos.find(a => a.id === id)

  if (autosEnCarrito.some(a => a.id === id)) {
    const I = autosEnCarrito.findIndex(a => a.id === id);
    autosEnCarrito[I].cantidad++;
  } else {
    autoAgregado.cantidad = 1;
    autosEnCarrito.push(autoAgregado);
  }
  actualizarNumerito();

  localStorage.setItem("autos-En-Carrito", JSON.stringify(autosEnCarrito));
}

function actualizarNumerito() {
  let nuevoNumerito = autosEnCarrito.reduce((acc, auto) => acc + auto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}