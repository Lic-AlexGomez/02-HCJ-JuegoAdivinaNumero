let btn = document.getElementById("btn");
let intentos=document.getElementById("intentos");
let contador=0;
btn.addEventListener("click", function comprobar() {
    contador++;
    intentos.innerHTML = contador;
  let text = document.getElementById("mensaje");
  let inpu = document.getElementById("numero").value;
  let random = Math.floor(Math.random() * 10) + 1;
  parseInt(inpu);
  if (inpu > 10) {
    text.innerHTML = "El número debe ser menor que 10";
    text.style.color = "red";
  }else if (inpu < 0) {
    text.innerHTML = "El número debe ser mayor que 0";
    text.style.color = "red";
    
  }if (inpu < " ") {
    text.innerHTML = "No puede estar vacio";
    text.style.color = "red";
    
  }  else if (inpu == random) {
    text.innerHTML = "¡Has acertado!";
    text.style.color = "green";
    btn.style.display = "none";
    setTimeout(function(){

        location.reload(); 
        let field= document.getElementById('numero');
        field.value= field.defaultValue; 
    }
   ,5000);

  } else {
    text.innerHTML = "¡Has fallado!";
    text.style.color = "red";
  }
});
