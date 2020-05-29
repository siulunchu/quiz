// select all elements-------------------------------------
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");



// create our questions-------------------------------------
let questions = [




{question : "What is this?" , imgSrc: "pictures/ships/RU/Alligator.jpg", choiceA: "A:Balzam", choiceB: "B:Gepard", choiceC: "C: Alligator", choiceD: "D: Vishnya", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Balzam.jpeg", choiceA: "A:Kashin", choiceB: "B:Gren", choiceC: "C: Steregushchiy2", choiceD: "D: Balzam", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Bykov.jpg", choiceA: "A:Sviyazhsk", choiceB: "B:Bykov", choiceC: "C: Degach", choiceD: "D: Grisha", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Degach.jpg", choiceA: "A:Gorshkov", choiceB: "B:Krivak1", choiceC: "C: Degach", choiceD: "D: Kashin", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Gepard.jpg", choiceA: "A:Kuznetsov", choiceB: "B:Uragan", choiceC: "C: Gepard2", choiceD: "D: Steregushchiy1", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Gepard1.jpg", choiceA: "A:Gren", choiceB: "B:Ropucha", choiceC: "C: Kashin", choiceD: "D: Gepard1", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Gorshkov.jpg", choiceA: "A:Bykov", choiceB: "B:Gorshkov", choiceC: "C: Vishnya", choiceD: "D: Kara", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Grachonok.jpg", choiceA: "A:Ropucha", choiceB: "B:Kirov", choiceC: "C: Grachonok", choiceD: "D: Tarantul", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Gren.jpg", choiceA: "A:Gepard1", choiceB: "B:Bykov", choiceC: "C: Parchim", choiceD: "D: Gren", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Grigorovich.jpg", choiceA: "A:Grisha", choiceB: "B:Grigorovich", choiceC: "C: Krivak2", choiceD: "D: Krivak1", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Grisha.jpg", choiceA: "A:Tarantul", choiceB: "B:Grisha", choiceC: "C: Gorshkov", choiceD: "D: Vishnya", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Kara.jpg", choiceA: "A:Gorshkov", choiceB: "B:Kara", choiceC: "C: Uragan", choiceD: "D: Gren", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Kashin.jpg", choiceA: "A:Kashin", choiceB: "B:Udaloy2", choiceC: "C: Grachonok", choiceD: "D: Vishnya", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Kirov.jpg", choiceA: "A:Gepard", choiceB: "B:Steregushchiy2", choiceC: "C: Neustrashimyy", choiceD: "D: Kirov", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Krivak1.jpg", choiceA: "A:Nanuchka", choiceB: "B:Bykov", choiceC: "C: Vishnya", choiceD: "D: Krivak1", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Krivak2.jpg", choiceA: "A:Uragan", choiceB: "B:Gorshkov", choiceC: "C: Krivak2", choiceD: "D: Degach", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Kuznetsov.jpg", choiceA: "A:Kuznetsov", choiceB: "B:Krivak1", choiceC: "C: Parchim", choiceD: "D: Gepard1", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Nanuchka.jpg", choiceA: "A:Krivak2", choiceB: "B:Alligator", choiceC: "C: Uragan", choiceD: "D: Nanuchka", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Neustrashimyy.jpg", choiceA: "A:Neustrashimyy", choiceB: "B:Kuznetsov", choiceC: "C: Neustrashimyy", choiceD: "D: Krivak1", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Parchim.jpg", choiceA: "A:Tarantul", choiceB: "B:Vishnya", choiceC: "C: Parchim", choiceD: "D: Uragan", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Ropucha.jpg", choiceA: "A:Degach", choiceB: "B:Gorshkov", choiceC: "C: Ropucha", choiceD: "D: Sviyazhsk", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Slava.jpg", choiceA: "A:Slava", choiceB: "B:Steregushchiy1", choiceC: "C: Sviyazhsk", choiceD: "D: Gorshkov", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Sov1.jpg", choiceA: "A:Kirov", choiceB: "B:Gepard", choiceC: "C: Steregushchiy1", choiceD: "D: Sov1", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Steregushchiy1.jpg", choiceA: "A:Degach", choiceB: "B:Krivak1", choiceC: "C: Steregushchiy1", choiceD: "D: Vishnya", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Steregushchiy2.jpg", choiceA: "A:Steregushchiy2", choiceB: "B:Neustrashimyy", choiceC: "C: Nanuchka", choiceD: "D: Sov1", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Steregushchiy3.jpg", choiceA: "A:Sviyazhsk", choiceB: "B:Neustrashimyy", choiceC: "C: Steregushchiy3", choiceD: "D: Neustrashimyy", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Sviyazhsk.jpg", choiceA: "A:Sviyazhsk", choiceB: "B:Steregushchiy2", choiceC: "C: Neustrashimyy", choiceD: "D: Sviyazhsk", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Tarantul.jpg", choiceA: "A:Grachonok", choiceB: "B:Tarantul", choiceC: "C: Nanuchka", choiceD: "D: Sviyazhsk", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Udaloy1.jpg", choiceA: "A:Kara", choiceB: "B:Vishnya", choiceC: "C: Udaloy1", choiceD: "D: Grachonok", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Udaloy2.jpg", choiceA: "A:Steregushchiy3", choiceB: "B:Kirov", choiceC: "C: Grachonok", choiceD: "D: Udaloy2", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Uragan.jpg", choiceA: "A:Balzam", choiceB: "B:Udaloy2", choiceC: "C: Uragan", choiceD: "D: Krivak1", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Vishnya.jpg", choiceA: "A:Sov1", choiceB: "B:Vishnya", choiceC: "C: Degach", choiceD: "D: Udaloy1", correct: "B"},













];
const questionTime = 20;   // 10s per question
const gaugeWidth = 150; //150px
const lastQuestion = questions.length - 1;
const gaugeUnit = gaugeWidth / questionTime;
let runningQuestion = 0;
let count = 0;
let TIMER = 0;
let score = 0;
start.addEventListener("click",startQuiz);
// start the quiz
function startQuiz(){
	start.style.display = "none";
	renderQuestion();	
	quiz.style.display = "block";
	renderProgress();
	renderCounter();
	TIMER = setInterval(renderCounter, 1000); //1000ms = 1s
	
}
// render a question
function renderQuestion(){

    let q = questions[runningQuestion];   

    question.innerHTML = "<p>"+ q.question +"</p>";

    qImg.innerHTML = "<img src="+ q.imgSrc +">";

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;
	
	choiceD.innerHTML = q.choiceD;

}
// render progress--------------------------------------
function renderProgress(){

    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){

        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";

    }

}
//check answer
function checkAnswer(answer){
	if(answer == questions[runningQuestion].correct)
	{ score++;
	  answerIsCorrect(); 
	} else  {
		     answerIsWrong();
			}
		if(runningQuestion < lastQuestion) 
		{
			count = 0;
			runningQuestion++
			renderQuestion();
		} else  { 
					clearInterval(TIMER);
					scoreRender();
				}
}		
// answer is correct 
function answerIsCorrect(){
document.getElementById(runningQuestion).style.backgroundColor = "#0f0"; }
// answer is wrong
function answerIsWrong(){
document.getElementById(runningQuestion).style.backgroundColor = "#f00";}
// counter render--------------------------------------------------
function renderCounter(){
		if(count <= questionTime)
		{
			counter.innerHTML = count;
			timeGauge.style.width = count * gaugeUnit + "px";
			count++
		} else 
			{ count = 0;
				answerIsWrong();
				if( runningQuestion < lastQuestion)
				{
					runningQuestion++;
					renderQuestion();
				} else
					{ clearInterval(TIMER);
					scoreRender();
					}
					
					
			}	
}
// score render
function scoreRender(){
	scoreDiv.style.display = "block";
	const scorePerCent = Math.round( 100 * score / questions.length);
	let img = ( scorePerCent >= 80) ? "img/5.png":
			  ( scorePerCent >= 60) ? "img/4.png":
			  ( scorePerCent >= 40) ? "img/3.png":
			  ( scorePerCent >= 20) ? "img/2.png": "img/1.png";
	scoreDiv.innerHTML = "<img src=" + img + "><p>"
									 + scorePerCent + "%</p>";
	
}

