const $pedra = document.querySelector('.botao-pedra');
const $papel = document.querySelector('.botao-papel');
const $tesoura = document.querySelector('.botao-tesoura');
const $campo1 = document.querySelector('.jogador1');
const $campo2 = document.querySelector('.jogador2');
const $vencedor = document.querySelector('.vencedor');

const opcoes = ['pedra', 'papel', 'tesoura'];
let jogada;
let jogadaRobo;

function robo() {
  let random = Math.floor(Math.random() * 3);
  jogadaRobo = opcoes[random];
}

function checarVencedor(jogada1, jogada2) {
  if (
    (jogada1 == opcoes[0] && jogada2 == opcoes[2]) ||
    (jogada1 == opcoes[1] && jogada2 == opcoes[0]) ||
    (jogada1 == opcoes[2] && jogada2 == opcoes[1])
  ) {
    $vencedor.innerHTML = 'Jogador 1';
  } else if (jogada1 == jogada2) {
    $vencedor.innerHTML = 'Empate!';
  } else {
    $vencedor.innerHTML = 'Jogador 2';
  }
}
function mostrarResultado() {
  $campo1.innerHTML = escolheIcone(jogada);
  $campo2.innerHTML = escolheIcone(jogadaRobo);
}
function escolheIcone(jogada) {
  if (jogada == opcoes[0]) {
    return '<img src="pedra.png">';
  }
  if (jogada == opcoes[1]) {
    return '<img src="papel.png">';
  }
  if (jogada == opcoes[2]) {
    return '<img src="tesoura.png">';
  }
}

$pedra.addEventListener('click', function(event) {
  jogada = opcoes[0];
  robo();
  mostrarResultado();
  checarVencedor(jogada, jogadaRobo);
});

$papel.addEventListener('click', function(event) {
  jogada = opcoes[1];
  robo();
  mostrarResultado();
  checarVencedor(jogada, jogadaRobo);
});

$tesoura.addEventListener('click', function(event) {
  jogada = opcoes[2];
  robo();
  mostrarResultado();
  checarVencedor(jogada, jogadaRobo);
});
