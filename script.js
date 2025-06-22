const questionList = [
    "What is capital of japan?",
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

