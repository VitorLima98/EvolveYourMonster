//item 0: rare candy
//item 1: pokeball
//item 2: potion

let inv = [0, 10, 1, 0];



checkinv = function(){
if (inv[0] <=0) rarecandy.style.display = "none";
else{
    rarecandy.style.display = "inline";
    rarecandy.innerHTML= "Doce Raro x" + inv[0];
}

if (inv[1] <=0) pokeball.style.display = "none";
else{
    pokeball.style.display = "inline";
    pokeball.innerHTML= "Pokébola x" + inv[1];
}
if (inv[2] <=0) potion.style.display = "none";
else{
    potion.style.display = "inline";
    potion.innerHTML= "Poção x" + inv[2];
}
}

rarecandy.onclick = function(){
    if(inv[0]>0){
    inv[0] -=1;
    rarecandy.innerHTML= "Doce Raro x" + inv[0];

    myTeam[selected].xp+=25;
    treinar.innerHTML = "XP: " + myTeam[selected].xp;
    }
    checkinv();

}

potion.onclick = function (){
    if (inv[2] >0){
        if(hp<maxHp){
        inv[2] -=1;
        potion.innerHTML= "Poção x" + inv[2];
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

pokeball.onclick = function (){

    var monsterName = "MissingNo"
     
    if (etype === 1) text += 'planta...';
    else if (etype === 2) text += 'fogo...';
    else text += 'água...';
    
    inv[1]--;

    if( Math.ceil(Math.random() * 20) ===5){
        
        alert("Boa! "+ monsterName + " foi capturado!");
        if(Math.ceil(Math.random() * 2)===2){
            let prize = Math.ceil(Math.random() * 5) +5
            alert("Conseguiu "+prize+" rare candies!")
           inv[0]+=prize; 
        } 

    }
    else alert ("Cacturne fugiu!");



    checkinv();
}