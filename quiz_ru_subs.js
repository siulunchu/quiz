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





 
{question : "What is this?" , imgSrc: "pictures/subs/RU/akula.jpg", choiceA: "A:Typhoon", choiceB: "B:Oscar2", choiceC: "C: Dolgorukiy", choiceD: "D: akula", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/Sierra2.jpg", choiceA: "A:St_Pertersburg", choiceB: "B:Typhoon", choiceC: "C: Sierra2", choiceD: "D: Delta4", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/Severodvinsk.jpg", choiceA: "A:Delta4", choiceB: "B:Kilo", choiceC: "C: Oscar2", choiceD: "D: Severodvinsk", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/Victor3.jpg", choiceA: "A:Dolgorukiy", choiceB: "B:Delta3", choiceC: "C: Victor3", choiceD: "D: Oscar2", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/Delta3.jpg", choiceA: "A:Delta3", choiceB: "B:Oscar2", choiceC: "C: Delta4", choiceD: "D: Dolgorukiy", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/Kilo.jpg", choiceA: "A:Victor3", choiceB: "B:Sierra2", choiceC: "C: Kilo", choiceD: "D: Dolgorukiy", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/Dolgorukiy.jpg", choiceA: "A:Delta4", choiceB: "B:Dolgorukiy", choiceC: "C: St_Pertersburg", choiceD: "D: Victor3", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/Delta4.jpg", choiceA: "A:Oscar2", choiceB: "B:Severodvinsk", choiceC: "C: Delta4", choiceD: "D: Severodvinsk", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/Typhoon.jpg", choiceA: "A:Oscar2", choiceB: "B:akula", choiceC: "C: Typhoon", choiceD: "D: Delta3", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/Oscar2.jpg", choiceA: "A:Kilo", choiceB: "B:Sierra2", choiceC: "C: Oscar2", choiceD: "D: Dolgorukiy", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/St_Pertersburg.jpg", choiceA: "A:St_Pertersburg", choiceB: "B:Delta3", choiceC: "C: Oscar2", choiceD: "D: Kilo", correct: "A"},











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

