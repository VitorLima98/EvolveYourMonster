//alert("Use o mouse ou teclado para jogar!\nA = Treinar/Atacar\nQ = Entrar em luta\nS = Fugir de uma luta\nX = Evoluir seu monstro\nH = Mostrar ajuda");


if (window.name === "saved") {
    console.log("Há dados para restaurar.");
}

treinar.onclick = function () {
    count++;
    myTeam[selected].xp += 1 + reset;
    treinar.innerHTML = "XP: " + myTeam[selected].xp;
    this.animate([{ scale: 1.03 }], 300);
    treinar.disabled=true;
    setTimeout(function () { treinar.disabled = false; }, 800);
    checkEvolve();
    if ((Math.ceil(Math.random() * 5)) === 1) wildAppears();
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
    chooseEvolve.style.display = "none";
    chooseFight.style.display = "inline";
    avoid.style.display = "inline";
}

avoid.onclick = function () {
    treinar.style.display = "block";
    chooseFight.style.display = "none";
    avoid.style.display = "none";
}

checkEvolve = function () {
    if (type === 4 && myTeam[selected].xp > myTeam[selected].stage * 16 && myTeam[selected].stage < 5) {
        chooseEvolve.style.display = "inline";
    }
    else if ( (myTeam[selected].xp > ((type - 1) * 6 + 32 * myTeam[selected].stage)) && myTeam[selected].stage < 5) {
        chooseEvolve.style.display = "inline";
    }
    else {
        chooseEvolve.style.display = "none";
    }

}

chooseEvolve.onclick = function () {
    chooseEvolve.style.display = "none";
    evoluir();
}

start = function () {
    especie();
    playerImage();
    checkinv();
    titulo.className = '';
    monster.classList.remove('egg');
    monster.classList.add('monster');
    document.getElementById('escolherBicho').style.display = "none";
    HUD.style.display = "block";
    treinar.innerHTML = "XP: " + myTeam[selected].xp;
    treinar.style.display = "block"; 
    poke[0].style.display = "inline";
    poke[0].innerHTML = myTeam[0].nickname;
    shot.src = "./att" + myTeam[selected].type + ".png";

    vida.innerHTML = "Vida: " + hp + "/ " + maxHp;


    


}

restoreHUD = function () {
    PAGE.style.backgroundImage = "url(./bg"+Math.floor(Math.random() * 3)+".gif)";
    clearInterval(stopfight);
    checkinv();
    nomeEspecie.style.display = "block";
    HUD.style.display = "flex";
    tituloNovo();
    monster.style.position = '';
    chooseFight.style.display = 'none';
    treinar.innerHTML = "XP: " + myTeam[selected].xp;
    vida.style.position = 'initial';
    //myTeam[selected].hp = myTeam[selected].maxHp;
    vida.innerHTML = "Vida: " + myTeam[selected].hp + "/ " + myTeam[selected].maxHp;
    treinar.style.display = "block";
}

tituloNovo = function () {
    if (count % 3 == 1) titulo.innerHTML = "Fique Forte!";
    else if (count % 3 == 2) titulo.innerHTML = "Aventura Aguarda!";
    else titulo.innerHTML = "Evolua e vença!";
}

PRIME.onclick = function () {
    alert("Resetando!");
    reset+=0.25;

    console.log(reset);

    selected=0;

    myTeam[selected].maxHp = 100 + 3 * reset;
    myTeam[selected].xp = 1;
    myTeam[selected].stage = 1;

    HUD.style.display = "none";
    vida.style.display = "none";
    nomeEspecie.style.display = "none";
    titulo.className = '';
    monster.classList.remove('monster');
    monster.classList.add('egg');
    document.getElementById('escolherBicho').style.display = "block";
    monster.src = "./egg.png";

}

saveBtn.onclick = function () {
    alert("salvando")
    keepData();
}

loadBtn.onclick = function () {
    alert("carregando")
    retrieveData();
}

resetBtn.onclick = function () {
    alert("resetando")
    resetData();
}

//<div id="team"><button>Seu time</button></div>