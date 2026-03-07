// contador namoro

function atualizarContador(){

let inicio = new Date("2025-10-25 00:00:00");
let agora = new Date();

let diff = agora - inicio;

let dias = Math.floor(diff/(1000*60*60*24));
let horas = Math.floor(diff/(1000*60*60))%24;
let minutos = Math.floor(diff/(1000*60))%60;
let segundos = Math.floor(diff/1000)%60;

let texto = dias+" dias "+horas+" horas "+minutos+" minutos "+segundos+" segundos ❤️";

let el=document.getElementById("contador");

if(el){
el.innerHTML=texto;
}

}

setInterval(atualizarContador,1000);


// corações

function criarCoracao(){

let heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(Math.random()*3+2)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}

setInterval(criarCoracao,400);


// mensagem

function mostrarMensagem(){

alert("Eu te amo muito ❤️");

}


// galeria

function abrirImagem(src){

let modal=document.getElementById("modal");

let img=document.getElementById("imgModal");

img.src=src;

modal.style.display="block";

}

function fecharImagem(){

document.getElementById("modal").style.display="none";

}


// contato

function enviarMensagem(){

let nome=document.getElementById("nome").value;

alert("Mensagem enviada! Obrigado "+nome+" ❤️");

}

document.getElementById("formContato").addEventListener("submit", function(e){

e.preventDefault();

let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let mensagem = document.getElementById("mensagem").value;

let status = document.getElementById("status");

if(nome === "" || email === "" || mensagem === ""){

status.innerHTML = "Preencha todos os campos!";
status.style.color = "red";
return;

}

status.innerHTML = "Mensagem enviada com sucesso ❤️";
status.style.color = "green";

});