var button = document.getElementById("click"), count = 0;

var type = 0; //0-n 1-grass 2-water 3-fire
var grass = document.getElementById("grass"),
    water = document.getElementById("water"),
    fire = document.getElementById("fire");

button.onclick = function () {
    count++;
    button.innerHTML = "Força: " + count;

};

grass.onclick = function () {
    document.getElementById('titulo').className = '';
    document.getElementById('titulo').classList.add('green_text_animated')
    document.getElementById('monster').checkVisibility;
}
water.onclick = function () {
    document.getElementById('titulo').className = '';
    document.getElementById('titulo').classList.add('water_text_animated')
}
fire.onclick = function () {
    document.getElementById('titulo').className = '';
    document.getElementById('titulo').classList.add('fire_text_animated')
}

