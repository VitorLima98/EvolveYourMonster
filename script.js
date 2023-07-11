var treinar = document.getElementById("treinar");
var monster = document.getElementById('monster');
var HUD = document.getElementById('HUD');
var nomeEspecie = document.getElementById('especie');
var titulo = document.getElementById("titulo");

var att = document.getElementById("att");
var chooseFight = document.getElementById("chooseFight");
var chooseRun = document.getElementById("chooseRun");
var enemy = document.getElementById("enemy");
var fightScreen = document.getElementById("fightScreen");
var shot = document.getElementById("shot");

var type = 0; //0-n 1-grass 2-fire 3-water
var grass = document.getElementById("grass"),
    water = document.getElementById("water"),
    fire = document.getElementById("fire");
var stageUp = false, stage = 1, count = 1;
//fight vars
var hp = 100, maxHp = 250, e_Hp = 250, max_e_Hp = 100;

HUD.style.display = "none";
fightScreen.style.display = "none";

monster.classList.add('egg');

treinar.onclick = function () {
    count++;
    treinar.innerHTML = "XP: " + count;
    this.animate([{ scale: 1.03 }], 300);
    checkEvolve();
};

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

    monster.animate([{ transform: "rotateY(360deg)" }], 300);

    if (stage < 4) {
        alert("EVOLUTION!");
        monster.src = "./00" + ID + ".png";
        monster.style.width = "310px";
        monster.style.height = "310px";
    }
    else if (stage === 4) {
        ID--;
        alert("MEGA EVOLUTION!");
        monster.src = "./00" + ID + "M.png";
        monster.style.width = "320px";
        monster.style.height = "320px";
    }
    else if (stage === 5) {
        ID -= 2;
        alert("GIGANTAMAX FORM!");
        monster.src = "./00" + ID + "X.png";
        monster.style.width = "330px";
        monster.style.height = "330px";
    }
    especie();
}

chooseFight.onclick = function () {
    e_Hp = max_e_Hp + + count % 5 - 3;
    document.getElementById("vidaE").innerHTML = "HP: " + e_Hp;

    nomeEspecie.style.display = "none";
    HUD.style.display = "none";
    fightScreen.style.display = "block";
    titulo.innerHTML = "BATTLE!"

    monster.style.position = 'absolute';
    monster.style.bottom = '5vh';
    monster.style.left = '5vh';

    enemy.style.position = 'absolute';
    enemy.style.top = '5vh';
    enemy.style.right = '5vh';
    enemy.style.zIndex = -3;
    document.getElementById('enemyPic').src = "./enemy1.png";

    shot.style.display = "none";
    shot.src = "./att" + type + ".png";
    shot.style.width = "100px";
    shot.style.height = "100px";
}

att.onclick = function () {
    e_Hp -= count * stage;
    document.getElementById("vidaE").innerHTML = "HP: " + e_Hp;
    attackAnimation();


    document.getElementById("enemyPic").animate([{ scale: 0.93 }], 300);

    if (e_Hp < 1) {
        //VITORIA
        fightScreen.style.display = "none";
        alert("Vitoria! Recompensa: 10 XP");
        count += 10;
        restoreHUD();
        checkEvolve();
        max_e_Hp += 110;
    }

}

chooseRun.onclick = function () {
    alert("Escaped!");
    fightScreen.style.display = "none";
    restoreHUD();
    max_e_Hp += 15;
}

restoreHUD = function () {
    nomeEspecie.style.display = "block";
    HUD.style.display = "flex";
    titulo.innerHTML = "Evolve to fight";
    monster.style.position = '';
    chooseFight.style.display = 'block';
    treinar.innerHTML = "Nível: " + count;
}

attackAnimation = function () {
    shot.style.display = "block";
    shot.style.width = "10px";
    shot.style.height = "10px";
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
            transform: 'translate(0vh, 0vh)',
        },
        {
            transform: 'translate(200vh, -50vh)',
        }
    ], {
        duration: 150
    });

    shot.style.position = 'absolute';
    shot.style.bottom = '50px';
    shot.style.left = '50px';
    shot.style.width = "310px";
    shot.style.height = "310px";
    setTimeout(function () { shot.style.display = "none"; }, 150);

}
