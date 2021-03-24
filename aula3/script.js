var level = 1;
let tentativas = 5;
var rand = random();

function advinhar() {
    let input = document.getElementById('input');
    let t = document.getElementById('text-t');
    let n = parseInt(input.value);

    if (input.value.length == 0) {
        alert('Por favor insira um número!');
    } else {
        if (tentativas > 1 || tentativas == 1 && n == rand) {
            if (n == rand) {
                proxLevel();
            } else if (rand > n) {
                tentativas--;
                t.innerHTML = `<span style="color: rgb(212, 49, 49);">Incorreto! ${tentativas} tentativas restando.</span>`;
                t.innerHTML += `<br><span style="color: #067d00;">Dica: o número é maior!</span>`;
            } else if (rand < n) {
                tentativas--;
                t.innerHTML = `<span style="color: rgb(212, 49, 49);">Incorreto! ${tentativas} tentativas restando.</span>`;
                t.innerHTML += `<br><span style="color: #067d00;">Dica: o número é menor!</span>`;
            }
        } else {
            gameOver();
        }
    }
}

function proxLevel() {
    let leveltxt = document.getElementById('level-txt');
    let leveln = document.getElementById('level-n');
    let img = document.getElementById('dif');
    let t = document.getElementById('text-t');
    let win = document.getElementById('win');
    let game = document.getElementById('game');
    let audio = new Audio('https://www.mboxdrive.com/vitoria.mp3');

    if (level == 1) {
        level = 2;
        leveltxt.innerHTML = `Nível - 2`;
        leveln.innerHTML = `Advinhe o número de 0 a 15`;
        img.src = 'https://svgshare.com/i/VPg.svg';
        tentativas = 4;
        rand = random();
        t.innerHTML = `<span style="color: #067d00;">Você acertou e avançou de nível!</span>`;
        t.innerHTML += `<br><span style="color: #067d00;">Você tem ${tentativas} tentativas nesse nivel!</span>`;
    } else if (level == 2) {
        level = 3;
        leveltxt.innerHTML = `Nível - 3`;
        leveln.innerHTML = `Advinhe o número de 0 a 20`;
        img.src = 'https://svgshare.com/i/VNN.svg';
        tentativas = 3;
        rand = random();
        t.innerHTML = `<span style="color: #067d00;">Você acertou e avançou de nível!</span>`;
        t.innerHTML += `<br><span style="color: #067d00;">Você tem ${tentativas} tentativas nesse nivel!</span>`;
    } else {
        game.style.display = "none";
        win.style.display = "unset";
        audio.play();
        audio.volume = 0.05;
    }
}

function gameOver() {
    let game = document.getElementById('game');
    let gameover = document.getElementById('gameover');

    game.style.display = "none";
    gameover.style.display = "unset";
}

function random() {
    switch (level) {
        case 1:
            var rand = Math.floor(Math.random() * 10);
            return rand;
        case 2:
            var rand = Math.floor(Math.random() * 15);
            return rand;
        case 3:
            var rand = Math.floor(Math.random() * 20);
            return rand;
    }
}
