let elem_preloader = document.getElementById("preloader");
let elem_loader = document.getElementById("loader");
console.log("Testing... Ok");


setTimeout(function() {
  elem_preloader.classList.remove("preloader");
  elem_loader.classList.remove("loader");
  }, 1280);

  const nome = document.getElementById("nome");
const bio = document.querySelector(".bio");

const inputNome = document.getElementById("inputNome");
const inputBio = document.getElementById("inputBio");
const botao = document.getElementById("btnAtualizar");
const botaoBio = document.getElementById("btnbio");
const temaBtn = document.getElementById("temaBtn");
const cardsContainer = document.getElementById("cardsContainer");

temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

botaoBio.addEventListener("click", () => {
    const novaBio = inputBio.value;
    bio.textContent = novaBio;
});

botao.addEventListener("click", () => {
    const novoNome = inputNome.value;
    nome.textContent = novoNome;

    localStorage.setItem("nome", novoNome);
});

const nomeSalvo = localStorage.getItem("nome");
if (nomeSalvo) {
    nome.textContent = nomeSalvo;
}