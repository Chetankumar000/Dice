var randomNumber1=Math.floor((Math.random()*6)+1);
function random(){
    if (randomNumber1===1){
        document.querySelector("img").setAttribute("src","images/dice1.png");
    }
    else if(randomNumber1===2){
        document.querySelector("img").setAttribute("src","images/dice2.png");
    }
    else if(randomNumber1===3){
        document.querySelector("img").setAttribute("src","images/dice3.png");
    }
    else if(randomNumber1===4){
        document.querySelector("img").setAttribute("src","images/dice4.png");
    }
    else if(randomNumber1===5){
        document.querySelector("img").setAttribute("src","images/dice5.png");
    }
    else if(randomNumber1===6){
        document.querySelector("img").setAttribute("src","images/dice6.png");
    }
}

var randomNumber2=Math.floor((Math.random()*6)+1);
function random2(){
    if (randomNumber2===1){
        document.querySelectorAll("img")[1].setAttribute("src","images/dice1.png");
    }
    else if(randomNumber2===2){
        document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");
    }
    else if(randomNumber2===3){
        document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");
    }
    else if(randomNumber2===4){
        document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");
    }
    else if(randomNumber2===5){
        document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");
    }
    else if(randomNumber2===6){
        document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");
    }
}
function heading(){
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML=" ๐๐Player 1 Wins";
        }
    else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML=" Player 2 Wins๐๐";
        }
    else if(randomNumber1 === randomNumber2){
        document.querySelector("h1").innerHTML=" DRAW๐๐";
        }
}
random();
random2();
heading();
