let registros = document.getElementById('registros-contenedor')
let categoria = document.getElementById('categoria')

function mostrarTransacciones(){
    fetch('http://localhost:4000/api/gastos')
    .then(respuesta => respuesta.json())
    .then((datos)=>{
     
    for(i=0; i < datos.data.length; i++){
     
     registros.innerHTML += `<div class='fila rojo'>
                            <div>${datos.data[i].descripcion}</div>
                            <div>$${datos.data[i].valor}</div>
                            <div>
                                <button>editar</button>
                            </div>
                            </div>`
        }
    })
}

function listarCategorias(){
    fetch('http://localhost:4000/api/categorias')
    .then(respuesta => respuesta.json())
    .then((datos)=>{
     
    for(i=0; i < datos.data.length; i++){
     
     categoria.innerHTML += `<option value="${datos.data[i].id_categoria}">${datos.data[i].nombre}</option>`
        }
    })
}

function guardarRegistro(){
    

}






listarCategorias()
mostrarTransacciones()