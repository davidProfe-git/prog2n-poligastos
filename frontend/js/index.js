const contenedor = document.getElementById('registros-contenedor')
const contenedor2 = document.getElementById('categoria')
const montoInput = document.getElementById('monto')
const fechaInput = document.getElementById('fecha')
const botonIngresos = document.getElementById('boton-ingresos')
const botonGastos = document.getElementById('boton-gastos')

function cargarGastos() {
    fetch('http://localhost:4000/api/gastos')
        .then(respuesta => respuesta.json())
        .then((resultado) => {
            contenedor.innerHTML = ''

            resultado.data.forEach(movimiento => {
                const fila = document.createElement('div')
                const esIngreso = movimiento.tipo === 'ingreso'
                fila.className = 'fila ' + (esIngreso ? 'verde' : 'rojo')

                const info = document.createElement('div')
                info.className = 'fila-info'

                const concepto = document.createElement('span')
                concepto.textContent = movimiento.concepto

                const monto = document.createElement('span')
                monto.className = 'fila-monto'
                monto.textContent = '$ ' + Number(movimiento.monto).toLocaleString()

                info.appendChild(concepto)
                info.appendChild(monto)

                const acciones = document.createElement('div')
                acciones.className = 'acciones'

                const botonEditar = document.createElement('button')
                botonEditar.className = 'boton-accion'
                botonEditar.textContent = 'Editar'

                const botonEliminar = document.createElement('button')
                botonEliminar.className = 'boton-accion'
                botonEliminar.textContent = 'Eliminar'

                acciones.appendChild(botonEditar)
                acciones.appendChild(botonEliminar)

                fila.appendChild(info)
                fila.appendChild(acciones)
                contenedor.appendChild(fila)
            })
        })
        .catch(error => {
            contenedor.innerHTML = '<p>No se pudieron cargar los registros</p>'
            console.error('Error al cargar gastos:', error)
        })
}

function cargarCategorias() {
    fetch('http://localhost:4000/api/categorias')
        .then(respuesta => respuesta.json())
        .then((resultado) => {
            contenedor2.innerHTML = ''

            resultado.data.forEach(categoria => {
                const opcion = document.createElement('option')
                opcion.value = categoria.id
                opcion.textContent = categoria.nombre
                contenedor2.appendChild(opcion)
            })
        })
        .catch(error => {
            console.error('Error al cargar categorías:', error)
        })
}

function crearRegistro(tipo) {
    const monto = montoInput.value
    const categoria_id = contenedor2.value
    const fecha = fechaInput.value

    // Obtener el texto de la categoría seleccionada como concepto
    const categoriaTexto = contenedor2.options[contenedor2.selectedIndex].text

    // Validar que los campos no estén vacíos
    if (!monto || !categoria_id || !fecha) {
        alert('Por favor completa todos los campos')
        return
    }

    const datos = {
        monto: parseFloat(monto),
        concepto: categoriaTexto,
        categoria_id: parseInt(categoria_id),
        fecha: fecha,
        tipo: tipo  // 'ingreso' o 'gasto'
    }

    fetch('http://localhost:4000/api/gastos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(respuesta => respuesta.json())
        .then(resultado => {
            // Limpiar formulario
            montoInput.value = ''
            fechaInput.value = ''

            // Recargar la lista de registros
            cargarGastos()

            alert('Registro creado exitosamente')
        })
        .catch(error => {
            console.error('Error al crear registro:', error)
            alert('Error al guardar el registro')
        })
}

botonIngresos.addEventListener('click', () => {
    crearRegistro('ingreso')
})

botonGastos.addEventListener('click', () => {
    crearRegistro('gasto')
})

cargarGastos()
cargarCategorias()