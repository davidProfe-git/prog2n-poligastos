fetch('http://localhost:3000/api/gastos').then(datos => datos.json())

.then ((data)=>{
    for (i=0; i<data.length; i++){

        console.log(data[i])

    }

})