const btnUm = document.getElementById("send-form-1");

let verificacaoUm = /^(?=.*\d)(?=.*[a-z | A-Z])(?:([0-9a-zA-Z])(?!\1)){6,}$/;

btnUm.addEventListener("click", validaSenhaUm);

function validaSenhaUm(e) {
  let senhaUm = document.getElementById("senha-1").value;
  // console.log(verificacaoUm.test(senhaUm));
  if (verificacaoUm.test(senhaUm) == true) {
    window.alert("Senha 1 Válida!");
  } else {
    window.alert("Senha 1 inválida!");
  }
  e.preventDefault;
}

// Verificação 2 : 8  min caracateres, uma letra, um número e um car. especial

const btnDois = document.getElementById("send-form-2");

let verificacaoDois =
  /^(?=.*\d)(?=.*[a-z | A-Z])(?=.*[$*&@#%])(?:([0-9a-zA-Z$*&@#%])(?!\1)){8,}$/;

btnDois.addEventListener("click", validaSenhaDois);

function validaSenhaDois(e) {
  let senhaDois = document.getElementById("senha-2").value;
  // console.log(verificacaoDois.test(senhaDois));
  if (verificacaoDois.test(senhaDois) == true) {
    window.alert("Senha 2 Válida!");
  } else {
    window.alert("Senha 2 inválida!");
  }
  e.preventDefault;
}

// Verificação 3 : 6 a 10  min caracateres, uma letra minúscula e uma Maiúscula, um número e um car. especial

const btnTres = document.getElementById("send-form-3");

let verificacaoTres =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#%])(?:([0-9a-zA-Z$*&@#%])(?!\1)){6,10}$/;

btnTres.addEventListener("click", validaSenhaTres);

function validaSenhaTres(e) {
  let senhaTres = document.getElementById("senha-3").value;
  // console.log(verificacaoTres.test(senhaTres));
  if (verificacaoTres.test(senhaTres) == true) {
    window.alert("Senha 3 Válida!");
  } else {
    window.alert("Senha 3 inválida!");
  }
  e.preventDefault;
}
