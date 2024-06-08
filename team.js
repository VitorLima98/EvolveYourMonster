 
poke[0].onclick = function(){
  if(!selected===0){
   alert(myTeam[selected].nickname + " agora vai descansar!");
    selected=0;
    swapPoke(); 
  }
}

poke[1].onclick = function(){
  if(!selected===1){
    alert(myTeam[selected].nickname + " agora vai descansar!");
  selected=1;
  swapPoke();
  }
  
}

poke[2].onclick = function(){
  if(!selected===2){
    alert(myTeam[selected].nickname + " agora vai descansar!");
  selected=2;
  swapPoke();
  }
  
}

checkTeam = function(){


}

swapPoke = function(){
  alert("Vamos nessa, " + myTeam[selected].nickname + "!!");
  playerImage();
  especie();
  treinar.innerHTML = "XP: " + myTeam[selected].xp;
  vida.innerHTML = "Vida: " + myTeam[selected].hp + "/ " + myTeam[selected].maxHp;
  shot.src = "./att" + myTeam[selected].type + ".png";

}