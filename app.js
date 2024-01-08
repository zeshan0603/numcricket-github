

const userRunsEle = document.getElementById("runs");
const backBtn = document.getElementById("back");
const saveBtn = document.getElementById("save");
const userWicketsEle = document.getElementById("wickets");
const gameKeys = document.querySelectorAll(".game__keys");
const computerChoiceEle = document.getElementById("computerChoice");
const outMessage = document.getElementById("out");
const highScoreContainer = document.getElementById("highscore__list");
let userWickets = 0;
let userRuns = 0;
const computerChoiceArr = [1,2,3,4,6];
let computerChoice = 0;
let highScoreArr = [];
const maxWickets = 3;
let wicketDown = false;
let wicketLeft = true;




function resetGame(){
    userRuns = 0;
    saveBtn.style.display ="none";
    backBtn.style.display = "block";
    userWickets =0;
    computerChoice = 0;
    outMessage.style.opacity ="0";
    outMessage.textContent ="OUT";
    userWicketsEle.textContent = "0";
    computerChoiceEle.textContent = "0"
    userRunsEle.textContent = "0";
    wicketDown = false;
    wicketLeft = true;
    console.log("reset")
}


gameKeys.forEach(function(element,index){
    element.addEventListener('click',function(){

        let userChoice = getRun(element);
        console.log(userChoice)
        let randomNumber = Math.floor((Math.random() * 5));
        computerChoice = computerChoiceArr[randomNumber];
      
        if(wicketLeft){
           computerChoiceEle.textContent = computerChoice;
           console.log("game on");
           outMessage.style.opacity ="0";
           wicketDown = false;
           if(userChoice==computerChoice){
            wicketDown = true;
            userWickets++;
            console.log("wicket++")
            console.log("computer matches user");
            userWicketsEle.textContent = userWickets;
            outMessage.style.opacity ="1";
            if(wicketDown&&userWickets<maxWickets){
                wicketDown = false;
                console.log("out");
            } else{
                wicketLeft = false;
                outMessage.textContent ="0 wickets left game over";
                console.log("wicket not left");
                backBtn.style.display ="none";
                saveBtn.style.display ="block"
            }
           } else{
            userRuns+=userChoice;
            userRunsEle.textContent = userRuns;
            console.log("wicket left")
           }

        } 

    })
})

function getRun(element){
   return Number(element.getAttribute("value"));
}

function getFinalScore() {
    const highScore = document.getElementById("runs").textContent;
    highScoreArr.push(highScore);
    // Convert the array to a string before storing in localStorage
    localStorage.setItem('highScore', JSON.stringify(highScoreArr)); 
    // showHighScore();
    let storedScore = JSON.parse(localStorage.getItem("highScore")); // Parse the stored string back to an array
            console.log(storedScore)
  }
  