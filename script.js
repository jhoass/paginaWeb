let nomeUsuario = prompt("Gostaria de inserir seu nome?");

let mensagem = "Olá, " + nomeUsuario + " Bem vindo (a), ao nosso site!";

document.getElementById("mensagem-bem").innerText = mensagem;

function resetarPagina() {
    location.reload();
}