var itens = [
  'https://i.imgur.com/zeqMs7p.jpg',
  'https://i.imgur.com/NfTPS8Y.jpg',
  'https://i.imgur.com/WpZKaDn.jpg',
  'https://i.imgur.com/MzeLsrq.jpg',
  'https://i.imgur.com/T86VP2j.jpg',
  'https://i.imgur.com/Fbx3jDr.jpg',
  'https://i.imgur.com/8H6GG16.jpg',
  'https://i.imgur.com/hvNG0Md.jpg',
];
var favoritos = [
  'false',
  'false',
  'false',
  'false',
  'false',
  'false',
  'false',
  'false',
];
var links = [
  '80217517',
  '80025744',
  '80174608',
  '80100172',
  '80057281',
  '80189221',
  '70264888',
  '80197526',
];

function load() {
  let item = document.getElementById('itens-inicio');

  for (let i = 0; i < itens.length; i++) {
    item.innerHTML += `<div class="item-ini">
    <a href="https://www.netflix.com/br/title/${links[i]}" target="_blank">
    <img class="cover" src=${itens[i]} alt="" draggable="false"/>
    </a>
    <span class="icon-bg"></span>
    <i class="far fa-star fa-lg" id="${i}" onclick="favoritar(${i})"></i>
  </div>`;
  }
}

function favoritar(item) {
  let fav = document.getElementById('itens-fav');
  item = parseInt(item);

  if (favoritos[item] == 'false') {
    favoritos[item] = 'true';
    document.getElementById(item).className = 'fas fa-star fa-lg';
    fav.innerHTML += `<div class="item-fav" id=${item}f>
    <a href="https://www.netflix.com/br/title/${links[item]}" target="_blank">
    <img class="cover" src=${itens[item]} alt="" />
    </a></div>`;
  } else {
    favoritos[item] = 'false';
    document.getElementById(item).className = 'far fa-star fa-lg';
    document.getElementById(item + 'f').remove();
  }
}

function mudar(div) {
  let ini = document.getElementById('inicio');
  let fav = document.getElementById('favoritos');
  let txtIni = document.getElementById('text-ini');
  let txtFav = document.getElementById('text-fav');

  if (div == 'favoritos') {
    ini.style.display = 'none';
    fav.style.display = 'unset';
    txtIni.style.fontWeight = '400';
    txtFav.style.fontWeight = 'bold';

    if (favoritos.indexOf('true') != -1) {
      document.getElementById('nada').innerHTML = '';
    } else {
      document.getElementById('nada').innerHTML = `Nada nos seus favoritos :c
      <br><span>Clique na estrela para adicionar aos favoritos.</span>`;
    }
  } else {
    ini.style.display = 'unset';
    fav.style.display = 'none';
    txtIni.style.fontWeight = 'bold';
    txtFav.style.fontWeight = '400';
  }
}
