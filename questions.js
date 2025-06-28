

const questionList = [
    "Apa nama ibukota Jepang?",
    "Berapa penyelesaian untuk persamaan ini? 3(x-2) = x+6",
    "Apa Kepanjangan dari HTML?",
    "Apa nama planet terbesar di tata Surya?",
    "Yang mana kah yang termasuk Internet Browser?",
    "Siapakah penemu bola lampu pijar?",
    "Apa nama samudra terbesar di dunia?",
    "Berapa jumlah benua di dunia?",
    "Negara manakah yang dikenal sebagai 'Negeri Matahari Terbit'?",
    "lanet manakah yang dikenal sebagai 'Planet Merah'?",
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
    ["Adobe Photoshop", "Mozilla Firefox","File Explorer","Minecraft"],
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


const question6 = new QuestionTemplate(questionList[5],answerList[5],answerList[5][1]);
const question7 = new QuestionTemplate(questionList[6],answerList[6],answerList[6][3]);
const question8 = new QuestionTemplate(questionList[7],answerList[7],answerList[7][2]);
const question9 = new QuestionTemplate(questionList[8],answerList[8],answerList[8][2]);
const question10 = new QuestionTemplate(questionList[9],answerList[9],answerList[9][1]);

const questionObjectList1 = [];
const questionObjectList2 = [];

questionObjectList1.push(question1,question2,question3,question4,question5)
questionObjectList2.push(question6,question7,question8,question9,question10)

const questionSubject1 = new QuestionSubjectList("Math",questionObjectList1)
const questionSubject2 = new QuestionSubjectList("General",questionObjectList2)

const questionObjectList = []
questionObjectList.push(questionSubject1,questionSubject2);
