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

//Evoluir
var chooseEvolve = document.getElementById("evoluir"), reset = 0;

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

//inventory

HUD.style.display = "none";
fightScreen.style.display = "none";
chooseFight.style.display = "none";
chooseEvolve.style.display = "none";
avoid.style.display = "none";

monster.style.height = monster.style.width = "15vh";
enemyPic.style.height = enemyPic.style.width = "20vh";
shot.style.height = eShot.style.height = "10vh";
shot.style.width = eShot.style.width = "10vh";
