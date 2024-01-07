//apenas no input

function myKeyPress(e){
    var keynum;
  
    if(window.event) { // IE                  
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera                 
      keynum = e.which;
    }
  
    if(String.fromCharCode(keynum)== 'a'){
    //Treinar
      if (treinar.style.display != "none") treinar.onclick();
    //Lutar
      //if (chooseFight.style.display != "none") chooseFight.onclick();
    //Atacar

    }
  }

  //  <input type="text" onkeypress="return myKeyPress(event)" />
