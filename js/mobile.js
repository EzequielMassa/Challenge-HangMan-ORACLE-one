// if(window.matchMedia("(min-width: 600px)").matches) {

// singlePlayerBtn.addEventListener("click", function () {
//   ventanaJuegosp();
//   sortearPalabra(LISTAPALABRAS);
//   dibujarGuiones();
//   verificarTecla();
//   console.log(palabraSorteada);
// });
// }
function ventanaJuegospMobile() {
  BTNS.classList.add("hide");
  TABLERO.classList.remove("hide");
  NEWSPGAME.classList.remove("hide");
  NEWMPGAME.classList.add("hide");
  MOBILEINPUT.classList.remove("hide");
}

function verificarTeclaMobile() {
  MOBILEINPUT.addEventListener("input", function (e) {
    setTimeout(() => {
      MOBILEINPUT.value = "";
    }, 200);
    let letraPresionada = e.data;
    letraSeleccionada = letraPresionada;
    let padron = /[A-Z]/g;
    let resultadoPadron = padron.test(letraPresionada);

    if (resultadoPadron != true) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "INGRESE LETRAS EN MAYUSCULAS",
        showConfirmButton: false,
        timer: 1400,
      });
    } else {
      dibujarPalabra();
      verificarGano();
      verificarPerdio();
    }
  });
}
