var shotDuration = 1000;

chooseFight.onclick = function () {
    //grass animation
    
    chooseFight.style.display = "none";
    avoid.style.display = "none";
    att.disabled = false;
    e_Hp = max_e_Hp + count % 5 - 3;
    hp = maxHp;


    nomeEspecie.style.display = "none";
    HUD.style.display = "none";
    fightScreen.style.display = "block";
    att.style.display = "inline";
    titulo.innerHTML = ""

    hpBarCreate();
    barraVida.style.position = 'absolute';
    barraVida.style.bottom = '10vh';
    barraVida.style.left = '5vw';
    barraVida.innerHTML = "Vida: " + hp + "/ " + maxHp;

    monster.style.position = 'absolute';
    monster.style.bottom = '15vh';
    monster.style.left = '5vw';

    vida.style.position = 'absolute';
    vida.style.bottom = '10vh';
    vida.style.left = '10vh';

    enemy.style.position = 'absolute';
    enemy.style.top = '15vh';
    enemy.style.right = '5vw';

    enemyPic.src = "./enemy" + etype + ".png";
    eShot.src = "./att" + etype + ".png";

    stopfight = setInterval(function () { enemyAttack() }, 1500);

}

att.onclick = function () {
    att.disabled = true;
    danoFeito = Math.ceil(Math.random() * 6);
    danoFeito += count * stage * effectiveness[type][etype];
    e_Hp -= danoFeito;

    if (e_Hp > 0) {
        setTimeout(function () { att.disabled = false; }, shotDuration * 1.2);
    }

    attackAnimation();
    setTimeout(function () { damageText(); }, shotDuration * 0.8);
}

hpBarCreate = function () {
    barraVida.value = hp;
    barraVida.max = maxHp;

    barraInimigo.value = barraInimigo.max = max_e_Hp;
}

damageText = function () {
    damage.innerHTML = "- " + danoFeito;
    damage.style.display = "block";

    offX = 25 - Math.ceil(Math.random() * 20);
    offY = 25 - Math.ceil(Math.random() * 50);;
    damage.animate([
        {
            transform: 'translate(0%, 0%)'
        },
        {
            transform: 'translate(' + offX + '%,' + offY + '%)'
        }
    ], {
        duration: 300
    });

    setTimeout(function () { damage.style.display = "none"; }, 300);

}

victory = function () {
    fightScreen.style.display = "none";
    att.style.display = "none";
    alert("Vitoria! Recompensa: 10 XP");
    count += 10;
    restoreHUD();
    checkEvolve();
    max_e_Hp += 110;

        // Loot drop
    if (Math.ceil(Math.random() * 20) === 2) {
        alert("Ganhou 1x Rare Candy!");
        inv[0]+=1;
        checkinv();
    }
    if (Math.ceil(Math.random() * 100) === 2) {
        alert("Ganhou 1x Poké Ball!");
        inv[1]+=1;
        checkinv();
    }
    if (Math.ceil(Math.random() * 5) === 2) {
        alert("Ganhou 1x Potion!");
        inv[2]+=1;
        checkinv();
    }
    
    chooseFight.style.display = "none";
}

enemyAttack = function () {

    enemyPic.animate([
        {
            transform: 'translate(0%, 0%)'
        },
        {
            transform: 'translate(-3%, +3%)'
        }
    ], {
        duration: 100
    });
    danoRecebido = (1 + Math.floor(Math.random() * 10)) + 10;
    hp -= danoRecebido;

    eShot.style.position = 'absolute';
    eShot.style.top = enemy.style.top;
    eShot.style.right = enemy.style.right;
    eShot.style.display = "block";

    setTimeout(function () { eShot.style.display = "none"; }, 1000);

    eShot.animate([
        {
            transform: "translate(0px, 0px)"
        },
        {
            transform: "translate(-90vw, 60vh)"
        }
    ], {
        duration: 1000
    });

    setTimeout(function () { playerHit() }, 800);
}

chooseRun.onclick = function () {
    escapeBattle();
    chooseFight.style.display = "none";
}

escapeBattle = function () {
    alert("Fugiu em segurança!");
    fightScreen.style.display = "none";
    chooseFight.style.display = "none";
    att.style.display = "none";
    restoreHUD();
    max_e_Hp += 15;
    clearInterval(stopfight);
}


attackAnimation = function () {
    monster.animate([
        {
            transform: 'translate(0%, 0%)'
        },
        {
            transform: 'translate(10%, -10%)'
        }
    ], {
        duration: 100
    });

    shot.animate([
        {
            transform: "translate(0px, 0px)"
        },
        {
            transform: "translate(75vw, -55vh)"
        }
    ], {
        duration: shotDuration
    });

    shot.style.position = 'absolute';
    shot.style.bottom = monster.style.bottom;
    shot.style.left = monster.style.left;
    shot.style.display = "block";
    setTimeout(function () { shot.style.display = "none"; }, shotDuration);
    setTimeout(function () { enemyHit() }, shotDuration * 0.8);
}

enemyHit = function () {
    enemyPic.animate([{ scale: 0.93 }], 300);
    if (e_Hp <= 0) {
        e_Hp = 0;
        clearInterval(stopfight);
    }
    //document.getElementById("vidaE").innerHTML = "HP: " + e_Hp;
    barraInimigo.value = e_Hp;
    //if(e_Hp <= (max_e_Hp/2)) barraInimigo.getAttribute.
    if (e_Hp <= 0) { setTimeout(function () { victory();; }, shotDuration * 0.5); }
}

playerHit = function () {
    monster.animate([{ scale: 0.93 }], 300);
    vida.innerHTML = "Vida: " + hp + "/ " + maxHp;
    barraVida.value = hp;
    if (hp <= 0) {
        alert("Derrota!");
        escapeBattle();
    }

}

