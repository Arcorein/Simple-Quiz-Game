let playerName;
let randomIndexPicker;
const questionObjectList = []

let questionDisplay;
let choiceDisplay;
let indexPicker = 0;
let getButtonElement = []
let playerScore = 0

const questionList = [
    "What is capital of Japan?",
    "What the value of x according to this equation? 3(x-2) = x+6",
    "What HTML is stand for?",
    "What the biggest planet on solar system?",
    "Wich one is Internet Browser?"
];

const answerList = [
    ["Kyoto","Hiroshima","Osaka","Tokyo"],
    ["6","-6","3","-3"],
    ["Hyper Tool Machine Language",
     "Hyper Text Markup Language",
     "High Text Machine Language",
     "Hyper Transfer Media Link"   
    ],
    ["Uranus","Neptunus","Yupiter","Mars"],
    ["Adobe Photoshop", "Mozilla Firefox","File Explorer","Minecraft"]
];

//template untuk question Object

function QuestionTemplate(question,choice,answer){
    this.question = question;
    this.choice = choice;
    this.answer = answer;
       
}

//menginisiasi player object

const player = {
    name: localStorage.getItem("playerName"),
    score: localStorage.getItem("score")
};


//menginisiasi 
const question1 = new QuestionTemplate(questionList[0],answerList[0],answerList[0][3]);
const question2 = new QuestionTemplate(questionList[1],answerList[1],answerList[1][0]);
const question3 = new QuestionTemplate(questionList[2],answerList[2],answerList[2][1]);
const question4 = new QuestionTemplate(questionList[3],answerList[3],answerList[3][2]);
const question5 = new QuestionTemplate(questionList[4],answerList[4],answerList[4][1]);

questionObjectList.push(question1,question2,question3,question4,question5)


//Menampilkan Soal pertama dengan onload pada quiz.html
function getFirstQuestionDisplay(){

    
    questionDisplay = questionObjectList[indexPicker].question;
    choiceDisplay = questionObjectList[indexPicker].choice;

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
        button = window.location.href="quiz.html";   
    } else {
        document.getElementById("alert-result").textContent = "Input Player Name First!"
    }
}

function answerButton(answerChoice){
    let x;
    let getAnswer = questionObjectList[indexPicker].answer;
    choiceDisplay = questionObjectList[indexPicker].choice;
    
    if(getAnswer == answerChoice){ 

        /*Mengecek jika nextButton ada, maka score tidak akan bertambah meskipun 
        anwerButton diclick terus menerus
        */
        if(!document.getElementById("nextButton")){
            playerScore+=1;
        }

        getButtonElement[0] = document.getElementById("choice1")
        getButtonElement[1] = document.getElementById("choice2")
        getButtonElement[2] = document.getElementById("choice3")
        getButtonElement[3] = document.getElementById("choice4")
        
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
    if(indexPicker <= questionObjectList.length-2){
        document.getElementById("next-button").innerHTML = '<button onclick="nextButton()" id="nextButton">Next Question</button>';  
    } else {
        document.getElementById("next-button").innerHTML = '<button onclick="nextButton()" id="nextButton">Finish Quiz</button>';
    }
}

function nextButton(){
    //Mengecek jika belum soal terakhir, maka akan berlanjut ke soal selanjutnya
    //jika sudah soal terakhir, maka akan memanggil fungsi displayScoreButton()
    indexPicker+=1;
    if(indexPicker <= questionObjectList.length-1){
        for(x in getButtonElement){
            getButtonElement[x].style.backgroundColor = "";
        }
        questionDisplay = questionObjectList[indexPicker].question;
        choiceDisplay = questionObjectList[indexPicker].choice;

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
    //menampilkan nama dan score palyer
    document.getElementById("player-score").innerHTML = `${player.score}/${questionObjectList.length}`;
    document.getElementById("player-name").innerHTML = player.name;
    
}

function buttonBackToMenu(){
    window.location.href = "index.html"
}