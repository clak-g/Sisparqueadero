const prevent = document.getElementById("preventDefault");
const consultar = document.getElementById("consultar");
const actualizar = document.getElementById("actualizar");
prevent.addEventListener("click", function (e) {
  e.preventDefault(prevent);
});

const placa = document.getElementById("placa");
const horaIngreso = document.getElementById("horaIngreso");
const horaSalida = document.getElementById("horaSalida");

enviar.addEventListener("click", (e) => {
  let objCeldaRegistro = {
    placa: placa.value,
    horaIngreso: horaIngreso.value,
    horaSalida: horaSalida.value,
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
        window.location.href = "../ingresar.html";
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

consultar.addEventListener("click", (a) => {
  const placa = document.getElementById("placa").value;

  let objConsulta = {
    placa,
  };

  console.log("click fire")

  const getData = (data) => {
    horaIngreso.value = data.fechahoraingreso;
    horaSalida.value = data.fechahorasalida;
  };


  fetch("URI", {
    method: "GET",
    Headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objConsulta),
  })
    .then((res) => {
      if (res.status == 200) {
        alert(`Consuta exitosa`);
        return res.json();
      } else {
        alert("Error en la consulta");
      }
    })
    .then((data) => {
      // data!
      getData(data);
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
});
