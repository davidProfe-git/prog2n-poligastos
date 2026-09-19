let tipo = "";

const categoria = document.getElementById("categoria");
const lista = document.getElementById("lista-movimientos");

async function listarCategorias() {
    const respuesta = await fetch("http://localhost:4000/api/categorias");
    const datos = await respuesta.json();

    datos.data.forEach(c => {
        categoria.innerHTML += `
            <option value="${c.id_categoria}">
                ${c.descripcion}
            </option>
        `;
    });
}

async function guardarRegistro() {

    const datos = {
        monto: document.getElementById("monto").value,
        id_categoria: parseInt(categoria.value),
        descripcion: document.getElementById("descripcion").value,
        fecha: document.getElementById("fecha").value,
        tipo: tipo
    };

    if (!datos.monto || !datos.id_categoria || !datos.descripcion || !datos.fecha || !tipo) {
        alert("Complete todos los campos y seleccione Ingresos o Gastos");
        return;
    }

    await fetch("http://localhost:4000/api/movimientos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    });

    document.getElementById("monto").value = "";
    categoria.value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("fecha").value = "";

    cargarMovimientos();
}

async function cargarMovimientos() {

    const respuesta = await fetch("http://localhost:4000/api/movimientos");


    const datos = await respuesta.json();
     lista.innerHTML = "";

    datos.data
        .filter(m => !tipo || m.tipo === tipo || (tipo === "gasto" && m.tipo === "gastos"))
        .forEach(m => {

            const clase = m.tipo === "ingreso" ? "ingreso" : "gasto";

          lista.innerHTML += `
    <div class="movimiento ${clase}">
        <span>${m.descripcion}</span>
        <b>$ ${Number(m.monto).toLocaleString("es-CO")}</b>
        <button onclick="editarMovimiento(${m.id_movimiento})">Editar</button>
        <button onclick="eliminarMovimiento(${m.id_movimiento})">Eliminar</button>
    </div>
`;
        });
}

document.getElementById("btn-ingresos").onclick = function () {
    tipo = "ingreso";
    this.classList.add("seleccionado");
    document.getElementById("btn-gastos").classList.remove("seleccionado");
    cargarMovimientos();
};

document.getElementById("btn-gastos").onclick = function () {
    tipo = "gasto";
    this.classList.add("seleccionado");
    document.getElementById("btn-ingresos").classList.remove("seleccionado");
    cargarMovimientos();
};

document.getElementById("btn-registrar").onclick = guardarRegistro;

async function editarMovimiento(id) {

    const respuesta = await fetch("http://localhost:4000/api/movimientos");
    const datos = await respuesta.json();

    const movimiento = datos.data.find(m => m.id_movimiento === id);

    const monto = prompt("Ingrese el nuevo monto", movimiento.monto);
    const descripcion = prompt("Ingrese la nueva descripción", movimiento.descripcion);

    if (!monto || !descripcion) {
        return;
    }

    await fetch(`http://localhost:4000/api/movimientos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            monto: monto,
            id_categoria: movimiento.id_categoria,
            descripcion: descripcion,
            fecha: movimiento.fecha.slice(0, 10),
            tipo: movimiento.tipo
        })
    });

    cargarMovimientos();
}
async function eliminarMovimiento(id) {

    const confirmar = confirm("¿Desea eliminar este movimiento?");

    if (!confirmar) {
        return;
    }

    const respuesta = await fetch(`http://localhost:4000/api/movimientos/${id}`, {
        method: "DELETE"
    });

    if (respuesta.ok) {
        alert("Movimiento eliminado correctamente");
        cargarMovimientos();
    } else {
        alert("Error al eliminar el movimiento");
    }
}async function eliminarMovimiento(id) {

    const confirmar = confirm("¿Desea eliminar este movimiento?");

    if (!confirmar) {
        return;
    }

    const respuesta = await fetch(`http://localhost:4000/api/movimientos/${id}`, {
        method: "DELETE"
    });

    if (respuesta.ok) {
        alert("Movimiento eliminado correctamente");
        cargarMovimientos();
    } else {
        alert("Error al eliminar el movimiento");
    }
}
listarCategorias();
cargarMovimientos();