let registros = document.getElementById('registros-contenedor')
let categorias = document.getElementById('categoria')
let montoInput = document.getElementById('monto')

let botonIngresos = document.getElementById('boton-ingresos')
let botonGastos = document.getElementById('boton-gastos')

function mostrarMovimientos(){
    fetch('http://localhost:3000/api/gastos')
    .then(respuesta => respuesta.json())
    .then((datos) => {
        registros.innerHTML = '';

        for (let i = 0; i < datos.data.length; i++){
            const movimiento = datos.data[i];
            const colorMovimiento = (movimiento.tipo && movimiento.tipo.toLowerCase() === 'ingreso') ? 'verde' : 'rojo';

            registros.innerHTML += `
                <div class='fila ${colorMovimiento}'>
                    <div>${movimiento.descripcion || 'Sin detalle'}</div>
                    <div>$${movimiento.monto}</div>
                    <div class="acciones">
                        <button class="boton-accion" onclick="prepararEdicion(${movimiento.id_movimientos})">Editar</button>
                        <button class="boton-accion" onclick="eliminarRegistro(${movimiento.id_movimientos})">Eliminar</button>
                    </div>
                </div>`;
        }
    })
}

function mostrarCategorias(){
    fetch('http://localhost:3000/api/categorias')
    .then(respuesta => respuesta.json())
    .then((datos) => {
        categorias.innerHTML = '';
        for(let i = 0; i < datos.data.length; i++){
            categorias.innerHTML += `<option value="${datos.data[i].id_categorias}">${datos.data[i].categoria}</option>`;
        }
    })
}

function guardarMovimientos(tipoMovimiento){
    const textoCategoria = categorias.options[categorias.selectedIndex] ? categorias.options[categorias.selectedIndex].text : '';

    const nuevoMovimiento = {
        monto: montoInput.value,
        id_categorias: categorias.value,
        descripcion: textoCategoria,
        tipo: tipoMovimiento
    };

    if (!nuevoMovimiento.monto){
        alert("Completa el monto");
        return;
    }

    fetch('http://localhost:3000/api/registro-gastos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(nuevoMovimiento)
    })
    .then(response => response.json())
    .then(() => {
        montoInput.value = '';
        mostrarMovimientos();
    });
}

function eliminarRegistro(id_movimientos){
    if (confirm("¿Deseas eliminar este registro?")) {
        fetch(`http://localhost:3000/api/gastos/${id_movimientos}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(() => {
            mostrarMovimientos();
        });
    }
}

botonIngresos.addEventListener('click', () => guardarMovimientos('ingreso'))
botonGastos.addEventListener('click', () => guardarMovimientos('gasto'))

mostrarCategorias()
mostrarMovimientos()