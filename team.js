 
poke[0].onclick = function(){
  alert(myTeam[selected].nickname + " agora vai descansar!");
  selected=0;
  swapPoke();
}

poke[1].onclick = function(){
  alert(myTeam[selected].nickname + " agora vai descansar!");
  selected=1;
  swapPoke();
}

poke[2].onclick = function(){
  alert(myTeam[selected].nickname + " agora vai descansar!");
  selected=2;
  swapPoke();
}

checkTeam = function(){


}

swapPoke = function(){
  alert("Vamos nessa, " + myTeam[selected].nickname + "!!");
  playerImage();
  especie()


}