var radio1 = document.getElementById("preguntaradio1");

function validateForm() {
/* Validacion texto */
if(document.getElementById("pregunta1text").value == ""){
        alert("Debes rellenar todos los campos");
        document.getElementById("pregunta1text").focus();
        return false;
}
/* Validacion texto */
if(document.getElementById("pregunta2text").value == ""){
        alert("Debes rellenar todos los campos");
        document.getElementById("pregunta2text").focus();
        return false;
}
/* Validacion multiple */
if(document.getElementById("pregunta5multiple").value == ""){
        alert("Debes rellenar todos los campos");
        document.getElementById("pregunta5multiple").focus();
        return false;
}
/* Validacion multiple */
if(document.getElementById("pregunta6multiple").value == ""){
        alert("Debes rellenar todos los campos");
        document.getElementById("pregunta6multiple").focus();
        return false;
}
/* Validacion radio */
if(!radio1.checked){
        alert("Debes rellenar todos los campos");
        return false;
}
/* Validacion checkbox */
var opciones = document.getElementById("radio1");
 
var seleccionado = false;
for(var i=0; i<opciones.length; i++) {    
  if(opciones[i].checked) {
    seleccionado = true;
    break;
  }
}
 
if(!seleccionado) {
  return false;
}
}

