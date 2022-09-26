const enviar = document.getElementById("enviar");
// const prevent = document.getElementById("preventDefault");

// prevent.addEventListener('click', function(e){
//     e.preventDefault(prevent)
// })

enviar.addEventListener('click', function(e){

    let usuario = document.getElementById('usuario').value;
    let Contraseña = document.getElementById('Contraseña').value;
    let email = document.getElementById('email').value;
    

    let objUsuario ={
        "usuario":usuario,
        "contraseña": Contraseña,
        "email" : email
    }

    fetch('URI',{
        method: 'POST',
        Headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objUsuario)
    })
    .then((res) => {
        if(res.status == 200){
            alert(`Registro Exitoso`)
            window.location.href = "../ingresar.html"
            return;
        }else{
            alert("Datos Incorrectos")
            return;
        }
    })
    .catch((err) =>{
        console.log(err);
        return err;
    })
})