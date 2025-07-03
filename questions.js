

const questionList = [
    "Hasil dari 2x+5=13 adalah..",
    "Jika sebuah segitiga memiliki panjang alas 10 cm dan tinggi 6 cm, maka luasnya adalah...",
    "Jika f(x)=2x-1, maka nilai f(4) adalah...",
    "Turunan pertama dari f(x)=3x^2+2x-5 adalah...",
    "Persamaan garis lurus dengan gradien 2 dan melalui titik (1, 3) adalah...",

    "Siapakah penemu bola lampu pijar?",
    "Apa nama samudra terbesar di dunia?",
    "Berapa jumlah benua di dunia?",
    "Negara manakah yang dikenal sebagai 'Negeri Matahari Terbit'?",
    "lanet manakah yang dikenal sebagai 'Planet Merah'?",
];

const answerList = [
    ["x = 4","x = 3","x = -4","x = -3"],
    ["16 cm","60 cm","30 cm","20 cm"],
    ["6", "7", "8", "9"],
    ["6x + 2","6x - 2","3x + 2","2x + 6"],
    ["2x + 5", "2x + 3","2x + 2","2x + 1"],
    ["Nikola Tesla","Thomas Edison","Alexander Graham Bell", "Marie Curie"],
    ["Samudra Atlantik","Samudra Hindia","Samudra Arktik","Samudra Pasifik"],
    ["5","6","7","8"],
    ["Tiongkok","Korea Selatan","Jepang","Vietnam"],
    ["Venus","Mars","Jupiter","Saturnus"]
];

function QuestionSubjectList(subject,questions){
    this.subject = subject;
    this.questions = questions;
}

function QuestionTemplate(question,choice,answer,queue){
    this.question = question;
    this.choice = choice;
    this.answer = answer;
    this.queue = queue
       
}

const question1 = new QuestionTemplate(questionList[0],answerList[0],answerList[0][0],1);
const question2 = new QuestionTemplate(questionList[1],answerList[1],answerList[1][1],2);
const question3 = new QuestionTemplate(questionList[2],answerList[2],answerList[2][1],3);
const question4 = new QuestionTemplate(questionList[3],answerList[3],answerList[3][0],4);
const question5 = new QuestionTemplate(questionList[4],answerList[4],answerList[4][3],5);


const question6 = new QuestionTemplate(questionList[5],answerList[5],answerList[5][1],1);
const question7 = new QuestionTemplate(questionList[6],answerList[6],answerList[6][3],2);
const question8 = new QuestionTemplate(questionList[7],answerList[7],answerList[7][2],3);
const question9 = new QuestionTemplate(questionList[8],answerList[8],answerList[8][2],4);
const question10 = new QuestionTemplate(questionList[9],answerList[9],answerList[9][1],5);

const questionObjectList1 = [];
const questionObjectList2 = [];

questionObjectList1.push(question1,question2,question3,question4,question5)
questionObjectList2.push(question6,question7,question8,question9,question10)

const questionSubject1 = new QuestionSubjectList("Math",questionObjectList1)
const questionSubject2 = new QuestionSubjectList("General",questionObjectList2)

const questionObjectList = []
questionObjectList.push(questionSubject1,questionSubject2);
