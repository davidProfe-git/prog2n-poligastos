let variable = document.getElementById('titulo')
function prueba(){
    fetch('http://localhost:4000/api/gastos').then(datos => datos.json()).then((data)=>{

    for(i=0; i < data.length; i++){
      variable.innerHTML = '<h1>funciono!!!</h1>'


    }


})
}

prueba()