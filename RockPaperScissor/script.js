const computer= document.querySelector(".computer img");
const player= document.querySelector(".player img");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");

let botSc=0;
let userSc=0;

const userScore=document.querySelector(".user-Score");
const botScore=document.querySelector(".bot-Score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}
const drawGame=()=>{
    msg.innerText= "Draw.Play Again.";
    msg.style.backgroundColor="#081b31";
}
const showScore=(userWin)=>{
    if(userWin){
        userSc++;
        userScore.innerText=userSc;
    }
    else{
        botSc++;
        botScore.innerText=botSc;
    }
}
const showWinner=(userWin)=>{
    if(userWin){
        msg.innerText= "You Win!";
        msg.style.backgroundColor="Green";
    }
    else{
        msg.innerText= "You Lose.";
        msg.style.backgroundColor="Red";
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        computer.classList.add("shakeComp");
        player.classList.add("shakePlayer");
        setTimeout(()=>{
            computer.classList.remove("shakeComp");
            player.classList.remove("shakePlayer");  
            let userChoice=choice.getAttribute("id");
            player.src="./"+userChoice+"Player.png";
            let compChoice=genCompChoice();
            computer.src="./"+compChoice+"Computer.png";
            if(userChoice===compChoice){
                //Draw Game
                drawGame();
            }
            else{
                let userWin=true;
                if(userChoice==="rock"){
                    userWin=(compChoice==="paper")?false:true; //scissors,paper
                }
                else if(userChoice==="paper"){
                    userWin=(compChoice==="scissors")?false:true; //rock,scissors
                }
                else {
                    userWin=(compChoice==="rock")?false:true; //rock,paper
                }
                showWinner(userWin);
                showScore(userWin);
            }
    },900);

    })
})