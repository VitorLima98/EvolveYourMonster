//apenas no input

function myKeyPress(e){
    var keynum;
  
    if(window.event) { // IE                  
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera                 
      keynum = e.which;
    }
    
    //Treinar
    if(String.fromCharCode(keynum) == 'a' || String.fromCharCode(keynum) == 'A' )
     if (treinar.style.display != "none" && treinar.disabled==false) treinar.onclick();
     else if (att.style.display != "none" && !att.disabled) att.onclick();
    //Lutar
    if(String.fromCharCode(keynum) == 'q' || String.fromCharCode(keynum) == 'Q' )
      if (chooseFight.style.display === "inline") chooseFight.onclick();
    //Escapar
    if(String.fromCharCode(keynum) == 's' || String.fromCharCode(keynum) == 'S')
      if (avoid.style.display === "inline") avoid.onclick();
    //Evoluir
    if(String.fromCharCode(keynum) == 'x' || String.fromCharCode(keynum) == 'X')
      if (chooseEvolve.style.display === "inline") chooseEvolve.onclick();
    
  }

  //A = Treinar/Atacar
  //Q = Entrar em luta
  //S = Fugir de uma luta
  //X = Evoluir seu monstro
  //  <input type="text" onkeypress="return myKeyPress(event)" />
