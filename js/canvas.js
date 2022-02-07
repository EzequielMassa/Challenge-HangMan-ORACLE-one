const canvas = document.querySelector("#ahorcado");
const ctx = canvas.getContext("2d");

function dibujarBase() {
  ctx.beginPath();
  ctx.lineWidth = "5";
  ctx.strokeStyle = "#0A3871";
  ctx.moveTo(0, 355);
  ctx.lineTo(294, 355);
  ctx.stroke();
}
dibujarBase();

function dibujarPaloBase() {
  ctx.beginPath();
  ctx.lineWidth = "4.5";
  ctx.strokeStyle = "#0A3871";
  ctx.moveTo(80, 3);
  ctx.lineTo(80, 355);
  ctx.stroke();
}

function dibujarPaloTop() {
  ctx.beginPath();
  ctx.lineWidth = "4.5";
  ctx.strokeStyle = "#0A3871";
  ctx.moveTo(80, 5);
  ctx.lineTo(258, 5);
  ctx.stroke();
}

function dibujarPaloHead() {
  ctx.beginPath();
  ctx.lineWidth = "4.5";
  ctx.strokeStyle = "#0A3871";
  ctx.moveTo(258, 3);
  ctx.lineTo(258, 55);
  ctx.stroke();
}

function dibujarCabeza() {
  ctx.beginPath();
  ctx.arc(258, 85, 30, 0, 2 * 3.14);
  ctx.lineWidth = "4.5";
  ctx.moveTo(258, 3);
  ctx.stroke();
}

function dibujarCuerpo() {
  ctx.beginPath();
  ctx.lineWidth = "4.5";
  ctx.strokeStyle = "#0A3871";
  ctx.moveTo(258, 115);
  ctx.lineTo(258, 255);
  ctx.stroke();
}

function dibujarBrazoIzq() {
  ctx.beginPath();
  ctx.lineWidth = "4.5";
  ctx.strokeStyle = "#0A3871";
  ctx.moveTo(258, 115);
  ctx.lineTo(226, 175);
  ctx.stroke();
}

function dibujarBrazoDer() {
  ctx.beginPath();
  ctx.lineWidth = "4.5";
  ctx.strokeStyle = "#0A3871";
  ctx.moveTo(258, 115);
  ctx.lineTo(290, 175);
  ctx.stroke();
}

function dibujarPiernaIzq() {
  ctx.beginPath();
  ctx.lineWidth = "4.5";
  ctx.strokeStyle = "#0A3871";
  ctx.moveTo(258, 254);
  ctx.lineTo(226, 315);
  ctx.stroke();
}

function dibujarPiernaDer() {
  ctx.beginPath();
  ctx.lineWidth = "4.5";
  ctx.strokeStyle = "#0A3871";
  ctx.moveTo(258, 254);
  ctx.lineTo(290, 315);
  ctx.stroke();
}
