//cuando se haga click en submit
const button = document.getElementById('submit');
button.addEventListener('click', async event => {
    //extraer valores de entradas de texto
    const lugar = document.getElementById('lugar').value;
    const fecha = document.getElementById('fecha').value;
    const nombre_d = document.getElementById('nombre-d').value;
    const des = document.getElementById('des').value;
    
    //juntar datos
    const data = { lugar, fecha, nombre_d, des };
    
    //options para post request a db
    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data),
    };
    //hacer el post request y esperar response
    const response = await fetch('/api', options);
    //creacion de json
    const json = await response.json();
    console.log(json);
});