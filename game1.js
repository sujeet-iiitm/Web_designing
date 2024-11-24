let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#res");

const userScorePara = document.querySelector("#you");
const compScorePara = document.querySelector("#comp");

const genCompChoice = () => {
    const game = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return game[index];
};

const drawGame = () => {
    msg.innerText = "Game was Draw! Play Again";
    msg.style.backgroundColor = "green";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors"? false : true;
        }else if (userChoice === "scissors"){
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

