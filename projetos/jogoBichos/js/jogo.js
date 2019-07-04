var btA = document.getElementById('btA')
var btB = document.getElementById('btB')
var btC = document.getElementById('btC')
var btD = document.getElementById('btD')
var parabens = document.getElementById('parabens')
var pena = document.getElementById('pena')
var capa = document.getElementById('capa')
var tentativas = document.getElementById('tentativas')
var nivel = document.getElementById('nivel')
var mensagemNivel = document.getElementById('mensagemNivel')

var audioA = document.getElementById('audioA')
var audioB = document.getElementById('audioB')
var audioC = document.getElementById('audioC')
var audioD = document.getElementById('audioD')

var turnoJogador = false;

var memo = [] //memória do jogo
var memoJogador = [] //memória do jogador

function sortear(){
  setTimeout(sortearV, 1000);
  parabens.classList.remove('revelar')
  pena.classList.remove('revelar')
  capa.classList.remove('revelar')
}

function sortearV(){ //Sorteia as entradas e coloca na memória do jogo
  if (!turnoJogador) {
    var x = Math.floor((Math.random()*4)+1)
    memo.push(x)
    for (var i = 0; i < memo.length; i++) {
      (function(i){
        setTimeout(function(){
          retornoSelec(memo[i])
        }, 1000*i)
      })(i)
    }
     // retornoSelec(x)
    turnoJogador = true

    tentativas.innerHTML = `Faltam ${memo.length - memoJogador.length} tentativas.`
    nivel.innerHTML = `Nível ${memo.length}`
  } else {
    console.log("espere terminar as tentativas");
  }
}

function botPress(id){ //identifica o botão pressionado
  if (turnoJogador) {
    switch (id) {
      case 1:
      memoJogador.push(1)
      retornoSelec(1)
      break;
      case 2:
      memoJogador.push(2)
      retornoSelec(2)
      break;
      case 3:
      memoJogador.push(3)
      retornoSelec(3)
      break;
      case 4:
      memoJogador.push(4)
      retornoSelec(4)
      break;
      default:

    }
    comparar()
  }
}

function comparar(){
  var ganhou
  if (memo.length == memoJogador.length) {
    for (var i = 0 ; i < memo.length ; i++){
      if (memo[i] == memoJogador[i]) {
        ganhou = true
      } else {
        ganhou = false
      }
    }
    memoJogador = []
    turnoJogador = false
    if (ganhou) {
      parabens.classList.add('revelar')//mostrar tela de Parabéns
    } else {
      mensagemNivel.innerHTML = `Você chegou ao nível ${memo.length}`
      memo = []
      pena.classList.add('revelar')//mostrar tela para tentar de novo
    }
  } else {
    tentativas.innerHTML = `Faltam ${memo.length - memoJogador.length} tentativas.`
  }
}
function retornoSelec(id){//retorno visual e sonoro da escolha
  switch (id) {
    case 1:
      piscarInicio(btA)
      audioA.pause();
      audioA.currentTime = 0;
      audioA.play()
      break;
    case 2:
      piscarInicio(btB)
      audioB.pause();
      audioB.currentTime = 0;
      audioB.play()
      break;
    case 3:
      piscarInicio(btC)
      audioC.pause();
      audioC.currentTime = 0;
      audioC.play()
      break;
    case 4:
      piscarInicio(btD)
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play()
      break;
    default:

  }
}
//Estas duas funções colocam o brilho no elemento escolhido
function piscarInicio(elemento){
  elemento.classList.add('escolhido')
  setTimeout(function(){piscarFim(elemento)}, 1000)
}
function piscarFim(elemento){
  elemento.classList.remove('escolhido')
}
