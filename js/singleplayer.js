String.prototype.replaceAt = function (index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

let letraErradaOutput = document.querySelector("#letras-incorrectas");
let outputGuiones = document.querySelector("#letra-guiones");

let palabraSorteada = "";
let palabraGuiones = "";
let letrasIncorrectas = "";
let intentos = 0;

function sortearPalabra(lista) {
  let randomIndex = Math.floor(Math.random() * lista.length);
  return (palabraSorteada = lista[randomIndex].toString().toUpperCase());
}

function dibujarGuiones() {
  let palabraConvertida = palabraSorteada.replace(/[A-Z]/gm, "_ ");
  palabraGuiones = palabraConvertida;
  outputGuiones.innerHTML = palabraGuiones;
}

function verificarTecla() {
  window.addEventListener("keypress", function (e) {
    let letraPresionada = e.key;
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

function dibujarPalabra() {
  let fallo = true;
  for (const i in palabraSorteada) {
    if (letraSeleccionada == palabraSorteada[i]) {
      palabraGuiones = palabraGuiones.replaceAt(i * 2, letraSeleccionada);
      fallo = false;
    }
  }

  outputGuiones.innerHTML = palabraGuiones;

  console.log(outputGuiones.textContent);

  if (fallo) {
    dibujarPaloBase();
    comprobarLetraIncorrecta();

    if (intentos == 2) {
      dibujarPaloTop();
      letrasIncorrectas += letraSeleccionada;
    }
    if (intentos == 3) {
      dibujarPaloHead();
    }
    if (intentos == 4) {
      dibujarCabeza();
    }
    if (intentos == 5) {
      dibujarCuerpo();
    }
    if (intentos == 6) {
      dibujarBrazoIzq();
    }
    if (intentos == 7) {
      dibujarBrazoDer();
    }
    if (intentos == 8) {
      dibujarPiernaIzq();
    }
    if (intentos == 9) {
      dibujarPiernaDer();
    }
  }
}

function comprobarLetraIncorrecta() {
  if (letrasIncorrectas.includes(letraSeleccionada) == false && intentos < 9) {
    letrasIncorrectas += letraSeleccionada;
    letraErradaOutput.innerHTML += letraSeleccionada
      .replace("CapsLock", "")
      .replace("Enter", "");
    intentos++;
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "YA INGRESASTE ESA LETRA",
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

function verificarGano() {
  let palabraSorteadaIgualada = palabraSorteada.split("").join(" ") + " ";
  if (palabraSorteadaIgualada == palabraGuiones) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Felicidades Ganaste!!!!",
      showConfirmButton: false,
      timer: 2800,
    });
  }
}

function verificarPerdio() {
  if (intentos == 9) {
    Swal.fire({
      position: "center",
      text: `La palabra era ${palabraSorteada}`,
      title: "PERDISTE!!!!",
      showConfirmButton: false,
      timer: 2800,
      imageUrl: "images/gameover.png",
      imageWidth: 226,
      imageAlt: "GAME OVER",
    });

    endGame();
  }
}
