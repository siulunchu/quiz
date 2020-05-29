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





{question : "What is this?" , imgSrc: "pictures/subs/CH/song.jpg", choiceA: "A:romeo", choiceB: "B:song", choiceC: "C: kilo", choiceD: "D: shang", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/song2.jpg", choiceA: "A:shang", choiceB: "B:Jin", choiceC: "C: song2", choiceD: "D: shang", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/yuan.jpg", choiceA: "A:romeo", choiceB: "B:yuan", choiceC: "C: romeo", choiceD: "D: Jin", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/qing.jpg", choiceA: "A:qing", choiceB: "B:sui", choiceC: "C: xia", choiceD: "D: song", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/golf.jpg", choiceA: "A:shang", choiceB: "B:yuan", choiceC: "C: golf", choiceD: "D: kilo", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/sui.jpg", choiceA: "A:sui", choiceB: "B:qing", choiceC: "C: golf", choiceD: "D: yuan", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/kilo.jpg", choiceA: "A:kilo", choiceB: "B:sui", choiceC: "C: romeo", choiceD: "D: xia", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/xia.jpg", choiceA: "A:Jin", choiceB: "B:romeo", choiceC: "C: xia", choiceD: "D: shang", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/Jin.jpg", choiceA: "A:romeo", choiceB: "B:sui", choiceC: "C: qing", choiceD: "D: Jin", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/han.jpg", choiceA: "A:kilo", choiceB: "B:song", choiceC: "C: xia", choiceD: "D: han", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/romeo.jpg", choiceA: "A:romeo", choiceB: "B:sui", choiceC: "C: shang", choiceD: "D: shang", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/shang.jpg", choiceA: "A:shang", choiceB: "B:song", choiceC: "C: yuan", choiceD: "D: kilo", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/ming.jpg", choiceA: "A:Jin", choiceB: "B:ming", choiceC: "C: romeo", choiceD: "D: song", correct: "B"},

















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

