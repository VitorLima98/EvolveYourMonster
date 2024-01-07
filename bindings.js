//apenas no input

function myKeyPress(e){
    var keynum;
  
    if(window.event) { // IE                  
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera                 
      keynum = e.which;
    }
    
    //Treinar
    if(String.fromCharCode(keynum) == 'a')
     if (treinar.style.display != "none" && treinar.disabled==false) treinar.onclick();
     else if (att.style.display != "none" && !att.disabled) att.onclick();
    //Lutar
    if(String.fromCharCode(keynum) == 'q')
      if (chooseFight.style.display === "inline") chooseFight.onclick();
    //Escapar
    if(String.fromCharCode(keynum) == 's')
      if (avoid.style.display === "inline") avoid.onclick();
    //Evoluir
    if(String.fromCharCode(keynum) == 'x')
      if (chooseEvolve.style.display === "inline") chooseEvolve.onclick();
    
  }

  //  <input type="text" onkeypress="return myKeyPress(event)" />
