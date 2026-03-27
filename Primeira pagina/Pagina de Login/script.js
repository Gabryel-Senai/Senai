let elem_preloader = document.getElementById("preloader");
let elem_loader = document.getElementById("loader");
console.log("Testing... Ok");


setTimeout(function() {
  elem_preloader.classList.remove("preloader");
  elem_loader.classList.remove("loader");
  }, 1280);

function toggleForms() {
    document.getElementById('login').classList.toggle('active');
    document.getElementById('registro').classList.toggle('active');
}
function toggleForms() {
    document.getElementById('login').classList.toggle('active');
    document.getElementById('registro').classList.toggle('active');
}

function entrar() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    alert(`Login com email: ${email} e senha: ${password}`);
}

function registrar() {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    alert(`Registro com nome: ${name}, email: ${email} e senha: ${password}`);
}

function registrar() {
    alert('Registro realizado com sucesso!');
    toggleForms();
}


function entrar() {
    window.location.href = '../Primeira pagina/index.html';
}
