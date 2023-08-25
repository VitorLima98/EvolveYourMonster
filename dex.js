// ESCOLHA DO INICIAL
grass.onclick = function () {
    type = 1;
    start();
    titulo.classList.add('green_text_animated')
    monster.src = "./001.png";
}

fire.onclick = function () {
    type = 2;
    start();
    titulo.classList.add('fire_text_animated')
    monster.src = "./004.png";
}

water.onclick = function () {
    type = 3;
    start();
    titulo.classList.add('water_text_animated')
    monster.src = "./007.png";
}

ghost.onclick = function () {
    type = 4;
    start();
    titulo.classList.add('ghost_text_animated')
    monster.src = "./0092.png";
}

// ATUALIZAR NOME DA ESPECIE
especie = function () {
    //GRASS
    if (type === 1 && stage === 1)
        nomeEspecie.innerHTML = "Bulbasaur";
    else if (type === 1 && stage === 2)
        nomeEspecie.innerHTML = "Ivysaur";
    else if (type === 1 && stage === 3)
        nomeEspecie.innerHTML = "Venusaur";
    else if (type === 1 && stage === 4) {
        nomeEspecie.innerHTML = "Mega Venusaur";
        nomeEspecie.classList.add('green_text_animated')
    }
    else if (type === 1 && stage === 5) {
        nomeEspecie.innerHTML = "G-MAX Venusaur";
        nomeEspecie.className = '';
        nomeEspecie.classList.add('rainbow_text_animated')
    }
    //FIRE
    if (type === 2 && stage === 1)
        nomeEspecie.innerHTML = "Charmander";
    else if (type === 2 && stage === 2)
        nomeEspecie.innerHTML = "Charmeleon";
    else if (type === 2 && stage === 3)
        nomeEspecie.innerHTML = "Charizard";
    else if (type === 2 && stage === 4) {
        nomeEspecie.innerHTML = "Mega Charizard";
        nomeEspecie.classList.add('fire_text_animated')
    }
    else if (type === 2 && stage === 5) {
        nomeEspecie.innerHTML = "G-MAX Charizard";
        nomeEspecie.className = '';
        nomeEspecie.classList.add('rainbow_text_animated')
    }
    //WATER
    if (type === 3 && stage === 1)
        nomeEspecie.innerHTML = "Squirtle";
    else if (type === 3 && stage === 2)
        nomeEspecie.innerHTML = "Wartortle";
    else if (type === 3 && stage === 3)
        nomeEspecie.innerHTML = "Blastoise";
    else if (type === 3 && stage === 4) {
        nomeEspecie.innerHTML = "Mega Blastoise";
        nomeEspecie.classList.add('water_text_animated')
    }
    else if (type === 3 && stage === 5) {
        nomeEspecie.innerHTML = "G-MAX Blastoise";
        nomeEspecie.className = '';
        nomeEspecie.classList.add('rainbow_text_animated')
    }

    //GHOST
    if (type === 4 && stage === 1)
        nomeEspecie.innerHTML = "Gastly";
    else if (type === 4 && stage === 2)
        nomeEspecie.innerHTML = "Haunter";
    else if (type === 4 && stage === 3)
        nomeEspecie.innerHTML = "Gengar";
    else if (type === 4 && stage === 4) {
        nomeEspecie.innerHTML = "Mega Gengar";
        nomeEspecie.classList.add('ghost_text_animated')
    }
    else if (type === 4 && stage === 5) {
        nomeEspecie.innerHTML = "G-MAX Gengar";
        nomeEspecie.className = '';
        nomeEspecie.classList.add('rainbow_text_animated')
    }


}

evoluir = function () {
    let ID = ++stage;
    if (type === 2) ID += 3;
    else if (type === 3) ID += 6;
    else ID += 91;

    maxHp += 25;
    hp = barraVida.value = barraVida.max = maxHp;
    vida.innerHTML = "Vida: " + hp + "/ " + maxHp;

    shotDuration *= 0.8;
    monster.animate([{ transform: "rotateY(720deg)" }], 300);
    monster.animate([{ transform: "scale(2)" }], 300);

    if (stage < 4) {
        monster.src = "./00" + ID + ".png";
        monster.style.width = "20vh";
        monster.style.height = "20vh";
    }
    else if (stage === 4) {
        ID--;
        alert("MEGA EVOLUTION!");
        monster.src = "./00" + ID + "M.png";
        monster.style.width = "25vh";
        monster.style.height = "25vh";
    }
    else if (stage === 5) {
        ID -= 2;
        alert("GIGANTAMAX FORM!");
        monster.src = "./00" + ID + "X.png";
        monster.style.width = "30vh";
        monster.style.height = "30vh";
    }
    especie();
}

tituloNovo = function () {
    if (count % 3 == 1) titulo.innerHTML = "Fique Forte!";
    else if (count % 3 == 2) titulo.innerHTML = "Aventura Aguarda!";
    else titulo.innerHTML = "Evolua e vença!";
}
