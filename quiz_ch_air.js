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




{question : "What is this?" , imgSrc: "pictures/Air/CH/J-15_Flanker_X.jpg", choiceA: "A:KJ-500", choiceB: "B:KA-28_Helix", choiceC: "C: J-15_Flanker_X", choiceD: "D: Z-19_Black_Whirlwind", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/Q-5_Fantan.jpg", choiceA: "A:Z-8", choiceB: "B:Q-5_Fantan", choiceC: "C: H-20", choiceD: "D: j-13", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/JH-7_Flounder.jpg", choiceA: "A:J-8_Finback", choiceB: "B:JH-7_Flounder", choiceC: "C: Z-8", choiceD: "D: FC-31_J-31__F60_Snow_Owl", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/KJ-500.jpg", choiceA: "A:j-13", choiceB: "B:J-15_Flanker_X", choiceC: "C: Y-8", choiceD: "D: KJ-500", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-11_Flanker_L.jpg", choiceA: "A:J-5_Fresco", choiceB: "B:KA-28_Helix", choiceC: "C: J-11_Flanker_L", choiceD: "D: Kj-200", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/H-8.jpg", choiceA: "A:Z-20", choiceB: "B:Z-19_Black_Whirlwind", choiceC: "C: H-6", choiceD: "D: H-8", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/KA-28_Helix.jpg", choiceA: "A:Y-9", choiceB: "B:KA-28_Helix", choiceC: "C: J-12", choiceD: "D: J-16_Flanker_RedEagle", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/Y-8.jpg", choiceA: "A:J-5_Fresco", choiceB: "B:KJ-600", choiceC: "C: J-8_Finback", choiceD: "D: Y-8", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/Kj-200.jpg", choiceA: "A:J-8_Finback", choiceB: "B:Z-8", choiceC: "C: Kj-200", choiceD: "D: Z-19_Black_Whirlwind", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/Z-8.jpg", choiceA: "A:Z-8", choiceB: "B:J-8_Finback", choiceC: "C: KJ-2000_Mainring", choiceD: "D: J-11_Flanker_L", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/H-20.jpg", choiceA: "A:H-20", choiceB: "B:Kj-200", choiceC: "C: KA-28_Helix", choiceD: "D: J-6_Farmer", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-10_FireBird.jpg", choiceA: "A:Y-8", choiceB: "B:J-10_FireBird", choiceC: "C: J-11_Flanker_L", choiceD: "D: JF-17_Thunder", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/KJ-600.jpg", choiceA: "A:J-15_Flanker_X", choiceB: "B:J-7_Fishcan", choiceC: "C: Kj-200", choiceD: "D: KJ-600", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/Z-19_Black_Whirlwind.jpg", choiceA: "A:H-8", choiceB: "B:Z-9", choiceC: "C: Z-8", choiceD: "D: Z-19_Black_Whirlwind", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-16_Flanker_RedEagle.jpg", choiceA: "A:J-16_Flanker_RedEagle", choiceB: "B:J-10_FireBird", choiceC: "C: J-7_Fishcan", choiceD: "D: KJ-500", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-5_Fresco.jpg", choiceA: "A:J-16_Flanker_RedEagle", choiceB: "B:Kj-200", choiceC: "C: J-10_FireBird", choiceD: "D: J-5_Fresco", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-12.jpg", choiceA: "A:J-12", choiceB: "B:H-8", choiceC: "C: KJ-2000_Mainring", choiceD: "D: JF-17_Thunder", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-8_Finback.jpg", choiceA: "A:H-20", choiceB: "B:KJ-600", choiceC: "C: J-11_Flanker_L", choiceD: "D: J-8_Finback", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-7_Fishcan.jpg", choiceA: "A:JF-17_Thunder", choiceB: "B:J-7_Fishcan", choiceC: "C: H-8", choiceD: "D: Z-10_Thunderbolt", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/Y-9.jpg", choiceA: "A:Y-8", choiceB: "B:Y-9", choiceC: "C: Q-5_Fantan", choiceD: "D: Z-20", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/Z-20.jpg", choiceA: "A:Z-9_Haitun", choiceB: "B:J-20_MightyDragon", choiceC: "C: Z-20", choiceD: "D: KJ-500", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/Z-10_Thunderbolt.jpg", choiceA: "A:J-8_Finback", choiceB: "B:Z-10_Thunderbolt", choiceC: "C: Z-9_Haitun", choiceD: "D: KJ-500", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-6_Farmer.jpg", choiceA: "A:KJ-600", choiceB: "B:Z-19_Black_Whirlwind", choiceC: "C: J-6_Farmer", choiceD: "D: H-20", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/j-13.jpg", choiceA: "A:J-7_Fishcan", choiceB: "B:Kj-200", choiceC: "C: Q-5_Fantan", choiceD: "D: j-13", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/KJ-2000_Mainring.jpg", choiceA: "A:Y-9", choiceB: "B:j-13", choiceC: "C: KJ-2000_Mainring", choiceD: "D: H-8", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/FC-31_J-31__F60_Snow_Owl.jpg", choiceA: "A:Q-5_Fantan", choiceB: "B:KJ-500", choiceC: "C: J-8_Finback", choiceD: "D: FC-31_J-31__F60_Snow_Owl", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/Z-9_Haitun.jpg", choiceA: "A:KJ-500", choiceB: "B:J-7_Fishcan", choiceC: "C: Z-9_Haitun", choiceD: "D: Z-8", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/H-6.jpg", choiceA: "A:Z-10_Thunderbolt", choiceB: "B:J-20_MightyDragon", choiceC: "C: H-6", choiceD: "D: Z-20", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-20_MightyDragon.jpg", choiceA: "A:J-20_MightyDragon", choiceB: "B:j-13", choiceC: "C: J-12", choiceD: "D: H-6", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/JF-17_Thunder.jpg", choiceA: "A:KA-28_Helix", choiceB: "B:JF-17_Thunder", choiceC: "C: Z-10_Thunderbolt", choiceD: "D: Z-8", correct: "B"},

















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

