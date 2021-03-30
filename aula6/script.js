var pJogada = '';
var bJogada = '';
var player = { vitorias: 0, derrotas: 0, empates: 0, pontos: 0 };
var bot = { vitorias: 0, derrotas: 0, empates: 0, pontos: 0 };
var players = [player, bot];

function jogar(valor) {
  let pRes = document.getElementById('res-player');
  let bRes = document.getElementById('res-bot');
  let div_pRes = document.getElementById('div-res-player');
  let div_bRes = document.getElementById('div-res-bot');
  let bValor = 0;

  if (valor == 'pedra') {
    pJogada = 'pedra';
    pRes.className = 'fas fa-hand-rock fa-4x';
  } else if (valor == 'papel') {
    pJogada = 'papel';
    pRes.className = 'fas fa-hand-paper fa-4x';
  } else if (valor == 'tesoura') {
    pJogada = 'tesoura';
    pRes.className = 'fas fa-hand-scissors fa-4x';
  }

  bValor = Math.floor(Math.random() * 3);

  if (bValor == 0) {
    bjogada = 'pedra';
    bRes.className = 'fas fa-hand-rock fa-4x';
  } else if (bValor == 1) {
    bjogada = 'papel';
    bRes.className = 'fas fa-hand-paper fa-4x';
  } else if (bValor == 2) {
    bjogada = 'tesoura';
    bRes.className = 'fas fa-hand-scissors fa-4x';
  }

  switch (pJogada) {
    case 'pedra':
      if (bjogada == 'pedra') {
        //empatar
        div_bRes.style.boxShadow = '1px 10px 0px rgb(229, 255, 0)'; //amarelo bot
        div_pRes.style.boxShadow = '1px 10px 0px rgb(229, 255, 0)'; //amarelo player

        bot.empates++;
        player.empates++;
        calcular(players);
      } else if (bjogada == 'papel') {
        //bot ganha
        div_bRes.style.boxShadow = '1px 10px 0px rgb(94, 255, 0)'; //verde bot
        div_pRes.style.boxShadow = '1px 10px 0px rgb(255, 0, 0)'; //vermelho player

        bot.vitorias++;
        player.derrotas++;
        calcular(players);
      } else if (bjogada == 'tesoura') {
        //player ganha
        div_bRes.style.boxShadow = '1px 10px 0px rgb(255, 0, 0)'; //vermelho bot
        div_pRes.style.boxShadow = '1px 10px 0px rgb(94, 255, 0)'; //verde player

        bot.derrotas++;
        player.vitorias++;
        calcular(players);
      }
      break;
    case 'papel':
      if (bjogada == 'pedra') {
        //player ganha
        div_bRes.style.boxShadow = '1px 10px 0px rgb(255, 0, 0)'; //vermelho bot
        div_pRes.style.boxShadow = '1px 10px 0px rgb(94, 255, 0)'; //verde player

        bot.derrotas++;
        player.vitorias++;
        calcular(players);
      } else if (bjogada == 'papel') {
        //empatar
        div_bRes.style.boxShadow = '1px 10px 0px rgb(229, 255, 0)'; //amarelo bot
        div_pRes.style.boxShadow = '1px 10px 0px rgb(229, 255, 0)'; //amarelo player

        bot.empates++;
        player.empates++;
        calcular(players);
      } else if (bjogada == 'tesoura') {
        //bot ganha
        div_bRes.style.boxShadow = '1px 10px 0px rgb(94, 255, 0)'; //verde bot
        div_pRes.style.boxShadow = '1px 10px 0px rgb(255, 0, 0)'; //vermelho player

        bot.vitorias++;
        player.derrotas++;
        calcular(players);
      }
      break;
    case 'tesoura':
      if (bjogada == 'pedra') {
        //bot ganha
        div_bRes.style.boxShadow = '1px 10px 0px rgb(94, 255, 0)'; //verde bot
        div_pRes.style.boxShadow = '1px 10px 0px rgb(255, 0, 0)'; //vermelho player

        bot.vitorias++;
        player.derrotas++;
        calcular(players);
      } else if (bjogada == 'papel') {
        //player ganha
        div_bRes.style.boxShadow = '1px 10px 0px rgb(255, 0, 0)'; //vermelho bot
        div_pRes.style.boxShadow = '1px 10px 0px rgb(94, 255, 0)'; //verde player

        bot.derrotas++;
        player.vitorias++;
        calcular(players);
      } else if (bjogada == 'tesoura') {
        //empatar
        div_bRes.style.boxShadow = '1px 10px 0px rgb(229, 255, 0)'; //amarelo bot
        div_pRes.style.boxShadow = '1px 10px 0px rgb(229, 255, 0)'; //amarelo player

        bot.empates++;
        player.empates++;
        calcular(players);
      }
      break;
  }
}

function calcular(p) {
  let pVitorias = document.getElementById('player-vitorias');
  let pDerrotas = document.getElementById('player-derrotas');
  let pEmpates = document.getElementById('player-empates');
  let pPontos = document.getElementById('player-pontos');
  let bVitorias = document.getElementById('bot-vitorias');
  let bDerrotas = document.getElementById('bot-derrotas');
  let bEmpates = document.getElementById('bot-empates');
  let bPontos = document.getElementById('bot-pontos');

  p[0].pontos = p[0].vitorias * 3 + p[0].empates;
  p[1].pontos = p[1].vitorias * 3 + p[1].empates;

  pVitorias.innerHTML = `Vitórias: ${p[0].vitorias}`;
  pDerrotas.innerHTML = `Derrotas: ${p[0].derrotas}`;
  pEmpates.innerHTML = `Empates: ${p[0].empates}`;
  pPontos.innerHTML = `Pontos: ${p[0].pontos}`;
  bVitorias.innerHTML = `Vitórias: ${p[1].vitorias}`;
  bDerrotas.innerHTML = `Derrotas: ${p[1].derrotas}`;
  bEmpates.innerHTML = `Empates: ${p[1].empates}`;
  bPontos.innerHTML = `Pontos: ${p[1].pontos}`;
}
