
document.querySelector("button").addEventListener("click", rollDice);

function rollDice() {
    var leftDice = Math.floor(Math.random() * 6) + 1;
    var rightDice = Math.floor(Math.random() * 6) + 1;

    document.getElementsByClassName("pics")[0].src = "../assets/dice" + leftDice + ".png";
    document.getElementsByClassName("pics")[1].src = "../assets/dice" + rightDice + ".png";
    
    

    if( leftdice > rightDice){
        document.getElementById("roll").textContent = "Player 1 wins";
    }else if( leftdice < rightDice){
        document.getElementById("roll").textContent = "Player 2 wins";
    }else{
        document.getElementById("roll").textContent = "DRAW";
    }
}
