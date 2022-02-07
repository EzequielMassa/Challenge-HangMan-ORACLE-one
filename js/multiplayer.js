SENDBTN.addEventListener("click", function (e) {
  e.preventDefault;
  palabraSorteada = INPUT.value;
  INPUT.focus();
  let pattern = /[^A-Z]/g;
  let patternResult = pattern.test(palabraSorteada);
  if (patternResult == false) {
    dibujarGuiones();
    mostrarTableroJuego();
    verificarTecla();
    verificarTeclaMobile();
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "INGRESE SOLO LETRAS EN MAYUSCULAS",
      showConfirmButton: false,
      timer: 2000,
    });
    e.preventDefault;
    INPUT.value = "";
    INPUT.focus();
    INPUT.select();
  }
});

CANCELBTN.addEventListener("click", function () {
  document.location.reload(true);
});
