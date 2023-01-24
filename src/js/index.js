/*

objetivo 1 - quando o usuario clicar no botão de veja o trailer, devemos abrir o modal com o video do trailer
    - passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js
    - passo 2 - dar um jeito de identificar quando o usuario clicar no botão
    - passo 3 - dar um jeito de pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela

objetico 2 - quando o usuario clicar no X devemos fechar a modal
    - passo 1 - dar um jeito de pegar o elemento de fechar o moal usando o js
    - passo 2 - dar um jeito de identificar quando o usuario clicar no X
    - passo 3 - fechar o modal
*/

console.log(document);
//objetivo 1
//passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js

const botaoTrailer = document.querySelector(".botao-trailer");

// removendo som apos fechar passo 1

const video = document.getElementById("video")

// passo 3 - dar um jeito de pegar o elemento da modal no js

const modal = document.querySelector(".modal");

// link do video salvo na variavel
const linkDoVideo = video.src;

//passo 2 - dar um jeito de identificar quando o usuario clicar no botão

botaoTrailer.addEventListener("click", () => {
    // passo 4 - abrir a modal na tela
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

//objetico 2
// passo 1 - dar um jeito de pegar o elemento de fechar o moal usando o js

const botaoFecharModal = document.querySelector(".fechar-modal");

// passo 2 - dar um jeito de identificar quando o usuario clicar no X

botaoFecharModal.addEventListener("click", () => {
    // passo 3 - fechar o modal
    modal.classList.remove("aberto");
    // removendo o som apos fechar passo 2
    video.setAttribute("src", "");
});





