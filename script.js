let playerName;
let randomIndexPicker;
const questionObjectList = []


let questionDisplay;
let choiceDisplay;
let indexPicker = 0;
let getButtonElement = []

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

function QuestionTemplate(question,choice,answer){
    this.question = question;
    this.choice = choice;
    this.answer = answer;
    
    
}

const question1 = new QuestionTemplate(questionList[0],answerList[0],answerList[0][3]);
const question2 = new QuestionTemplate(questionList[1],answerList[1],answerList[1][0]);
const question3 = new QuestionTemplate(questionList[2],answerList[2],answerList[2][1]);
const question4 = new QuestionTemplate(questionList[3],answerList[3],answerList[3][2]);
const question5 = new QuestionTemplate(questionList[4],answerList[4],answerList[4][1]);

questionObjectList.push(question1,question2,question3,question4,question5)



function getQueueQuestion(){
    let x;
    let question;
    for(x in questionObjectList){
        
    }
}

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
    playerName = document.getElementById("playerName").value
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
        
        for(x in choiceDisplay){
            
            if(getAnswer === choiceDisplay[x]){
                console.log("ini answerChoice = "+answerChoice)
                console.log("Ini x = "+x)
                console.log(choiceDisplay[x])
                
                getButtonElement[0] = document.getElementById("choice1")
                getButtonElement[1] = document.getElementById("choice2")
                getButtonElement[2] = document.getElementById("choice3")
                getButtonElement[3] = document.getElementById("choice4")
                console.log(true)
                getButtonElement[x].style.backgroundColor = "green"
            } else {
                console.log(choiceDisplay[x])
              
                getButtonElement[0] = document.getElementById("choice1")
                getButtonElement[1] = document.getElementById("choice2")
                getButtonElement[2] = document.getElementById("choice3")
                getButtonElement[3] = document.getElementById("choice4")
                console.log(false)
                getButtonElement[x].style.backgroundColor = "red"
                
            }
        }
    } else {
        for(x in choiceDisplay){
            
            if(getAnswer === choiceDisplay[x]){
                
                getButtonElement[0] = document.getElementById("choice1")
                getButtonElement[1] = document.getElementById("choice2")
                getButtonElement[2] = document.getElementById("choice3")
                getButtonElement[3] = document.getElementById("choice4")
                
                getButtonElement[x].style.backgroundColor = "green"
            } else {
                console.log(choiceDisplay[x])
              
                getButtonElement[0] = document.getElementById("choice1")
                getButtonElement[1] = document.getElementById("choice2")
                getButtonElement[2] = document.getElementById("choice3")
                getButtonElement[3] = document.getElementById("choice4")
                getButtonElement[x].style.backgroundColor = "red"
                
            }
        }
        
    }
    document.getElementById("next-button").innerHTML = '<button onclick="nextButton()" id="nextButton">Next Question</button>';
    

}

function nextButton(){
    for(x in getButtonElement){
        getButtonElement[x].style.backgroundColor = "";
    }
    indexPicker+=1;
    questionDisplay = questionObjectList[indexPicker].question;
    choiceDisplay = questionObjectList[indexPicker].choice;

    document.getElementById("question-display").textContent = questionDisplay;
    document.getElementById("choice1").textContent = choiceDisplay[0];
    document.getElementById("choice2").textContent = choiceDisplay[1];
    document.getElementById("choice3").textContent = choiceDisplay[2];
    document.getElementById("choice4").textContent = choiceDisplay[3];
    
    document.getElementById("nextButton").remove();
    document.getElementsByTagName("body").style.transition = "all 0.2s";
    
}