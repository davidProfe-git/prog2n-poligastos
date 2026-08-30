let registros = document.getElementById('registros-contenedor')
function prueba(){
    fetch('http://localhost:3000/api/gastos')
    .then (respuesta=>respuesta.json())
    .then((datos)=>{

    for (i=0; i < datos.data.length; i++){
        registros.innerHTML+="<div class='fila'>" + datos.data[i].descripcion +"<br>" + datos.data[i].monto + "</br>" + "</div>"
        }

    })
    }

 prueba()


