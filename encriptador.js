const d = document;

const textArea = d.querySelector('.form__input');
const imagenMuneco = d.querySelector('.result__img');
const loaderIcono = d.querySelector('.loader');
const resultadoTituto = d.querySelector('.result__title');
const resultadoTexto = d.querySelector('.result__text');
const botonEncriptar = d.querySelector('.form__btn');
const botonDesenncriptar = d.querySelectorAll('.form__btn');
const botonCopiar = d.querySelector('.result__btn');

const llaves = [
  ["e", "enter"],
  ["i", "ines"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function encriptarmensaje(mensaje) {
  let mensajeEncriptado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje[i];
    let encriptada = letra;

      for (let j = 0; j < llaves.length; j++) {
      if (letra == llaves[j][0]) {
        encriptada = llaves[j][1]; // Reemplaza la letra por su equivalente encriptado
        break; // Termina el bucle cuando se encuentra la correspondencia
      }
    }
    mensajeEncriptado += encriptada;
  }
  return mensajeEncriptado;
}
encriptarmensaje("hola");


function desencriptarmensaje(mensaje){
  let mensajeDesencriptado = mensaje;
  for(let i = 0; i< llaves.length;i++){
    let regex = new RegExp(llaves[i][1], 'g');
    mensajeDesencriptado = mensajeDesencriptado.replace(regex,llaves[i][0]);
  }
  return mensajeDesencriptado;
}

textArea.addEventListener("input",(e) =>{
  imagenMuneco.style.display = "none";
  loaderIcono.classList.remove('hidden');
  resultadoTituto.textContent = "Capturando mensaje";
  resultadoTexto.textContent = "";
});


botonEncriptar.addEventListener("click",(e) =>{
  e.preventDefault();


  let mensaje = textArea.value.toLowerCase();
  let mensajeEncriptado = encriptarmensaje(mensaje);
  resultadoTexto.textContent = mensajeEncriptado;
  botonCopiar.classList.remove('hidden');
  resultadoTituto.textContent = "El resultado es";


});


botonDesenncriptar[1].addEventListener("click",(e) =>{
  e.preventDefault();

  let mensaje = textArea.value.toLowerCase();
  let mensajeDesencriptado = desencriptarmensaje(mensaje);
  resultadoTexto.textContent = mensajeDesencriptado;
  resultadoTituto.textContent = "El resultado es";
  botonCopiar.classList.remove('hidden');
 

});

botonCopiar.addEventListener("click",() => {
  let textoCopiado = resultadoTexto.textContent;
  navigator.clipboard.writeText(textoCopiado).then(()=>{
    imagenMuneco.style.display = "block";
    loaderIcono.classList.add("hidden");
    resultadoTituto.textContent = "El texto se copio";
    botonCopiar.classList.add("hidden");
    resultadoTexto.textContent = "";
  })
})