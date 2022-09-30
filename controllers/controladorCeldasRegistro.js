const prevent = document.getElementById("preventDefault");
const consultar = document.getElementById("consultar")
const actualizar = document.getElementById("actualizar")
prevent.addEventListener('click', function(e){
    e.preventDefault(prevent)
})

enviar.addEventListener("click", (e) => {
  const placa = document.getElementById("placa").value;
  const horaIngreso = document.getElementById("horaIngreso").value;
  const horaSalida = document.getElementById("horaSalida").value;
  
  let objCeldaRegistro = {
    placa: placa,
    horaIngreso: horaIngreso,
    horaSalida: horaSalida,
  };

  fetch("URI", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objCeldaRegistro),
  })
    .then((res) => {
      if (res.status == 200) {
        alert(`Celda Registrada`);
        window.location.href = "../.html";
        return;
      } else {
        alert("Error al crear la celda");
        return;
      }
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
});

consultar.addEventListener('click',(a)=>{

  const placa = document.getElementById("placa").value;
  
  
  

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
let objConsulta = {
  placa: objConsulta.placa,
  horaIngreso: objConsulta.horaIngreso,
  horaSalida: objConsulta.horaSalida,
};



})



//RENDERIZAR TODA LA CONSULTA CON LOS DATOS