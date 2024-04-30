let btn = document.getElementById("btn");
let intentos=document.getElementById("intentos");
let contador=0;
btn.addEventListener("click", function comprobar() {
    contador++;
    intentos.innerHTML = contador;
  let text = document.getElementById("mensaje");
  let inpu = document.getElementById("numero").value;
  let random = Math.floor(Math.random() * 10) + 1;
  if (parseInt(inpu) == random) {
    text.innerHTML = "¡Has acertado!";
    text.style.color = "green";
  } else {
    text.innerHTML = "¡Has fallado!";
    text.style.color = "red";
  }
});
