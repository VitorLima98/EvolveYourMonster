var treinar = document.getElementById("treinar");
var monster = document.getElementById('monster');
var HUD = document.getElementById('HUD');
var nomeEspecie = document.getElementById('especie');
var titulo = document.getElementById("titulo");
var vida = document.getElementById("vida");

var att = document.getElementById("att");
var chooseFight = document.getElementById("chooseFight");
var avoid = document.getElementById("avoid");
var chooseRun = document.getElementById("chooseRun");
var enemy = document.getElementById("enemy");
var fightScreen = document.getElementById("fightScreen");
var shot = document.getElementById("shot");
var eShot = document.getElementById("eShot");

var type = 0; //0-n 1-grass 2-fire 3-water
var grass = document.getElementById("grass"),
    water = document.getElementById("water"),
    fire = document.getElementById("fire");
var stageUp = false, stage = 1, count = 1;
//fight vars
var hp = 100, maxHp = 100, etype = 1, e_Hp = 250, max_e_Hp = 100;

HUD.style.display = "none";
fightScreen.style.display = "none";
chooseFight.style.display = "none";
avoid.style.display = "none";

treinar.onclick = function () {
    count++;
    treinar.innerHTML = "XP: " + count;
    this.animate([{ scale: 1.03 }], 300);
    checkEvolve();
    if ((Math.ceil(Math.random() * 10)) === 1) wildAppears();
}

wildAppears = function () {
    etype = Math.ceil(Math.random() * 3);
    let text = 'Algo selvagem apareceu! Parece ser do tipo ';
    if (etype === 1) text += 'planta';
    else if (etype === 2) text += 'fogo';
    else text += 'água';
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
    if ((count > ((type - 1) * 6 + 32 * stage)) && stage < 5) {
        evoluir();
    }

}

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
    eShot.src = "./att1.png";
    eShot.style.width = "100px";
    eShot.style.height = "100px";
    vida.innerHTML = "Vida:" + hp;

}

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
}

evoluir = function () {
    let ID = ++stage;
    if (type === 2) ID += 3;
    else if (type === 3) ID += 6;
    maxHp += 25;
    hp = maxHp;

    shotDuration *= 0.8;
    monster.animate([{ transform: "rotateY(360deg)" }], 300);

    if (stage < 4) {
        alert("EVOLUTION!");
        monster.src = "./00" + ID + ".png";
        monster.style.height = "200px";
        monster.style.width = "200px"
    }
    else if (stage === 4) {
        ID--;
        alert("MEGA EVOLUTION!");
        monster.src = "./00" + ID + "M.png";
        monster.style.height = "250px";
        monster.style.width = "250px"
    }
    else if (stage === 5) {
        ID -= 2;
        alert("GIGANTAMAX FORM!");
        monster.src = "./00" + ID + "X.png";
        monster.style.height = "270px";
        monster.style.width = "270px"
    }
    especie();
}

chooseFight.onclick = function () {
    avoid.style.display = "none";

    e_Hp = max_e_Hp + count % 5 - 3;
    hp = maxHp;
    document.getElementById("vidaE").innerHTML = "HP: " + e_Hp;

    nomeEspecie.style.display = "none";
    HUD.style.display = "none";
    fightScreen.style.display = "block";
    titulo.innerHTML = "BATALHA!"

    monster.style.position = 'absolute';
    monster.style.bottom = '5vh';
    monster.style.left = '5vh';

    vida.style.position = 'absolute';
    vida.style.bottom = '0vh';
    vida.style.left = '10vh';

    enemy.style.position = 'absolute';
    enemy.style.top = '5vh';
    enemy.style.right = '5vh';
    enemy.style.zIndex = -3;
    document.getElementById('enemyPic').src = "./enemy" + etype + ".png";
    eShot.src = "./att" + etype + ".png";

    stopfight = setInterval(function () { enemyAttack() }, 1500);

}

att.onclick = function () {
    att.disabled = true;
    e_Hp -= count * stage;
    if (e_Hp > 0) {
        setTimeout(function () { att.disabled = false; }, shotDuration * 1.2);
    }

    attackAnimation();
}

victory = function () {
    fightScreen.style.display = "none";
    alert("Vitoria! Recompensa: 10 XP");
    count += 10;
    restoreHUD();
    checkEvolve();
    max_e_Hp += 110;
}

enemyAttack = function () {

    enemy.animate([
        {
            transform: 'translate(0%, 0%)'
        },
        {
            transform: 'translate(-10%, +10%)'
        }
    ], {
        duration: 100
    });
    hp -= (1 + Math.floor(Math.random() * 10)) + 10;

    eShot.style.position = 'absolute';
    eShot.style.top = enemy.style.top;
    eShot.style.right = enemy.style.right;
    eShot.style.display = "block";
    shot.style.width = "100px";
    shot.style.height = "100px";

    setTimeout(function () { eShot.style.display = "none"; }, shotDuration);

    eShot.style.display = "block"
    eShot.animate([
        {
            transform: "translate(0px, 0px)"
        },
        {
            transform: "translate(-100vw, 80vh)"
        }
    ], {
        duration: shotDuration
    });

    setTimeout(function () { playerAnimate() }, shotDuration * 0.8);
}

chooseRun.onclick = function () {
    escapeBattle();
}

escapeBattle = function () {
    alert("Fugiu em segurança!");
    fightScreen.style.display = "none";
    restoreHUD();
    max_e_Hp += 15;
    clearInterval(stopfight);
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
    vida.innerHTML = "Vida: " + hp;
    treinar.style.display = "block";
}

tituloNovo = function () {
    if (count % 3 == 1) titulo.innerHTML = "Fique Forte!";
    else if (count % 3 == 2) titulo.innerHTML = "Aventura Aguarda!";
    else titulo.innerHTML = "Evolua e vença!";
}

let shotDuration = 1000;
attackAnimation = function () {
    shot.style.display = "block";


    monster.animate([
        {
            transform: 'translate(0%, 0%)'
        },
        {
            transform: 'translate(10%, -10%)'
        }
    ], {
        duration: 100
    });

    shot.animate([
        {
            transform: "translate(0px, 0px)"
        },
        {
            transform: "translate(100vw, -80vh)"
        }
    ], {
        duration: shotDuration
    });

    shot.style.position = 'absolute';
    shot.style.bottom = monster.style.bottom;
    shot.style.left = monster.style.left;
    shot.style.width = "100px";
    shot.style.height = "100px";
    setTimeout(function () { shot.style.display = "none"; }, shotDuration);
    setTimeout(function () { enemyAnimate() }, shotDuration * 0.8);
}

enemyAnimate = function () {
    document.getElementById("enemyPic").animate([{ scale: 0.93 }], 300);
    if (e_Hp <= 0) {
        e_Hp = 0;
        clearInterval(stopfight);
    }
    document.getElementById("vidaE").innerHTML = "HP: " + e_Hp;
    if (e_Hp <= 0) { setTimeout(function () { victory();; }, shotDuration * 0.5); }
}

playerAnimate = function () {
    monster.animate([{ scale: 0.93 }], 300);
    vida.innerHTML = "Vida: " + hp;
    if (hp <= 0) {
        alert("Derrota!");
        escapeBattle();
    }

}

