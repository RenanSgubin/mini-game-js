
function setMidBallBlue(){
    document.getElementsByClassName("mid-ball")[0].style.backgroundColor = "rgb(41, 112, 243)";
}

function setMidBallRed(){
    document.getElementsByClassName("mid-ball")[0].style.backgroundColor = "rgb(216, 48, 48)";
}

function setMidBallBlack(){
    document.getElementsByClassName("mid-ball")[0].style.backgroundColor = "rgb(31, 31, 31)";
}


let auxPlayer = 1;
let auxBot = 1;

function randomNumbers(player){

    //Jogador
    let randoms = (Math.floor(Math.random() * 100 + 1));
    document.getElementsByClassName("random-number-impar")[0].innerHTML = randoms;


    //Jogador2
    let randomsBot = (Math.floor(Math.random() * 100 + 1));
    document.getElementsByClassName("random-number-par")[0].innerHTML = randomsBot;

    

    if(player === "player1"){
        if(randoms > randomsBot) {
            document.getElementsByClassName("winner-impar-points")[0].innerHTML = auxPlayer++;
            document.getElementsByClassName("winner-impar")[0].innerHTML = "Jogador 1 Ganhou!";
            document.getElementsByClassName("winner-par")[0].innerHTML = "Jogador 2 Perdeu";
        }

        if(randomsBot > randoms) {
            document.getElementsByClassName("winner-par-points")[0].innerHTML = auxBot++;
            document.getElementsByClassName("winner-par")[0].innerHTML = "Jogador 2 Ganhou!";
            document.getElementsByClassName("winner-impar")[0].innerHTML = "Jogador 1 Perdeu";
        }
    }

    if(player === "player2"){
        if(randomsBot > randoms){
            document.getElementsByClassName("winner-par-points")[0].innerHTML = auxBot++;
            document.getElementsByClassName("winner-par")[0].innerHTML = "Jogador 2 Ganhou!";
            document.getElementsByClassName("winner-impar")[0].innerHTML = "Jogador 1 Perdeu";
        }

        if(randoms > randomsBot){
            document.getElementsByClassName("winner-impar-points")[0].innerHTML = auxPlayer++;
            document.getElementsByClassName("winner-impar")[0].innerHTML = "Jogador 1 Ganhou!";
            document.getElementsByClassName("winner-par")[0].innerHTML = "Jogador 2 Perdeu";
        }
    }

   

}

