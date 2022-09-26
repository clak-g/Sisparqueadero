//Metodo consumo API GET
let mostrarTabla = () => {
    fetch('http://localhost:3000/api/clientes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            renderTable(data)
        })
}

mostrarTabla();

//Renderizar datos
let renderTable = (data) => {
    const table = document.querySelector('.table')
    //Nodo body table
    var bodytable = document.createElement('tbody');
    bodytable.className = "tbody"
    table.appendChild(bodytable);

    for (var i = 0; i < data.length; i++) {

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');

        var text1 = document.createTextNode(data[i].nombre);
        var text2 = document.createTextNode(data[i].tipovh);
        var text3 = document.createTextNode(data[i].placavh);
        var text4 = document.createTextNode(data[i].marca);
        var text5 = document.createTextNode(data[i].modelo);

        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);
        td5.appendChild(text5);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);


        bodytable.appendChild(tr);
    }
}

//Metodo consumo API POST

let createItem = () => {

    const nombre = document.querySelector('#txtnombre').value
    const tipovh = document.querySelector('#txtvehiculo').value
    const placa = document.querySelector('#txtplaca').value
    const marca = document.querySelector('#txtmarca').value
    const modelo = document.querySelector('#txtmodelo').value
    const formulario = document.querySelector('#formulario');

    const txtResultado = document.querySelector('#resultado')
   
        txtResultado.textContent = '';
    
    formulario.reset()

    
    let newClient = {
        "nombre":nombre,
        "tipovh":tipovh,
        "placavh":placa,
        "marca":marca,
        "modelo":modelo

    }

    fetch('http://localhost:3000/api/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newClient)
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            //correcto
            renderResult(true)
        })
        .catch((error) => {
            //error
            renderResult(false)
        })
       
      
}

let renderResult = (result) => {
    const txtResultado = document.querySelector('#resultado')
    if (result) {
        txtResultado.textContent = 'Guardado exitosamente'
    } else {
        txtResultado.textContent = 'Error al guardar'
    }
    //Obtener Modal
    var Modalcap = document.getElementById('exampleModal');
    var modal = bootstrap.Modal.getInstance(Modalcap)
    
    modal.hide();
    //Remover body
    const tBody = document.querySelector('.tbody')
    tBody.remove();
    //Mostrar tabla actualizada
    mostrarTabla();
}

