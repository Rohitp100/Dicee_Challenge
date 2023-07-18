var randomno1 = Math.floor(Math.random()*6) + 1;
var address1 = "images/dice" + randomno1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", address1);

var randmno2 = Math.floor(Math.random()*6) + 1;
var address2 = "images/dice" + randomno2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", address2);

if(randomno1 > randomno2){
    document.querySelector("h1").innerHTML = "Player 1 wins."
}

else if(randomno1 < randomno2){
    document.querySelector("h1").innerHTML = "Player 2 wins."
}

else{
    document.querySelector("h1").innerHTML = "Draw";
}