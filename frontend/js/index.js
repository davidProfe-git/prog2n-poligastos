let registros = document.getElementById('registros-contenedor')
let categoriaSelect = document.getElementById('categoria')

function mostraTransacciones() {
    fetch('http://localhost:4000/api/gastos')
        .then(respuesta => respuesta.json())
        .then((datos) => {
            registros.innerHTML = ''; // Limpiar antes de pintar

            for (let i = 0; i < datos.data.length; i++) {
                let color = 'rojo';

                if (datos.data[i].tipo && datos.data[i].tipo.toLowerCase().trim() === 'ingreso') {
                    color = 'verde';
                }

                let nombreMostrar = datos.data[i].descripcion || 'Sin descripción';

                registros.innerHTML += `
                    <div class='fila ${color}'>
                        <div>${nombreMostrar}</div> 
                        <div>$ ${datos.data[i].monto}</div>
                        <div class="acciones">
                            <button class="boton-accion">Editar</button>
                            <button class="boton-accion">Eliminar</button>
                        </div>
                    </div>`
            }
        })
}

function listarCategoria() {
    fetch('http://localhost:4000/api/categoria')
        .then(respuesta => respuesta.json())
        .then((datos) => {
            categoriaSelect.innerHTML = '<option value="">Seleccione una categoría</option>';
            for (let i = 0; i < datos.data.length; i++) {
                categoriaSelect.innerHTML += `<option value="${datos.data[i].id_categoria}">${datos.data[i].nombre_categoria}</option>`
            }
        })
}

function guardarRegistro(tipo) {
    let monto = document.getElementById('monto').value;
    let id_categoria = categoriaSelect.value;
    let fecha = document.getElementById('fecha').value;

    // Validación básica
    if (!monto || !id_categoria || !fecha) {
        alert("Por favor completa todos los campos del formulario.");
        return;
    }

    // Obtener texto de la categoría para usar como descripción
    let descripcion = categoriaSelect.options[categoriaSelect.selectedIndex].text;

    let nuevoRegistro = {
        monto: parseFloat(monto),
        descripcion: descripcion,
        fecha_gasto: fecha,
        id_categoria: parseInt(id_categoria),
        tipo: tipo
    };

    fetch('http://localhost:4000/api/registro-gastos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoRegistro)
    })
    .then(respuesta => respuesta.json())
    .then(data => {
        // Limpiar formulario y recargar lista
        document.getElementById('monto').value = '';
        document.getElementById('fecha').value = '';
        categoriaSelect.selectedIndex = 0;

        mostraTransacciones();
    })
    .catch(error => console.error('Error:', error));
}

// Inicializar
listarCategoria();
mostraTransacciones();


// let registros = document.getElementById('registros-contenedor')
// let categoriaSelect = document.getElementById('categorias')

// function mostraTransacciones(){
// fetch('http://localhost:4000/api/gastos')
// .then(respuesta => respuesta.json())
// .then((datos)=>{
    
//     for(i=0; i < datos.data.length; i++){

//         let color = 'rojo';
            
//             // Compara ignorando mayúsculas/minúsculas o espacios
//             if (datos.data[i].tipo && datos.data[i].tipo.toLowerCase().trim() === 'ingreso') {
//                 color = 'verde';
//             }
//     registros.innerHTML += `<div class='fila ${color}'>
//                         <div>${datos.data[i].descripcion}</div> 
//                         <div>${datos.data[i].monto}</div>
//                         </div>`
//     }


// })
// }

// function listarCategoria(){
//     fetch('http://localhost:4000/api/categoria')
//     .then(repuesta => repuesta.json())
//     .then((datos)=>{

//         for(i=0; i < datos.data.length; i++){

//             categoria.innerHTML += `<option value="${datos.data[i].id_categoria}">${datos.data[i].nombre_categoria}</option>`
//         }
//     })
// }



// listarCategoria();
// mostraTransacciones();
