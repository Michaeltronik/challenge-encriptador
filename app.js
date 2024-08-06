let valido = true;
function validarTexto(texto) {
  const regex = /^[a-z\s]*$/; //expresion regular solo minusculas y espacios
  return regex.test(texto);
}

function encriptarTexto() {
  let texto = document.getElementById("inputText").value.trim(); //elimina espacios al inicio y final y obtiene el texto ingresado

  if (texto === "") {
    alert("Lo siento, no se ha detectado un texto");
    verificarEntradaDeTexto();
    return;
  }
  if (validarTexto(texto)) {
    let encriptacion = "";
    for (let i = 0; i < texto.length; i++) {
      let letra = texto[i];
      switch (letra) {
        case "a":
          letra = "ai";
          break;
        case "e":
          letra = "enter";
          break;
        case "i":
          letra = "imes";
          break;
        case "o":
          letra = "ober";
          break;
        case "u":
          letra = "ufat";
          break;
      }
      encriptacion += letra;
    }
    actualizarIntefaz();
    //document.getElementById('inputText').value='';

    valido = true;
    return encriptacion;
  } else {
    alert(
      "Por favor ingrese un texto válido, solo se aceptan minusculas sin acentos"
    );
    valido = false;
    verificarEntradaDeTexto();
  }
}
function encriptarYMostrarResultado() {
  let outputText = document.getElementById("outputText");
  let textoEncriptado = encriptarTexto();
  // console.log(textoEncriptado);
  outputText.value = textoEncriptado;
}
function desencriptarTexto() {
  let texto = document.getElementById("inputText").value.trim();
  if (texto === "") {
    alert("Lo siento, no se ha detectado un texto");
    verificarEntradaDeTexto();
    return;
  }
  if (validarTexto(texto)) {
    let textoDesencriptado;
    textoDesencriptado = texto.replaceAll("enter", "e");
    textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
    textoDesencriptado = textoDesencriptado.replaceAll("ai", "a");
    textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
    textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");
    // document.getElementById('inputText').value='';

    actualizarIntefaz();
     valido=true;
    return textoDesencriptado;
  } else {
    alert(
      "Por favor ingrese un texto valido,solo se aceptan minusculas sin acentos"
    );
    valido = false;
    verificarEntradaDeTexto();
    return;
  }
}
function desencriptarYMostrarResultado() {
  let outputText = document.getElementById("outputText");
  let textoDesencriptado = desencriptarTexto();
  // console.log("Resultado desencriptado:", textoDesencriptado);
  outputText.value = textoDesencriptado;
}
//validar si el textarea esta en blanco para mostrar la imagen
function verificarEntradaDeTexto() {
  let texto = document.getElementById("inputText").value;
  let outputText = document.getElementById("outputText");
  let textoEstado = document.getElementById("mensajeNoEncontrado");
  let solicitudTexto = document.getElementById("escribeTexto");
  let img = document.getElementById("imagenSalida");

  let botonCopiar = document.getElementById("copiar");
  let botonBorrar = document.getElementById("borrar");

  if (texto.trim() === "" || valido == false) {
    img.style.display = "block";
    textoEstado.style.display = "block";
    solicitudTexto.style.display = "block";
    outputText.style.display = "none";
    botonCopiar.style.display = "none";
    botonBorrar.style.display = "none";
    outputText.value = "";
  }
}
function limpiarTexto() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").value = "";
  verificarEntradaDeTexto();
}
async function copiarTexto() {
  try {
    let texto = document.getElementById("outputText");
    await navigator.clipboard.writeText(texto.value);
  } catch (err) {
    console.error("Error al copiar al portapapeles:", err);
  }
}
// si se ha encriptado texto, muestra el resultado y quita la imagen y habilita los botones de copiar y limpiar
function actualizarIntefaz() {
  let textoEstado = document.getElementById("mensajeNoEncontrado");
  let solicitudTexto = document.getElementById("escribeTexto");
  let img = document.getElementById("imagenSalida");
  let botonCopiar = document.getElementById("copiar");
  let botonBorrar = document.getElementById("borrar");

  img.style.display = "none";
  textoEstado.style.display = "none";
  solicitudTexto.style.display = "none";
  outputText.style.display = "block";
  botonCopiar.style.display = "block";
  botonBorrar.style.display = "block";
}
