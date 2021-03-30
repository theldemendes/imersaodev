function convert() {
  let modo = document.getElementById('select');
  let img = document.getElementById('img');
  let type = Number(modo.value);

  switch (type) {
    case 0:
      moeda('USD>BRL');
      img.src = 'https://svgshare.com/i/VJU.svg';
      break;
    case 1:
      moeda('BRL>USD');
      img.src = 'https://svgshare.com/i/VJU.svg';
      break;
    case 2:
      temperatura('F>C');
      img.src = 'https://svgshare.com/i/VJu.svg';
      break;
    case 3:
      temperatura('C>F');
      img.src = 'https://svgshare.com/i/VJu.svg';
      break;
    case 4:
      distancia('AL>KM');
      img.src = 'https://svgshare.com/i/VJb.svg';
      break;
    case 5:
      distancia('KM>AL');
      img.src = 'https://svgshare.com/i/VJb.svg';
      break;

    default:
      console.log('Tipo de conversão não encontrado.');
      break;
  }
}

function moeda(type) {
  let value = document.getElementById('input');
  let resText = document.getElementById('res-text');
  let resValue = document.getElementById('res-value');

  let n = Number(value.value);
  let input = Number(value.value.toString());

  if (type == 'USD>BRL') {
    let conversao = n * 5.51;
    conversao = conversao.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    input = input.toLocaleString('en', { style: 'currency', currency: 'USD' });
    resText.innerHTML = `<strong>${input}</strong> convertido em Dólares é igual a`;
    resValue.innerHTML = `${conversao}`;
  } else {
    let conversao = n / 5.51;
    conversao = conversao.toLocaleString('en', {
      style: 'currency',
      currency: 'USD',
    });

    input = input.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    resText.innerHTML = `<strong>${input}</strong> convertido em Reais é igual a`;
    resValue.innerHTML = `${conversao}`;
  }
}

function temperatura(type) {
  let value = document.getElementById('input');
  let resText = document.getElementById('res-text');
  let resValue = document.getElementById('res-value');

  let n = Number(value.value);
  let input = Number(value.value);

  if (type == 'F>C') {
    let conversao = ((n - 32) * 5) / 9;
    conversao = conversao.toFixed(4);

    resText.innerHTML = `<strong>${input} °F</strong> convertido em Celsius é igual a`;
    resValue.innerHTML = `${conversao} °C`;
  } else {
    let conversao = (n * 9) / 5 + 32;
    conversao = conversao.toFixed(1);

    resText.innerHTML = `<strong>${input} °C</strong> convertido em Fahrenheit é igual a`;
    resValue.innerHTML = `${conversao} °F`;
  }
}

function distancia(type) {
  let value = document.getElementById('input');
  let resText = document.getElementById('res-text');
  let resValue = document.getElementById('res-value');

  let n = Number(value.value);
  let input = Number(value.value);

  if (type == 'AL>KM') {
    let conversao = n * 9.461e12;
    conversao = conversao.toExponential(4);

    resText.innerHTML = `<strong>${input} Ano-Luz</strong> convertido em Km é igual a`;
    resValue.innerHTML = `${conversao} Km`;
  } else {
    let conversao = n / 9.461e12;
    conversao = conversao.toExponential(4);

    resText.innerHTML = `<strong>${input} Km</strong> convertido em Ano-Luz é igual a`;
    resValue.innerHTML = `${conversao} Ano-Luz`;
  }
}
