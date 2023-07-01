var button = document.getElementById("click"), count = 0;

var type = 0; //0-n 1-grass 2-fire 3-water
var grass = document.getElementById("grass"),
    water = document.getElementById("water"),
    fire = document.getElementById("fire");
var stageUp = false, stage = 1;

var actionEvolve = document.getElementById("evoluirBotao");

document.getElementById('botaoT').style.display = "none";
document.getElementById('evoluirBotao').style.display = "none";

button.onclick = function () {
    count++;
    button.innerHTML = "Força: " + count;
    if (count > 6 * stage && stage < 5) {
        stageUp = true;
        evoluir();
    }
};

grass.onclick = function () {
    document.getElementById('titulo').className = '';
    document.getElementById('titulo').classList.add('green_text_animated')
    document.getElementById('monster').src = "./001.png";
    document.getElementById('escolherBicho').style.display = "none";
    document.getElementById('botaoT').style.display = "block";
    type = 1;
    especie();
}

fire.onclick = function () {
    document.getElementById('titulo').className = '';
    document.getElementById('titulo').classList.add('fire_text_animated')
    document.getElementById('monster').src = "./004.png";
    document.getElementById('escolherBicho').style.display = "none";
    document.getElementById('botaoT').style.display = "block";
    type = 2;
    especie();
}

water.onclick = function () {
    document.getElementById('titulo').className = '';
    document.getElementById('titulo').classList.add('water_text_animated')
    document.getElementById('monster').src = "./007.png";
    document.getElementById('escolherBicho').style.display = "none";
    document.getElementById('botaoT').style.display = "block";
    type = 3;
    especie();
}


especie = function () {
    //GRASS
    if (type === 1 && stage === 1)
        document.getElementById('especie').innerHTML = "Bulbasaur";
    else if (type === 1 && stage === 2)
        document.getElementById('especie').innerHTML = "Ivysaur";
    else if (type === 1 && stage === 3)
        document.getElementById('especie').innerHTML = "Venusaur";
    else if (type === 1 && stage === 4) {
        document.getElementById('especie').innerHTML = "Mega Venusaur";
        document.getElementById('especie').classList.add('green_text_animated')
    }
    else if (type === 1 && stage === 5) {
        document.getElementById('especie').innerHTML = "G-MAX Venusaur";
        document.getElementById('especie').className = '';
        document.getElementById('especie').classList.add('rainbow_text_animated')
    }
    //FIRE
    if (type === 2 && stage === 1)
        document.getElementById('especie').innerHTML = "Charmander";
    else if (type === 2 && stage === 2)
        document.getElementById('especie').innerHTML = "Charmeleon";
    else if (type === 2 && stage === 3)
        document.getElementById('especie').innerHTML = "Charizard";
    else if (type === 2 && stage === 4) {
        document.getElementById('especie').innerHTML = "Mega Charizard";
        document.getElementById('especie').classList.add('fire_text_animated')
    }
    else if (type === 2 && stage === 5) {
        document.getElementById('especie').innerHTML = "G-MAX Charizard";
        document.getElementById('especie').className = '';
        document.getElementById('especie').classList.add('rainbow_text_animated')
    }
    //WATER
    if (type === 3 && stage === 1)
        document.getElementById('especie').innerHTML = "Squirtle";
    else if (type === 3 && stage === 2)
        document.getElementById('especie').innerHTML = "Wartortle";
    else if (type === 3 && stage === 3)
        document.getElementById('especie').innerHTML = "Blastoise";
    else if (type === 3 && stage === 4) {
        document.getElementById('especie').innerHTML = "Mega Blastoise";
        document.getElementById('especie').classList.add('water_text_animated')
    }
    else if (type === 3 && stage === 5) {
        document.getElementById('especie').innerHTML = "G-MAX Blastoise";
        document.getElementById('especie').className = '';
        document.getElementById('especie').classList.add('rainbow_text_animated')
    }
}

evoluir = function () {
    let ID = ++stage;
    if (type === 2) ID += 3;
    else if (type === 3) ID += 6;


    if (stage < 4) {
        alert("EVOLUTION!");
        document.getElementById('monster').src = "./00" + ID + ".png";
        document.getElementById('monster').style.width = "310px";
        document.getElementById('monster').style.height = "310px";
    }
    else if (stage === 4) {
        ID--;
        alert("MEGA EVOLUTION!");
        document.getElementById('monster').src = "./00" + ID + "M.png";
        document.getElementById('monster').style.width = "320px";
        document.getElementById('monster').style.height = "320px";
    }
    else if (stage === 5) {
        ID -= 2;
        alert("GIGANTAMAX FORM!");
        document.getElementById('monster').src = "./00" + ID + "X.png";
        document.getElementById('monster').style.width = "330px";
        document.getElementById('monster').style.height = "330px";
        document.getElementById('evoluirBotao').style.display = "none";
    }
    especie();
    document.getElementById('evoluirBotao').style.display = "none";
}