let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const GenCompChoice=()=>{
  const option=["rock","paper","scissor"];
  const randIdx=Math.floor(Math.random()*3);
  return option[randIdx];
}

const drawGame= ()=>{
   console.log("draw game");
  msg.innerText="game was draw ,try again";
  msg.style.backgroundColor="#081b31";
}

const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
      //console.log("you win");
      userScore++;
      userScorePara.innerText=userScore;
      msg.innerText=`you win. your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor="green";
    } else{
       // console.log("you lose");
       compScore++;
       compScorePara.innerText=compScore;
        msg.innerText=`you win. ${compChoice} beats your ${compChoice}`;
        msg.style.backgroundColor="red";
    }
  
}

const playgame=(userChoice)=>{
    console.log("userChoice",userChoice);
    // generate comp choice
    const compChoice=GenCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice === compChoice){
    //draw
    drawGame();
} else{
    let userwin=true;
    if(userChoice="rock"){
        // compchoice- scissor,paper hoy shake
        userwin= compChoice==="paper"?false:true;
    } else if(userChoice==="paper"){
        // comp- rock , scissor
        userwin=compChoice==="scissor"?false:true;
    } else{
        userwin=compChoice==="rock"?false:true;
    }
    showWinner(userwin,userChoice,compChoice);
}
}


choices.forEach((choice)=>{
    console.log(choice);
choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
//  console.log("choice waas clicked",userChoice);
 playgame(userChoice);
})
})