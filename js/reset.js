function resetsp() {
  sortearPalabra(LISTAPALABRAS);
  dibujarGuiones();
  ctx.clearRect(0, 0, 294, 353);
  letraErradaOutput.innerHTML = "";
  letrasIncorrectas = "";
  intentos = 0;
}

function resetmp() {
  document.location.reload(true);
}
