const singlePlayerBtn = document.querySelector("#single-player-btn");
const multiPlayerBtn = document.querySelector("#multi-player-btn");
const BTNS = document.querySelector(".main-btns-container");
const TABLERO = document.querySelector(".tablero");
const NEWSPGAME = document.querySelector("#new-game-btn");
const NEWMPGAME = document.querySelector("#newmp-game-btn");
const ENDGAME = document.querySelector("#end-game-btn");
const MENUBTN = document.querySelector("#main-menu-btn");
const FORM = document.querySelector("#form-container");
const INPUT = document.querySelector("#input-main");
const SENDBTN = document.querySelector("#palabra-send");
const CANCELBTN = document.querySelector("#cancel");
const MOBILEINPUT = document.querySelector("#mobile-input");

singlePlayerBtn.addEventListener("click", function () {
  if (window.matchMedia("(min-width: 600px)").matches) {
    ventanaJuegosp();
    sortearPalabra(LISTAPALABRAS);
    dibujarGuiones();
    verificarTecla();
    console.log(palabraSorteada);
  } else {
    ventanaJuegospMobile();
    sortearPalabra(LISTAPALABRAS);
    dibujarGuiones();
    verificarTeclaMobile();
    console.log(palabraSorteada);
  }
});

multiPlayerBtn.addEventListener("click", function (e) {
  ventanaJuegomp();
});

NEWSPGAME.addEventListener("click", function () {
  resetsp();
});

NEWMPGAME.addEventListener("click", function () {
  resetmp();
});

ENDGAME.addEventListener("click", function () {
  endGame();
});

MENUBTN.addEventListener("click", function () {
  document.location.reload(true);
});
