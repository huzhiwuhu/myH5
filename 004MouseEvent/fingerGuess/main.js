var r,score=0,grade=1,lasthuman;
function rock(){
    document.getElementById("mychoice").innerHTML = "<img src=\"images/rock.jpg\"/>";
    judge("rock");
    lasthuman = "rock";
}
function scissors(){
    document.getElementById("mychoice").innerHTML = "<img src=\"images/scissors.jpg\"/>";
    judge("scissors");
    lasthuman = "scissors";
}
function paper(){
    document.getElementById("mychoice").innerHTML = "<img src=\"images/paper.jpg\"/>";
    judge("paper");
    lasthuman = "paper";
}
function judge(mychoice){
        var computerResult;
        r = 3*Math.random();
        if(grade == 1){
            computerResult = onlyRock();
        }
        else if(grade == 2){
            computerResult = lasthuman;
        }
        else{
            computerResult = computerchoice();
        }
        if(mychoice == "rock"){
            if (computerResult == "rock"){
                    ;
            }
            else if (computerResult == "scissors"){
                score +=1;
            }
            else {
                score -=1;
            }
        }
        else if (mychoice == "scissors"){
            if (computerResult == "rock"){
                score -=1;
            }
            else if (computerResult == "scissors"){
                    ;
            }
            else {
                score +=1;
            }
        }
        else{
            if (computerResult == "rock"){
                score +=1;
            }
            else if (computerResult == "scissors"){
                score -=1;
            }
            else {
                    ;
            }
        }
        if(score>=5){
            score = 0;
            grade +=1;
        }
        document.getElementById("result").innerHTML="第"+grade+"关，积分: " + score;
        if(grade >= 10){document.getElementById("result").innerHTML="NB！总通关啦！"}
    }
function go(){}
function computerchoice(){
    r = Math.random()*3;
    if (r < 1){
        document.getElementById("computerchoice").innerHTML = "<img src='images/rock.jpg'/>";
        // 注意这里要使用getElementById（），而不是body.innerHTML（）
        return "rock"
    } else if (r < 2){
        document.getElementById("computerChoice").innerHTML="<img src='images/animation.gif'/>";
        return "scissors";
    } else{
        document.getElementById("computerchoice").innerHTML = "<img src='images/paper.jpg'/>";
        return "paper";
    }
}
function onlyRock(){
    document.getElementById("computerchoice").innerHTML = "<img src='images/rock.jpg'/>";
    document.getElementById("computerName").innerHTML = "电脑大锤哥";
    return "rock";
}
function laernfromhuman(){
    document.getElementById("computerName").innerHTML = "<img src='images/"+lasthuman+".jpg'/>";
    document.getElementById("computerName").innerHTML = "模仿帝";
    return lasthuman;
}