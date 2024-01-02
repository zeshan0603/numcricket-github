let userRuns = 0;
const userRunsEle = document.getElementById("runs");
let userWickets = 0;
const userWicketsEle = document.getElementById("wickets");
const gameKeys = document.querySelectorAll(".game__keys");
const computerChoiceArr = [1,2,3,4,6];
const computerChoiceEle = document.getElementById("computerChoice");
let computerChoice = 0;
const outMessage = document.getElementById("out");
const maxWickets = 3;
let wicketDown = false;
let wicketLeft = true;


if(wicketLeft){
    
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
            if(wicketDown&&userWickets<maxWickets){
                outMessage.style.opacity ="1";
                wicketDown = false;
                console.log("out");
            } else{
                wicketLeft = false;
                outMessage.textContent ="game over";
                console.log("wicket not left");
            }
           } else{
            userRuns+=userChoice;
            userRunsEle.textContent = userRuns;
            console.log("wicket")
           }

        } else{
            console.log("game over");
            outMessage.style.opacity ="1";
            outMessage.textContent ="game over";
        }

        // outMessage.style.opacity = 0;



        // if(userChoice==computerChoice){
        //     wicketDown = true;
        //     if(userWickets<maxWickets && wicketDown){
        //         outMessage.style.opacity = 1;
        //         userWickets++;
        //         userWicketsEle.textContent = userWickets;
        //         userChoice = 0;
        //         computerChoice =0;
        //         wicketDown = false;
        //     } else{
        //         wicketLeft =false;
        //         outMessage.textContent = "OVER";
        //     }
        // } 
    })
})

function getRun(element){
   return Number(element.getAttribute("value"));
}

