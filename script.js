

treinar.onclick = function () {
    count++;
    treinar.innerHTML = "XP: " + count;
    this.animate([{ scale: 1.03 }], 300);
    checkEvolve();
    if ((Math.ceil(Math.random() * 10)) === 1) wildAppears();
}

wildAppears = function () {
    //Geração de animal selvagem
    etype = Math.ceil(Math.random() * 3);
    let text = 'Algo selvagem apareceu! Parece ser do tipo ';

    if (etype === 1) text += 'planta...';
    else if (etype === 2) text += 'fogo...';
    else text += 'água...';

    alert(text)
    fightPrompt();
}

fightPrompt = function () {
    treinar.style.display = "none";
    chooseFight.style.display = "inline";
    avoid.style.display = "inline";
}

avoid.onclick = function () {
    treinar.style.display = "block";
    chooseFight.style.display = "none";
    avoid.style.display = "none";
}

checkEvolve = function () {
    if (type === 4 && count > stage * 16) {
        chooseEvolve.style.display = "block";
    }
    else if ((count > ((type - 1) * 6 + 32 * stage)) && stage < 5) {
        chooseEvolve.style.display = "block";
    }

}

chooseEvolve.onclick = function () {
    chooseEvolve.style.display = "none";
    evoluir();
}

start = function () {
    especie();
    titulo.className = '';
    monster.classList.remove('egg');
    monster.classList.add('monster');
    document.getElementById('escolherBicho').style.display = "none";
    HUD.style.display = "block";

    shot.style.display = "none";
    shot.src = "./att" + type + ".png";

    eShot.style.display = "none";
    enemy.style.zIndex = -3;
    vida.innerHTML = "Vida: " + hp + "/ " + maxHp;

}


restoreHUD = function () {
    clearInterval(stopfight);
    nomeEspecie.style.display = "block";
    HUD.style.display = "flex";
    tituloNovo();
    monster.style.position = '';
    chooseFight.style.display = 'none';
    treinar.innerHTML = "XP: " + count;
    vida.style.position = 'initial';
    hp = maxHp;
    vida.innerHTML = "Vida: " + hp + "/ " + maxHp;
    treinar.style.display = "block";
}

tituloNovo = function () {
    if (count % 3 == 1) titulo.innerHTML = "Fique Forte!";
    else if (count % 3 == 2) titulo.innerHTML = "Aventura Aguarda!";
    else titulo.innerHTML = "Evolua e vença!";
}

