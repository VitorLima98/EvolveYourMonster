
//Team
var myTeam = [ {}, {}, {}]
var apelido, selected=0
var nick = false

//DEX NEW

function Buddy(nickname, hasNick, ID, xp, lvl, stage, type, hp, maxHp, image) {
    this.nickname = nickname;
    this.hasNick = hasNick
    this.ID =  ID;
    this.xp = xp;
    this.lvl = lvl;
    this.stage = stage;
    this.type = type;
    this.hp = hp;
    this.maxHp = maxHp;
    this.image=image
  }


// ESCOLHA DO INICIAL
grass.onclick = function () {
    //type = 1;

    apelido = prompt("Escolha um apelido para seu companheiro!", "Bulbasaur");
    if(apelido == "Bulbasaur") nick=false;
    else nick=true;

    myTeam[0] = new Buddy(apelido, nick,1,0,1,1,1,100,100,"./001.png");
    start();
    titulo.classList.add('green_text_animated')
}

fire.onclick = function () {
    //type = 2;
    apelido = prompt("Escolha um apelido para seu companheiro!", "Charmander");
    if(apelido == "Charmander") nick=false;
    else nick=true;

    myTeam[0] = new Buddy(apelido, nick,1,0,1,1,2,100,100,"./004.png");
    start();
    titulo.classList.add('fire_text_animated')
}

water.onclick = function () {
    //type = 3;
    apelido = prompt("Escolha um apelido para seu companheiro!", "Squirtle");
    if(apelido == "Squirtle") nick=false;
    else nick=true;

    myTeam[0] = new Buddy(apelido, nick,1,0,1,1,3,100,100,"./007.png");
    start();
    titulo.classList.add('water_text_animated')
}

ghost.onclick = function () {
    //type = 4;
    apelido = prompt("Escolha um apelido para seu companheiro!", "Ghastly");
    if(apelido == "Ghastly") nick=false;
    else nick=true;

    myTeam[0] = new Buddy(apelido, nick,1,0,1,1,4,100,100,"./0092.png");
    start();
    playerImage();
    titulo.classList.add('ghost_text_animated')
    
}

secret.onclick = function(){
    if (Object.keys(myTeam[1]).length == 0){
    myTeam[1] = new Buddy("Biruleibe", true,6,41,1,3,2,146,150);
    poke[1].style.display = "inline";
    poke[1].innerHTML=myTeam[1].nickname;
    secret.disabled = true;
    }
   
}

// ATUALIZAR NOME DA ESPECIE
especie = function () {
    nomeEspecie.style.display = "block";
    nomeEspecie.className = '';

    //GRASS
    if (myTeam[selected].type === 1){
        if (myTeam[selected].stage === 1){
        nomeEspecie.innerHTML = "Bulbasaur";
        }
        else if (myTeam[selected].stage === 2){
        nomeEspecie.innerHTML = "Ivysaur";
        if(!myTeam[selected].hasNick) myTeam[selected].nickname = "Ivysaur";
        poke[selected].innerHTML="Ivysaur";
        }
        else if (myTeam[selected].stage === 3){
        nomeEspecie.innerHTML = "Venusaur";
        if(!myTeam[selected].hasNick){
        myTeam[selected].nickname = "Venusaur";
        poke[selected].innerHTML="Venusaur";}
        }
        else if (myTeam[selected].stage === 4){
        nomeEspecie.innerHTML = "Mega Venusaur";
        nomeEspecie.className = '';
        nomeEspecie.classList.add('green_text_animated');
        if(!myTeam[selected].hasNick) {
        myTeam[selected].nickname = "Mega Venusaur";
        poke[selected].innerHTML="Mega Venusaur";}
        }
        else if (myTeam[selected].stage === 5){
        nomeEspecie.innerHTML = "G-MAX Venusaur";
        nomeEspecie.className = '';
        nomeEspecie.classList.add('rainbow_text_animated')
        if(!myTeam[selected].hasNick){
            myTeam[selected].nickname = "G-MAX Venusaur";
            poke[selected].innerHTML = "G-MAX Venusaur";}
        }
    }
    

    //FIRE
    if (myTeam[selected].type === 2){
        if (myTeam[selected].stage === 1){
        nomeEspecie.innerHTML = "Charmander";
        }
        else if (myTeam[selected].stage === 2){
        nomeEspecie.innerHTML = "Charmeleon";
        if(!myTeam[selected].hasNick) myTeam[selected].nickname = "Charmeleon";
        poke[selected].innerHTML="Charmeleon";
        }
        else if (myTeam[selected].stage === 3){
        nomeEspecie.innerHTML = "Charizard";
        if(!myTeam[selected].hasNick){
        myTeam[selected].nickname = "Charizard";
        poke[selected].innerHTML="Charizard";}
        }
        else if (myTeam[selected].stage === 4){
        nomeEspecie.innerHTML = "Mega Charizard";
        nomeEspecie.className = '';
        nomeEspecie.classList.add('fire_text_animated');
        if(!myTeam[selected].hasNick) {
        myTeam[selected].nickname = "Mega Charizard";
        poke[selected].innerHTML="Mega Charizard";}
        }
        else if (myTeam[selected].stage === 5){
        nomeEspecie.innerHTML = "G-MAX Charizard";
        nomeEspecie.className = '';
        nomeEspecie.classList.add('rainbow_text_animated')
        if(!myTeam[selected].hasNick){
            myTeam[selected].nickname = "G-MAX Charizard";
            poke[selected].innerHTML = "G-MAX Charizard";}
        }
    }
    //WATER
    if (myTeam[selected].type === 2){
        if (myTeam[selected].stage === 1){
        nomeEspecie.innerHTML = "Squirtle";
        }
        else if (myTeam[selected].stage === 2){
        nomeEspecie.innerHTML = "Wartortle";
        if(!myTeam[selected].hasNick) myTeam[selected].nickname = "Wartortle";
        poke[selected].innerHTML="Wartortle";
        }
        else if (myTeam[selected].stage === 3){
        nomeEspecie.innerHTML = "Blastoise";
        if(!myTeam[selected].hasNick){
        myTeam[selected].nickname = "Blastoise";
        poke[selected].innerHTML="Blastoise";}
        }
        else if (myTeam[selected].stage === 4){
        nomeEspecie.innerHTML = "Mega Blastoise";
        nomeEspecie.className = '';
        nomeEspecie.classList.add('water_text_animated');
        if(!myTeam[selected].hasNick) {
        myTeam[selected].nickname = "Mega Blastoise";
        poke[selected].innerHTML="Mega Blastoise";}
        }
        else if (myTeam[selected].stage === 5){
        nomeEspecie.innerHTML = "G-MAX Blastoise";
        nomeEspecie.className = '';
        nomeEspecie.classList.add('rainbow_text_animated')
        if(!myTeam[selected].hasNick){
            myTeam[selected].nickname = "G-MAX Blastoise";
            poke[selected].innerHTML = "G-MAX Blastoise";}
        }
    }

    //GHOST
    if (myTeam[selected].type === 4 && myTeam[selected].stage === 1)
        nomeEspecie.innerHTML = "Gastly";
    else if (myTeam[selected].type === 4 && myTeam[selected].stage === 2)
        nomeEspecie.innerHTML = "Haunter";
    else if (myTeam[selected].type === 4 && myTeam[selected].stage === 3)
        nomeEspecie.innerHTML = "Gengar";
    else if (myTeam[selected].type === 4 && myTeam[selected].stage === 4) {
        nomeEspecie.innerHTML = "Mega Gengar";
        nomeEspecie.classList.add('ghost_text_animated')
    }
    else if (myTeam[selected].type === 4 && myTeam[selected].stage === 5) {
        nomeEspecie.innerHTML = "G-MAX Gengar";
        nomeEspecie.className = '';
        nomeEspecie.classList.add('rainbow_text_animated')
    }

    if(myTeam[selected].hasNick) nomeEspecie.innerHTML = myTeam[selected].nickname + ", o " + nomeEspecie.innerHTML;
}

evoluir = function () {
    myTeam[selected].stage++;
    myTeam[selected].maxHp += 25;
    myTeam[selected].hp = barraVida.value = barraVida.max = myTeam[selected].maxHp;
    vida.innerHTML = "Vida: " + myTeam[selected].hp + "/ " + myTeam[selected].maxHp;

    shotDuration *= 0.8;
    monster.animate([{ transform: "rotateY(720deg)" }], 300);
    monster.animate([{ transform: "scale(2)" }], 300);

    if (myTeam[selected].stage < 4) {
        playerImage();
    }
    else if (myTeam[selected].stage === 4) {
        myTeam[selected].ID--;
        alert("MEGA EVOLUTION!");
        playerImage();
    }
    else if (myTeam[selected].stage === 5) {
        myTeam[selected].ID -= 2;
        alert("GIGANTAMAX FORM!");
        playerImage();
    }
    especie();
}

playerImage = function () {
    myTeam[selected].ID = myTeam[selected].stage;
    if (myTeam[selected].type === 2) myTeam[selected].ID += 3;
    else if (myTeam[selected].type === 3) myTeam[selected].ID += 6;
    else if (myTeam[selected].type === 4) myTeam[selected].ID += 91;

    if (myTeam[selected].stage < 4) {
        monster.src = "./00" + myTeam[selected].ID + ".png";
        monster.style.width = "150px";
        monster.style.height = "150px";
    }
    else if (myTeam[selected].stage === 4) {
        myTeam[selected].ID--;
        monster.src = "./00" + myTeam[selected].ID + "M.png";
        monster.style.width = "200px";
        monster.style.height = "200px";
    }
    else if (myTeam[selected].stage === 5) {
        myTeam[selected].ID -= 2;
        monster.src = "./00" + myTeam[selected].ID + "X.png";
        monster.style.width = "225px";
        monster.style.height = "225px";
    }
}

tituloNovo = function () {
    if (count % 3 == 1) titulo.innerHTML = "Fique Forte!";
    else if (count % 3 == 2) titulo.innerHTML = "Aventura Aguarda!";
    else titulo.innerHTML = "Evolua e vença!";
}


 



