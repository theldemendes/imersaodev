var arthur = {
  nome: 'Arthur Severo',
  imagem: 'https://i.imgur.com/jwpyQea.png',
  atributos: {
    forca: '78',
    defesa: '80',
    poder: '55',
  },
};
var kaiser = {
  nome: 'Kaiser Cohen',
  imagem: 'https://i.imgur.com/b1fLuXY.png',
  atributos: {
    forca: '70',
    defesa: '69',
    poder: '60',
  },
};
var liz = {
  nome: 'Elizabeth Webber',
  imagem: 'https://i.imgur.com/TKMXWav.png',
  atributos: {
    forca: '68',
    defesa: '58',
    poder: '75',
  },
};
var ajudante = {
  nome: 'Ajudante',
  imagem: 'https://i.imgur.com/ktxBE5X.png',
  atributos: {
    forca: '63',
    defesa: '60',
    poder: '80',
  },
};
var viajante = {
  nome: 'Viajante',
  imagem: 'https://i.imgur.com/5UNmeHs.png',
  atributos: {
    forca: '80',
    defesa: '86',
    poder: '95',
  },
};

var cartaPlayer;
var cartaBot;
var cartas = [arthur, kaiser, liz, ajudante, viajante];

function sortearCarta() {
  document.querySelector('#bJogar').style.display = 'none';
  let cBot = Math.floor(Math.random() * 5);
  let cPlayer = Math.floor(Math.random() * 5);

  while (cPlayer == cBot) {
    cPlayer = Math.floor(Math.random() * 5);
  }

  cartaPlayer = cartas[cPlayer];
  cartaBot = cartas[cBot];

  setarCarta('player');
}

function setarCarta(p) {
  let cPlayerNome = document.querySelector('#card-player-nome');
  let cPlayerImg = document.querySelector('#img-card-player');
  let pImg = document.querySelector('#player-card');
  let cPlayerFor = document.querySelector('#card-player-aFor');
  let cPlayerDef = document.querySelector('#card-player-aDef');
  let cPlayerPod = document.querySelector('#card-player-aPod');
  let cBotNome = document.querySelector('#card-bot-nome');
  let cBotImg = document.querySelector('#img-card-bot');
  let bImg = document.querySelector('#bot-card');
  let cBotFor = document.querySelector('#card-bot-aFor');
  let cBotDef = document.querySelector('#card-bot-aDef');
  let cBotPod = document.querySelector('#card-bot-aPod');

  if (p == 'player') {
    cPlayerNome.innerHTML = `${cartaPlayer.nome}`;
    cPlayerImg.src = `https://svgshare.com/i/Vdn.svg`;
    pImg.style.backgroundImage = `url(${cartaPlayer.imagem})`;
    cPlayerFor.innerHTML = `Força: ${cartaPlayer.atributos.forca}`;
    cPlayerDef.innerHTML = `Defesa: ${cartaPlayer.atributos.defesa}`;
    cPlayerPod.innerHTML = `Poder: ${cartaPlayer.atributos.poder}`;
  } else if (p == 'bot') {
    cBotNome.innerHTML = `${cartaBot.nome}`;
    cBotImg.src = `https://svgshare.com/i/Vdn.svg`;
    bImg.style.backgroundImage = `url(${cartaBot.imagem})`;
    cBotFor.innerHTML = `Força: ${cartaBot.atributos.forca}`;
    cBotDef.innerHTML = `Defesa: ${cartaBot.atributos.defesa}`;
    cBotPod.innerHTML = `Poder: ${cartaBot.atributos.poder}`;
  }

  document.querySelector('#bJogarCarta').style.display = 'unset';
  document.querySelector('#inputs').style.visibility = 'unset';
}

function jogar() {
  let res = document.querySelector('#res');
  let atributo = input();
  console.log(atributo);
  setarCarta('bot');

  document.querySelector('#bJogarCarta').style.display = 'none';
  document.querySelector('#inputs').style.visibility = 'hidden';
  document.querySelector('#bJogarNovamente').style.display = 'unset';

  if (cartaPlayer.atributos[atributo] > cartaBot.atributos[atributo]) {
    res.innerHTML = `Você Ganhou!`;
    res.style.visibility = 'unset';
  } else if (cartaPlayer.atributos[atributo] < cartaBot.atributos[atributo]) {
    res.innerHTML = `Você Perdeu!`;
    res.style.visibility = 'unset';
  } else {
    res.innerHTML = `Empatou!`;
    res.style.visibility = 'unset';
  }
}

function input() {
  let input = document.getElementsByName('input');
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      return input[i].value;
    }
  }
}

function jogarNovamente() {
  let cPlayerNome = document.querySelector('#card-player-nome');
  let cPlayerImg = document.querySelector('#img-card-player');
  let cPlayerFor = document.querySelector('#card-player-aFor');
  let cPlayerDef = document.querySelector('#card-player-aDef');
  let cPlayerPod = document.querySelector('#card-player-aPod');
  let cBotNome = document.querySelector('#card-bot-nome');
  let cBotImg = document.querySelector('#img-card-bot');
  let cBotFor = document.querySelector('#card-bot-aFor');
  let cBotDef = document.querySelector('#card-bot-aDef');
  let cBotPod = document.querySelector('#card-bot-aPod');

  cBotNome.innerHTML = ``;
  cBotImg.src = `https://svgshare.com/i/VfE.svg`;
  cBotFor.innerHTML = ``;
  cBotDef.innerHTML = ``;
  cBotPod.innerHTML = ``;
  cPlayerNome.innerHTML = ``;
  cPlayerImg.src = `https://svgshare.com/i/VfE.svg`;
  cPlayerFor.innerHTML = ``;
  cPlayerDef.innerHTML = ``;
  cPlayerPod.innerHTML = ``;

  document.querySelector('#bJogar').style.display = 'unset';
  document.querySelector('#bJogarNovamente').style.display = 'none';
  document.querySelector('#res').style.visibility = 'hidden';
}
