var l1 = document.getElementById('label1');
var l2 = document.getElementById('label2');
var l3 = document.getElementById('label3');
var l4 = document.getElementById('label4');
const boton =document.getElementById('btn');
const inputs = document.querySelectorAll('input');
const textarea = document.getElementById('mensagem');

inputs.forEach(input => {
  input.onfocus = function () {
    input.previousElementSibling.classList.add('focus');
    input.parentElement.classList.add('focus')
    input.previousElementSibling.classList.remove('top');
    input.parentElement.classList.remove('top');
    input.previousElementSibling.classList.remove('error');
    input.parentElement.classList.remove('error');
    input.parentElement.querySelector(".input-message-error").innerHTML = ""
  }
  input.onblur = function () {
    if (input.value == "") {
      input.previousElementSibling.classList.remove('focus');
      input.parentElement.classList.remove('focus');
      valida(input);
    } else {
      if (valida(input)) {
        input.previousElementSibling.classList.remove('focus');
        input.parentElement.classList.remove('focus');
        input.previousElementSibling.classList.remove('top');
        input.parentElement.classList.remove('top');
      } 
      botonn(l1,l2,l3,l4)
    }

  }
});

textarea.onfocus = function () {
  textarea.previousElementSibling.classList.add('focus');
  textarea.parentElement.classList.add('focus')
  textarea.previousElementSibling.classList.remove('top');
  textarea.parentElement.classList.remove('top');
  textarea.previousElementSibling.classList.remove('error');
  textarea.parentElement.classList.remove('error')
  textarea.parentElement.classList.remove('error');
  textarea.parentElement.querySelector(".input-message-error").innerHTML = ""

}

textarea.onblur = function () {
  valida(textarea);
  if (textarea.value == "") {
    textarea.previousElementSibling.classList.remove('focus');
    textarea.parentElement.classList.remove('focus')
  } else {
    textarea.previousElementSibling.classList.add('top');
    textarea.parentElement.classList.add('top')
  }
  botonn(l1,l2,l3,l4)
}


function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  console.log(tipoDeInput);
 
  if (input.validity.valid) {
    input.previousElementSibling.classList.remove('error');
    input.parentElement.classList.remove('error');
    input.previousElementSibling.classList.add('top');
    input.parentElement.classList.add('top');
    input.previousElementSibling.classList.remove('focus');
    input.parentElement.classList.remove('focus');
  } else {
    input.previousElementSibling.classList.remove('focus');
    input.parentElement.classList.remove('focus');
    input.previousElementSibling.classList.add('error');
    input.parentElement.classList.add('error');
    input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
]


const mensajesDeError = {
  nombre: {
    valueMissing: "El nombre no puede estar vacío",
  },
  email: {
    valueMissing: "El correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  asunto: {
    valueMissing: "El asunto no puede estar vacío",
  },
  mensaje: {
    valueMissing: "El mensaje no puede estar vacío",
  },
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

function botonn(l1,l2,l3,l4) {
  if (l1.classList.contains('top') && l2.classList.contains('top') && l3.classList.contains('top') && l4.classList.contains('top')) {
    console.log("siiiiiiiiiiiii");
    boton.classList.remove('disable');
    boton.disabled=false;
  }else{
    console.log("nooooooooooooo")
  }
}

