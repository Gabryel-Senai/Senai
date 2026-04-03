let nomeAluno = "Fenando";
let notaAluno = 8.5;
let situacaoAluno = "Aprovado";
let resultado = notaAluno >= 7 ? "Aprovado" : "Reprovado";

const elnome = document.getElementById("nomealuno");
const elnota = document.getElementById("notaaluno");
const elsituacao = document.getElementById("situacaoaluno");
const elresultado = document.getElementById("resultado");

elnome.textContent = nomeAluno;
elnota.textContent = `Nota: ${notaAluno.toFixed(1)}`;
elsituacao.textContent = situacaoAluno;
elresultado.textContent = resultado;
