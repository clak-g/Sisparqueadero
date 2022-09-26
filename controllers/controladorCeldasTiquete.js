const enviar = document.getElementById("enviar");
const prevent = document.getElementById("preventDefaul");

// prevent.addEventListener('click', function(e){
//     e.preventDefault(prevent)
// })

enviar.addEventListener('click',function(e){

    let celda = document.getElementById('celda').value;
    

    
    let objConsulta ={
        "celda":celda,
    }

    fetch('URI',{
        method: 'GET',
        Headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objConsulta)
    })
    .then((res) => {
        if(res.status == 200){
            alert(`Consuta exitosa`)
            return;
        }else{
            alert("Error en la consulta")
            return;
        }
    })
    .catch((err) =>{
        console.log(err);
        return err;
    })

    



})