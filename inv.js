//item 01: rare candy
//item 02: pokeball
//item 03: potion

let inv = [0, 0, 0, 0]

checkinv = function(){
if (inv[0] >0) rarecandy.style.display = "none";
if (inv[1] >0) pokeball.style.display = "none";
if (inv[2] >0) potion.style.display = "none";}

rarecandy.onclick = function(){
    xp+=50;
    treinar.innerHTML = "XP: " + count;
}

potion.onclick = function (){
    hp+=25;
    barraVida.innerHTML = "Vida: " + hp + "/ " + maxHp;

}