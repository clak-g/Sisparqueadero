const enviar = document.getElementById("enviar");
const prevent = document.getElementById("preventDefaul");

// prevent.addEventListener('click', function(e){
//     e.preventDefault(prevent)
// })

enviar.addEventListener('click',function(e){

    let usuario = document.getElementById('usuario').value;
    let Contraseña = document.getElementById('Contraseña').value;

    console.log(usuario);
    console.log(Contraseña);
    
    let objLogin ={
        "usuario":usuario,
        "contraseña": Contraseña
    }

    fetch('localhost:5000/api/admin',{
        method: 'GET',
        Headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objLogin)
    })
    .then((res) => {
        if(res.status == 200){
            alert(`Bievenido ${usuario}`)
            window.location.href = "../formularioCeldas.html"
            return;
        }else{
            alert("Usuario incorrecto o no registrado")
            return;
        }
    })
    .catch((err) =>{
        console.log(err);
        return err;
    })
})