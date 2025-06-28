

let playerName;

let subjectChoice;
let questionDisplay;
let choiceDisplay;
let indexPicker = 0;
const getButtonElement = []
let playerScore = 0


console.log(questionObjectList)
//template untuk question Object



//menginisiasi player object

const player = {
    name: localStorage.getItem("playerName"),
    score: localStorage.getItem("score")
};


//menginisiasi 



//Menampilkan Soal pertama dengan onload pada quiz.html

function subjectDisplay(){
    for(let x in questionObjectList){

        let container = document.getElementById("button-subject")

        container.insertAdjacentHTML ("beforeend",`<button onclick="onQuizPages(${x})">${questionObjectList[x]["subject"]}</button>`)
    }
}

function onQuizPages(choice){
    window.location.href = "quiz.html"
    localStorage.setItem("subjectChoice",choice);

}





function getFirstQuestionDisplay(){
    subjectChoice = localStorage.getItem("subjectChoice")

    console.log("ini SubjectChoice getFirstQuestionDisplay: "+subjectChoice);
    
    questionDisplay = questionObjectList[subjectChoice]["questions"][indexPicker].question;
    choiceDisplay = questionObjectList[subjectChoice]["questions"][indexPicker].choice;
    console.log(questionDisplay);
    document.getElementById("question-display").textContent = questionDisplay;
    document.getElementById("choice1").textContent = choiceDisplay[0];
    document.getElementById("choice2").textContent = choiceDisplay[1];
    document.getElementById("choice3").textContent = choiceDisplay[2];
    document.getElementById("choice4").textContent = choiceDisplay[3];
}

function startButton(){
    playerName = document.getElementById("playerName").value;
    localStorage.setItem("playerName",playerName);
    if(playerName){
        let button = document.getElementById("start-button").onclick;
        button = window.location.href="subject.html";   
    } else {
        document.getElementById("alert-result").textContent = "Input Player Name First!"
    }
}

function answerButton(answerChoice){
    let x;
    let getAnswer = questionObjectList[subjectChoice]["questions"][indexPicker].answer;
    choiceDisplay = questionObjectList[subjectChoice]["questions"][indexPicker].choice;

    getButtonElement[0] = document.getElementById("choice1")
    getButtonElement[1] = document.getElementById("choice2")
    getButtonElement[2] = document.getElementById("choice3")
    getButtonElement[3] = document.getElementById("choice4")

    if(getAnswer == answerChoice){ 

        /*Mengecek jika nextButton ada, maka score tidak akan bertambah meskipun 
        anwerButton diclick terus menerus
        */
        if(!document.getElementById("nextButton")){
            playerScore+=1;
        }

        
        
        //Mengganti warna answerButton
        //jika benar maka berwarna hijau
        //jika salah maka berwarna merah
        for(x in choiceDisplay){   
            if(getAnswer === choiceDisplay[x]){
                getButtonElement[x].style.backgroundColor = "green"
            } else {
                getButtonElement[x].style.backgroundColor = "red"  
            }
        }
    } else {
        for(x in choiceDisplay){   
            if(getAnswer === choiceDisplay[x]){
                getButtonElement[x].style.backgroundColor = "green"
            } else {
                getButtonElement[x].style.backgroundColor = "red"  
            }
        }  
    }

    //mengecek jika pertanyaan terakhir, maka yang keluar adalah "next question"
    //jika sudah pertanyaan terakhir, maka yang keluar adalah "Finish Quiz"
    if(indexPicker <= questionObjectList[subjectChoice]["questions"].length-2){
        document.getElementById("next-button").innerHTML = '<button onclick="nextButton()" id="nextButton">Next Question</button>';  
    } else {
        document.getElementById("next-button").innerHTML = '<button onclick="nextButton()" id="nextButton">Finish Quiz</button>';
    }
}

function nextButton(){
    //Mengecek jika belum soal terakhir, maka akan berlanjut ke soal selanjutnya
    //jika sudah soal terakhir, maka akan memanggil fungsi displayScoreButton()
    indexPicker+=1;
    if(indexPicker <= questionObjectList[subjectChoice]["questions"].length-1){

        //Mengembalikan answerButton ke warna semula
        for(x in getButtonElement){
            getButtonElement[x].style.backgroundColor = "";
        }
        questionDisplay = questionObjectList[subjectChoice]["questions"][indexPicker].question;
        choiceDisplay = questionObjectList[subjectChoice]["questions"][indexPicker].choice;

        document.getElementById("question-display").textContent = questionDisplay;
        document.getElementById("choice1").textContent = choiceDisplay[0];
        document.getElementById("choice2").textContent = choiceDisplay[1];
        document.getElementById("choice3").textContent = choiceDisplay[2];
        document.getElementById("choice4").textContent = choiceDisplay[3];
        
        document.getElementById("nextButton").remove();
        
    } else {
        displayScoreButton()
    }
}

function displayScoreButton(){
    //menyimpan final score ke local storage, yang nanti akan dimasukan ke player object
    localStorage.setItem("score",playerScore)

    

    //mengarahkan ke result.html page
    window.location.href = "result.html"
}

function displayScore(){

    subjectChoice = localStorage.getItem("subjectChoice")

    //menampilkan nama dan score palyer
    document.getElementById("player-score").innerHTML = `${player.score}/${questionObjectList[subjectChoice]["questions"].length}`;
    document.getElementById("player-name").innerHTML = player.name;
    if(player.score <= 6){
        document.getElementById("finish-messages").textContent = "Better luck next Time"
    }

    else if (player.score > 6 && player.score <= 8){
        document.getElementById("finish-messages").textContent = "You did so well!"
    }
    else{
        document.getElementById("finish-messages").textContent = "You are Genius!"
    }
    
}

function buttonBackToMenu(){
    window.location.href = "index.html"
}