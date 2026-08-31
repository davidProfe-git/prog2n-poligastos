const contenedor = document.getElementById('registros-contenedor')

function cargarGastos() {
    fetch('http://localhost:4000/api/gastos')
        .then(respuesta => respuesta.json())
        .then((resultado) => {
            contenedor.innerHTML = ''

            resultado.data.forEach(movimiento => {
                const fila = document.createElement('div')
                fila.className = 'fila'
                fila.innerHTML = `
                    <span>${movimiento.concepto}</span>
                    <span>${Number(movimiento.monto).toLocaleString()}</span>
                `
                contenedor.appendChild(fila)
            })
        })
        .catch(error => {
            contenedor.innerHTML = '<p>No se pudieron cargar los registros</p>'
            console.error('Error al cargar gastos:', error)
        })
}

cargarGastos()