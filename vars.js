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
var enemyPic = document.getElementById('enemyPic')
var fightScreen = document.getElementById("fightScreen");
var shot = document.getElementById("shot");
var eShot = document.getElementById("eShot");
var damage = document.getElementById("damage");
var barraVida = document.getElementById("health");
var barraInimigo = document.getElementById("enemyHealth");
var mato = document.getElementById("mato");

//inventory
var rarecandy = document.getElementById("rc");
var pokeball = document.getElementById("pb");
var potion = document.getElementById("pt");



var chooseEvolve = document.getElementById("evoluir");

var PRIME = document.getElementById("reset"), reset = 0;
var saveBtn = document.getElementById("save");
var loadBtn = document.getElementById("load");
var resetBtn = document.getElementById("erase");

var type = 0; //0-n 1-grass 2-fire 3-water
var grass = document.getElementById("grass"),
    water = document.getElementById("water"),
    fire = document.getElementById("fire"),
    ghost = document.getElementById("ghost");
var stageUp = false, stage = 1, count = 1;
//fight vars
var hp = 100, maxHp = 100, etype = 1, e_Hp = 250, max_e_Hp = 100;
var effectiveness = [[1, 1, 1, 1, 0],
[1, 0.5, 0.5, 2, 1],
[1, 2, 0.5, 0.5, 1],
[1, 0.5, 2, 0.5, 1],
[0, 1, 1, 1, 2]];
var danoFeito, danoRecebido;

//save system
var saved = false;

HUD.style.display = "none";
fightScreen.style.display = "none";
chooseFight.style.display = "none";
chooseEvolve.style.display = "none";
avoid.style.display = "none";

shot.style.display = "none";
eShot.style.display = "none";

monster.style.height = monster.style.width = "15vh";
enemyPic.style.height = enemyPic.style.width = "20vh";
shot.style.height = eShot.style.height = "10vh";
shot.style.width = eShot.style.width = "10vh";

keepData = function () {
    window.name = "saved"
    sessionStorage.setItem("level", count);
    sessionStorage.setItem("primes", reset);
    sessionStorage.setItem("typing", type);
    sessionStorage.setItem("phase", stage);
    sessionStorage.setItem("health", maxHp);
    alert("Salvo com sucesso!");
}

retrieveData = function () {
    if (window.name === "saved") {
        count = parseInt(sessionStorage.getItem("level"));
        reset = parseInt(sessionStorage.getItem("primes"));
        type = parseInt(sessionStorage.getItem("typing"));
        stage = parseInt(sessionStorage.getItem("phase"));
        hp = maxHp = parseInt(sessionStorage.getItem("health"));
        alert("Dados recuperados!");

        //reiniciar a HUD
        start();
        especie();
        playerImage();
        chooseEvolve.style.display = "none";
    }
    else {
        alert("Nenhum dado para recuperar!")
    }
}

resetData = function () {
    sessionStorage.setItem("level", 0);
    sessionStorage.setItem("primes", 0);
    sessionStorage.setItem("typing", 0);
    sessionStorage.setItem("phase", 0);
    sessionStorage.setItem("health", 0);
    window.name = "unsaved"
    alert("Dados apagados!")
}


