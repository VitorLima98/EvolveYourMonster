//item 01: rare candy
//item 02: pokeball
//item 03: potion

let inv = [100, 0, 1, 0]

checkinv = function(){
if (inv[0] <=0) rarecandy.style.display = "none";
else{
    rarecandy.style.display = "inline";
    rarecandy.innerHTML= "Rare Candy x" + inv[0];
}

if (inv[1] <=0) pokeball.style.display = "none";
else{
    pokeball.style.display = "inline";
    pokeball.innerHTML= "Pokéball x" + inv[1];
}
if (inv[2] <=0) potion.style.display = "none";
else{
    potion.style.display = "inline";
    potion.innerHTML= "Potion x" + inv[2];
}
}

rarecandy.onclick = function(){
    if(inv[0]>0){
    inv[0] -=1;
    rarecandy.innerHTML= "Rare Candy x" + inv[0];

    count+=25;
    treinar.innerHTML = "XP: " + count;
    }
    checkinv();

}

potion.onclick = function (){
    if (inv[2] >0){
        if(hp<maxHp){
        inv[2] -=1;
        potion.innerHTML = "Potion x" +inv[2];
        hp+=25;
        if(hp>maxHp)hp=maxHp;
        vida.innerHTML = "Vida: " + hp + "/ " + maxHp;
        barraVida.value = hp;}
        else{
            alert("Já está 100% saudável!")
        }

    }
   
    checkinv();
}