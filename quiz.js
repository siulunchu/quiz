// select all elements-------------------------------------
const start = document.getElementById("start");
const startAir = document.getElementById("startAir");
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
const questionTime = 20;   // 10s per question
const gaugeWidth = 150; //150px
const gaugeUnit = gaugeWidth / questionTime;
const qqq =0;
let count = 0;
let TIMER = 0;
let score = 0;
let runningQuestionAir = 0;
let runningQuestion = 0;

//############################## SAM Question Bank ###########################
let questions = [


{question : "What is this?" , imgSrc: "pictures/SA/SA16.jpg", choiceA: "A:RS-SA-20", choiceB: "B:RS-SA-3", choiceC: "C: RS-SA-16", choiceD: "D: RS-SA-12", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/SA/SA21.jpg", choiceA: "A:RS-SA-25", choiceB: "B:RS-SA-5", choiceC: "C: RS-SA-15", choiceD: "D: RS-SA-21", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/SA/SA25.jpg", choiceA: "A:RS-SA-29", choiceB: "B:RS-SA-17", choiceC: "C: RS-SA-9", choiceD: "D: RS-SA-25", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/SA/SA26.jpg", choiceA: "A:RS-SA-26", choiceB: "B:RS-SA-5", choiceC: "C: RS-SA-19", choiceD: "D: RS-SA-3", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/SA/SA13.jpg", choiceA: "A:RS-SA-17", choiceB: "B:RS-SA-13", choiceC: "C: RS-SA-11", choiceD: "D: RS-SA-16", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/SA/SA5.jpg", choiceA: "A:RS-SA-5", choiceB: "B:RS-SA-19", choiceC: "C: RS-SA-22", choiceD: "D: RS-SA-1", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/SA/SA17.jpg", choiceA: "A:RS-SA-17", choiceB: "B:RS-SA-20", choiceC: "C: RS-SA-4", choiceD: "D: RS-SA-23", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/SA/SA9.jpg", choiceA: "A:RS-SA-9", choiceB: "B:RS-SA-17", choiceC: "C: RS-SA-13", choiceD: "D: RS-SA-7", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/SA/SA2.jpg", choiceA: "A:RS-SA-1", choiceB: "B:RS-SA-2", choiceC: "C: RS-SA-16", choiceD: "D: RS-SA-25", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/SA/SA4.jpg", choiceA: "A:RS-SA-7", choiceB: "B:RS-SA-22", choiceC: "C: RS-SA-4", choiceD: "D: RS-SA-8", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/SA/SA11.jpg", choiceA: "A:RS-SA-11", choiceB: "B:RS-SA-12", choiceC: "C: RS-SA-12", choiceD: "D: RS-SA-15", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/SA/SA18.jpg", choiceA: "A:RS-SA-22", choiceB: "B:RS-SA-7", choiceC: "C: RS-SA-18", choiceD: "D: RS-SA-12", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/SA/SA15.jpg", choiceA: "A:RS-SA-19", choiceB: "B:RS-SA-15", choiceC: "C: RS-SA-17", choiceD: "D: RS-SA-24", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/SA/SA24.jpg", choiceA: "A:RS-SA-28", choiceB: "B:RS-SA-24", choiceC: "C: RS-SA-21", choiceD: "D: RS-SA-11", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/SA/SA14.jpg", choiceA: "A:RS-SA-18", choiceB: "B:RS-SA-1", choiceC: "C: RS-SA-22", choiceD: "D: RS-SA-14", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/SA/SA20.jpg", choiceA: "A:RS-SA-24", choiceB: "B:RS-SA-20", choiceC: "C: RS-SA-16", choiceD: "D: RS-SA-9", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/SA/SA7.jpg", choiceA: "A:RS-SA-11", choiceB: "B:RS-SA-7", choiceC: "C: RS-SA-5", choiceD: "D: RS-SA-3", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/SA/SA23.jpg", choiceA: "A:RS-SA-23", choiceB: "B:RS-SA-17", choiceC: "C: RS-SA-13", choiceD: "D: RS-SA-6", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/SA/SA19.jpg", choiceA: "A:RS-SA-23", choiceB: "B:RS-SA-12", choiceC: "C: RS-SA-5", choiceD: "D: RS-SA-19", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/SA/SA10.jpg", choiceA: "A:RS-SA-14", choiceB: "B:RS-SA-10", choiceC: "C: RS-SA-1", choiceD: "D: RS-SA-18", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/SA/SA1.jpg", choiceA: "A:RS-SA-2", choiceB: "B:RS-SA-1", choiceC: "C: RS-SA-6", choiceD: "D: RS-SA-19", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/SA/SA6.jpg", choiceA: "A:RS-SA-10", choiceB: "B:RS-SA-2", choiceC: "C: RS-SA-6", choiceD: "D: RS-SA-23", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/SA/SA12.jpg", choiceA: "A:RS-SA-12", choiceB: "B:RS-SA-7", choiceC: "C: RS-SA-23", choiceD: "D: RS-SA-21", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/SA/SA3.jpg", choiceA: "A:RS-SA-8", choiceB: "B:RS-SA-3", choiceC: "C: RS-SA-12", choiceD: "D: RS-SA-20", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/SA/SA22.jpg", choiceA: "A:RS-SA-22", choiceB: "B:RS-SA-16", choiceC: "C: RS-SA-7", choiceD: "D: RS-SA-9", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/SA/SA8.jpg", choiceA: "A:RS-SA-12", choiceB: "B:RS-SA-18", choiceC: "C: RS-SA-16", choiceD: "D: RS-SA-8", correct: "D"},



 

















];
//############################## AIR Question Bank ###########################
let questionsAir = [


{question : "What is this?" , imgSrc: "pictures/SA/SA16.jpg", choiceA: "A:RS-SA-20", choiceB: "B:RS-SA-3", choiceC: "C: RS-SA-16", choiceD: "D: RS-SA-12", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/SA/SA21.jpg", choiceA: "A:RS-SA-25", choiceB: "B:RS-SA-5", choiceC: "C: RS-SA-15", choiceD: "D: RS-SA-21", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/SA/SA25.jpg", choiceA: "A:RS-SA-29", choiceB: "B:RS-SA-17", choiceC: "C: RS-SA-9", choiceD: "D: RS-SA-25", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/SA/SA16.jpg", choiceA: "A:RS-SA-20", choiceB: "B:RS-SA-3", choiceC: "C: RS-SA-16", choiceD: "D: RS-SA-12", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/SA/SA21.jpg", choiceA: "A:RS-SA-25", choiceB: "B:RS-SA-5", choiceC: "C: RS-SA-15", choiceD: "D: RS-SA-21", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/SA/SA25.jpg", choiceA: "A:RS-SA-29", choiceB: "B:RS-SA-17", choiceC: "C: RS-SA-9", choiceD: "D: RS-SA-25", correct: "D"},



 




];

//################################################################################
const lastQuestion = questions.length - 1;
const lastQuestionAir = questionsAir.length - 1;

//######################################################################################
start.addEventListener("click",startQuiz)
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

//################################################   SAM ########################################################
start.addEventListener("click",startQuiz);
// ############## ENTER DATABASE BELOW    ################################

	scoreDiv.style.display = "block";
	const scorePerCent = Math.round( 100 * score / questions.length);
	let img = ( scorePerCent >= 80) ? "img/5.png":
			  ( scorePerCent >= 60) ? "img/4.png":
			  ( scorePerCent >= 40) ? "img/3.png":
			  ( scorePerCent >= 20) ? "img/2.png": "img/1.png";
	scoreDiv.innerHTML = "<img src=" + img + "><p>"
									 + scorePerCent + "%</p>";
	
}














//#################################################  AIR  #######################################################
startAir.addEventListener("click",startQuizAir);
// ############## ENTER DATABASE BELOW    ################################

// start the quiz
function startQuizAir(){
	startAir.style.display = "none";
	renderQuestionAir();	
	quiz.style.display = "block";
	renderProgressAir();
	renderCounterAir();
	TIMER = setInterval(renderCounterAir, 1000); //1000ms = 1s
	
}
// render a question
function renderQuestionAir(){

    let q = questionsAir[runningQuestionAir];   

    question.innerHTML = "<p>"+ q.question +"</p>";

    qImg.innerHTML = "<img src="+ q.imgSrc +">";

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;
	
	choiceD.innerHTML = q.choiceD;

}
// render progress--------------------------------------
function renderProgressAir(){

    for(let qIndex = 0; qIndex <= lastQuestionAir; qIndex++){

        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";

    }

}
//check answer
function checkAnswerAir(answer){
	if(answer == questionsAir[runningQuestionAir].correct)
	{ score++;
	  answerIsCorrectAir(); 
	} else  {
		     answerIsWrongAir();
			}
		if(runningQuestionAir < lastQuestionAir) 
		{
			count = 0;
			runningQuestionAir++;
			renderQuestionAir();
		} else  { 
					clearInterval(TIMER);
					scoreRenderAir();
				}
}		
// answer is correct 
function answerIsCorrectAir(){
document.getElementById(runningQuestionAir).style.backgroundColor = "#0f0"; }
// answer is wrong
function answerIsWrongAir(){
document.getElementById(runningQuestionAir).style.backgroundColor = "#f00";}
// counter render--------------------------------------------------
function renderCounterAir(){
		if(count <= questionTime)
		{
			counter.innerHTML = count;
			timeGauge.style.width = count * gaugeUnit + "px";
			count++
		} else 
			{ count = 0;
				answerIsWrongAir();
				if( runningQuestionAir < lastQuestionAir)
				{
					runningQuestionAir++;
					renderQuestionAir();
				} else
					{ clearInterval(TIMER);
					scoreRenderAir();
					}
					
					
			}	
}
// score render
function scoreRenderAir(){
	scoreDiv.style.display = "block";
	const scorePerCent = Math.round( 100 * score / questionsAir.length);
	let img = ( scorePerCent >= 80) ? "img/5.png":
			  ( scorePerCent >= 60) ? "img/4.png":
			  ( scorePerCent >= 40) ? "img/3.png":
			  ( scorePerCent >= 20) ? "img/2.png": "img/1.png";
	scoreDiv.innerHTML = "<img src=" + img + "><p>"
									 + scorePerCent + "%</p>";
	
}
//##############################################################################################################





















