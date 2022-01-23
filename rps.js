
let cScore = 1
let pScore = 1
let round = 1

let items = ["rock","paper","scissors"]

function computerPlays(){
return items[Math.floor(Math.random() *items.length)]
}

function gameover(){
    if(cScore>pScore){alert("YOU LOSE")}
    else if(cScore<pScore){alert("YOU WIN")}
    else (alert("TIE"))
document.getElementById("compscore").innerHTML = 0;
document.getElementById("yourscore").innerHTML = 0;
document.getElementById("round").innerHTML = 0;
document.getElementById("coselection").innerHTML="";
cScore=1;
pScore=1;
round=1;
}


const rock = document.querySelector('.rock')
rock.addEventListener('click',() => {
document.getElementById("round").innerHTML = round++;
let resultcomplays = computerPlays();
document.getElementById("coselection").innerHTML = resultcomplays;
            document.getElementById("coselection")==resultcomplays
            if (resultcomplays==="rock"){
                if(round===6){gameover()
                    }
                }

            else if(resultcomplays==="scissors"){
                document.getElementById("yourscore").innerHTML = pScore++;
                if(round===6){gameover();
                    }
                 }

                else if(resultcomplays==="paper"){
                    document.getElementById("compscore").innerHTML = cScore++;
                    if(round===6){gameover();
                    }
                }

})

const paper = document.querySelector('.paper')
paper.addEventListener('click',() => {
document.getElementById("round").innerHTML = round++;
    let resultcomplays = computerPlays();
    document.getElementById("coselection").innerHTML = resultcomplays;
            if (resultcomplays==="paper"){
                console.log("TIE")
                if(round===6){gameover()}
                }

            else if(resultcomplays==="scissors"){
                document.getElementById("compscore").innerHTML = cScore++;
                if(round===6){gameover();
                    }
                }

                else if(resultcomplays==="rock"){
                    document.getElementById("yourscore").innerHTML = pScore++;
                    if(round===6){gameover();
                    }
                }          
})


const scissors = document.querySelector('.scissors')
scissors.addEventListener('click',() => {
document.getElementById("round").innerHTML = round++    
let resultcomplays = computerPlays();
document.getElementById("coselection").innerHTML = resultcomplays;
        
             if (resultcomplays==="scissors"){
                if(round===6){gameover()};
                }
             

            else if(resultcomplays==="paper"){
                document.getElementById("yourscore").innerHTML = pScore++;;
                if(round===6){gameover()}
                
            }

            else if(resultcomplays==="rock"){
                    document.getElementById("compscore").innerHTML = cScore++;
                    if(round===6){gameover();}
                   
                }
          
})





