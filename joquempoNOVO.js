const $pedra = document.querySelector(".botao-pedra");
const $papel = document.querySelector(".botao-papel");
const $tesoura = document.querySelector('.botao-tesoura');
const $resultado = document.querySelector('.vencedor');
const $campo1 = document.querySelector('.campo1');
const $campo2 = document.querySelector('.campo2');
const $placar1 = document.querySelector('.jogador');
const $placar2 = document.querySelector('.bot');
const $reiniciar = document.querySelector('.botao-reiniciar');


const opcao = ["pedra", "papel", "tesoura"]

let jogadaJogador;
let jogadaBot;
let resultado;
let pontuacaoJogador1 = 0;
let pontuacaoJogador2 = 0;

function bot() {
    const random = Math.floor(Math.random() * 3);
    jogadaBot = opcao[random];
}


function checarVencedor(jogadaJogador, jogadaBot) {
    if (jogadaJogador == opcao[0] && jogadaBot == opcao[2] ||
        jogadaJogador == opcao[1] && jogadaBot == opcao[0] ||
        jogadaJogador == opcao[2] && jogadaBot == opcao[1]) {
        resultado = 0;
        pontuacaoJogador1++;

    } else if (jogadaJogador == jogadaBot) {
        resultado = 1;
    } else {
        resultado = 2;
        pontuacaoJogador2++;

    }
}

$pedra.addEventListener('click', function (event) {
        jogadaJogador = opcao[0];
        bot();
        escolheIcone();
        checarVencedor(jogadaJogador, jogadaBot)
        atribuirPontos();
        mostrarResultado();

})
$papel.addEventListener('click', function (event) {
    jogadaJogador = opcao[1];
    bot();
    checarVencedor(jogadaJogador, jogadaBot);
    escolheIcone();
    mostrarResultado();
    atribuirPontos();
})
$tesoura.addEventListener('click', function (event) {
    jogadaJogador = opcao[2];
    bot();
    checarVencedor(jogadaJogador, jogadaBot);
    escolheIcone();
    mostrarResultado();
    atribuirPontos();
})

function mostrarResultado() {
    if (resultado == 0) {
        $resultado.innerHTML = "Você ganhou!";

    } else if (resultado == 1) {
        $resultado.innerHTML = "Empatou!";
    } else {
        $resultado.innerHTML = "O BOT ganhou!";

    }
}



function escolheIcone() {
    $campo1.innerHTML = mostraIcone(jogadaJogador);
    $campo2.innerHTML = mostraIcone(jogadaBot);
}

function mostraIcone(jogada) {
    if (jogada == opcao[0]) {
        return '<img src="pedra.png">';
    } else if (jogada == opcao[1]) {
        return '<img src="papel.png">';
    } else {
        return '<img src="tesoura.png">';
    }
}

$reiniciar.addEventListener('click', function(event){
    pontuacaoJogador1 = 0;
    pontuacaoJogador2 = 0;
})


// const raul = document.querySelector('.raul2')

// let marcado = false;

// raul.addEventListener('click',function(e){
//     raul.classList.toggle('raul-marked')
//     if(marcado){
//         marcado = false
//     }else{
//         marcado = true
//     }

// })





function atribuirPontos(){
    $placar1.innerHTML = pontuacaoJogador1;
    $placar2.innerHTML = pontuacaoJogador2;
}

