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





 
{question : "What is this?" , imgSrc: "pictures/subs/CH/ming.jpg", choiceA: "A:Jin", choiceB: "B:ming", choiceC: "C: romeo", choiceD: "D: song", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/Delta4.jpg", choiceA: "A:Oscar2", choiceB: "B:Severodvinsk", choiceC: "C: Delta4", choiceD: "D: Severodvinsk", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/song2.jpg", choiceA: "A:shang", choiceB: "B:Jin", choiceC: "C: song2", choiceD: "D: shang", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/other/Triomphant.jpg", choiceA: "A:Triomphant", choiceB: "B:Van_guard", choiceC: "C: Collins", choiceD: "D: type209", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/other/type209.jpg", choiceA: "A:type209", choiceB: "B:Scorpene", choiceC: "C: type206", choiceD: "D: Le_Redoutable", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/other/Oyashio.jpg", choiceA: "A:Romeo", choiceB: "B:Collins", choiceC: "C: Astute", choiceD: "D: Oyashio", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/subs/other/Rubis.jpg", choiceA: "A:type206", choiceB: "B:Oyashio", choiceC: "C: type212", choiceD: "D: Rubis", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/han.jpg", choiceA: "A:kilo", choiceB: "B:song", choiceC: "C: xia", choiceD: "D: han", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/subs/other/Trafalgar.jpg", choiceA: "A:Fateh", choiceB: "B:Trafalgar", choiceC: "C: Harushio", choiceD: "D: Collins", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/Kilo.jpg", choiceA: "A:Victor3", choiceB: "B:Sierra2", choiceC: "C: Kilo", choiceD: "D: Dolgorukiy", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/Sierra2.jpg", choiceA: "A:St_Pertersburg", choiceB: "B:Typhoon", choiceC: "C: Sierra2", choiceD: "D: Delta4", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/other/Rubis2.jpg", choiceA: "A:Triomphant", choiceB: "B:Rubis2", choiceC: "C: Agosta", choiceD: "D: type209", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/yuan.jpg", choiceA: "A:romeo", choiceB: "B:yuan", choiceC: "C: romeo", choiceD: "D: Jin", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/subs/other/Sauro.jpg", choiceA: "A:type206", choiceB: "B:type209", choiceC: "C: Triomphant", choiceD: "D: Sauro", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/golf.jpg", choiceA: "A:shang", choiceB: "B:yuan", choiceC: "C: golf", choiceD: "D: kilo", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/other/Le_Redoutable.jpg", choiceA: "A:Le_Redoutable", choiceB: "B:Oyashio", choiceC: "C: type210", choiceD: "D: type214", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/other/Dolphine.jpg", choiceA: "A:Van_guard", choiceB: "B:Agosta", choiceC: "C: Oyashio", choiceD: "D: Dolphine", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/subs/other/nahang.jpg", choiceA: "A:TR1700", choiceB: "B:type206", choiceC: "C: nahang", choiceD: "D: type207", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/other/type206.jpg", choiceA: "A:type214", choiceB: "B:Agosta", choiceC: "C: type206", choiceD: "D: type212", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/xia.jpg", choiceA: "A:Jin", choiceB: "B:romeo", choiceC: "C: xia", choiceD: "D: shang", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/Oscar2.jpg", choiceA: "A:Kilo", choiceB: "B:Sierra2", choiceC: "C: Oscar2", choiceD: "D: Dolgorukiy", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/St_Pertersburg.jpg", choiceA: "A:St_Pertersburg", choiceB: "B:Delta3", choiceC: "C: Oscar2", choiceD: "D: Kilo", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/other/type210.jpg", choiceA: "A:type210", choiceB: "B:Harushio", choiceC: "C: Collins", choiceD: "D: Le_Redoutable", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/Severodvinsk.jpg", choiceA: "A:Delta4", choiceB: "B:Kilo", choiceC: "C: Oscar2", choiceD: "D: Severodvinsk", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/subs/other/type212.jpg", choiceA: "A:type212", choiceB: "B:type214", choiceC: "C: type206", choiceD: "D: Romeo", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/other/Harushio.jpg", choiceA: "A:Scorpene", choiceB: "B:type214", choiceC: "C: Harushio", choiceD: "D: yono", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/other/TR1700.jpg", choiceA: "A:Agosta", choiceB: "B:TR1700", choiceC: "C: type207", choiceD: "D: type206", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/subs/other/Astute.jpg", choiceA: "A:Astute", choiceB: "B:type214", choiceC: "C: Sauro", choiceD: "D: yono", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/song.jpg", choiceA: "A:romeo", choiceB: "B:song", choiceC: "C: kilo", choiceD: "D: shang", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/kilo.jpg", choiceA: "A:kilo", choiceB: "B:sui", choiceC: "C: romeo", choiceD: "D: xia", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/romeo.jpg", choiceA: "A:romeo", choiceB: "B:sui", choiceC: "C: shang", choiceD: "D: shang", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/other/type214.jpg", choiceA: "A:Sauro", choiceB: "B:type214", choiceC: "C: Rubis2", choiceD: "D: type209", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/sui.jpg", choiceA: "A:sui", choiceB: "B:qing", choiceC: "C: golf", choiceD: "D: yuan", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/other/yono.jpg", choiceA: "A:yono", choiceB: "B:Rubis", choiceC: "C: Harushio", choiceD: "D: Triomphant", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/shang.jpg", choiceA: "A:shang", choiceB: "B:song", choiceC: "C: yuan", choiceD: "D: kilo", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/Typhoon.jpg", choiceA: "A:Oscar2", choiceB: "B:akula", choiceC: "C: Typhoon", choiceD: "D: Delta3", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/other/type207.jpg", choiceA: "A:Collins", choiceB: "B:type207", choiceC: "C: type207", choiceD: "D: type210", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/Delta3.jpg", choiceA: "A:Delta3", choiceB: "B:Oscar2", choiceC: "C: Delta4", choiceD: "D: Dolgorukiy", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/Victor3.jpg", choiceA: "A:Dolgorukiy", choiceB: "B:Delta3", choiceC: "C: Victor3", choiceD: "D: Oscar2", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/other/Fateh.jpg", choiceA: "A:Astute", choiceB: "B:Rubis2", choiceC: "C: Fateh", choiceD: "D: Sauro", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/Jin.jpg", choiceA: "A:romeo", choiceB: "B:sui", choiceC: "C: qing", choiceD: "D: Jin", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/subs/other/Agosta.jpg", choiceA: "A:type207", choiceB: "B:Astute", choiceC: "C: Agosta", choiceD: "D: Rubis2", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/subs/other/Van_guard.jpg", choiceA: "A:Sauro", choiceB: "B:Van_guard", choiceC: "C: type210", choiceD: "D: Triomphant", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/subs/CH/qing.jpg", choiceA: "A:qing", choiceB: "B:sui", choiceC: "C: xia", choiceD: "D: song", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/subs/other/Romeo.jpg", choiceA: "A:type206", choiceB: "B:type210", choiceC: "C: Harushio", choiceD: "D: Romeo", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/Dolgorukiy.jpg", choiceA: "A:Delta4", choiceB: "B:Dolgorukiy", choiceC: "C: St_Pertersburg", choiceD: "D: Victor3", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/subs/other/Collins.jpg", choiceA: "A:Van_guard", choiceB: "B:Collins", choiceC: "C: Rubis2", choiceD: "D: nahang", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/subs/other/Soryu.jpg", choiceA: "A:Dolphine", choiceB: "B:Soryu", choiceC: "C: type214", choiceD: "D: TR1700", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/subs/RU/akula.jpg", choiceA: "A:Typhoon", choiceB: "B:Oscar2", choiceC: "C: Dolgorukiy", choiceD: "D: akula", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/subs/other/Scorpene.jpg", choiceA: "A:Scorpene", choiceB: "B:Fateh", choiceC: "C: Soryu", choiceD: "D: Oyashio", correct: "A"},

















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

