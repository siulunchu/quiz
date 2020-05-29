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





 
{question : "What is this?" , imgSrc: "pictures/ships/CH/Yuting1.jpg", choiceA: "A:Yuting3", choiceB: "B:Yuting1", choiceC: "C: Jianghu3", choiceD: "D: Jianghu5", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/JiangWei2.jpg", choiceA: "A:houbei", choiceB: "B:Yuzhao", choiceC: "C: JiangWei2", choiceD: "D: Luyang3", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/houxin.jpg", choiceA: "A:houxin", choiceB: "B:Luda", choiceC: "C: jingdao", choiceD: "D: Luhu", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/JiangWei1.jpg", choiceA: "A:Yuzhao", choiceB: "B:Luyang3", choiceC: "C: JiangWei1", choiceD: "D: Luyang3", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/houbei.jpg", choiceA: "A:JiangWei1", choiceB: "B:houbei", choiceC: "C: Yuting3", choiceD: "D: dayun", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Yuzhao.jpg", choiceA: "A:Yuzhao", choiceB: "B:JiangDao", choiceC: "C: Luyang1", choiceD: "D: Jianghu2", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Renhai.jpg", choiceA: "A:Jianghu5", choiceB: "B:Renhai", choiceC: "C: fuchi", choiceD: "D: Yuting1", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Jianghu5.jpg", choiceA: "A:Luzhou", choiceB: "B:Sov_2", choiceC: "C: JiangWei2", choiceD: "D: Jianghu5", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/jingdao.jpg", choiceA: "A:Yuting3", choiceB: "B:jingdao", choiceC: "C: Luhai", choiceD: "D: houxin", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Luda.jpg", choiceA: "A:Sov_2", choiceB: "B:Luda", choiceC: "C: houjiang", choiceD: "D: houbei", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Sov_2_3.jpg", choiceA: "A:Sov_3", choiceB: "B:Sov_2", choiceC: "C: fuqing", choiceD: "D: JiangWei1", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/dayun.jpg", choiceA: "A:dadie", choiceB: "B:dayun", choiceC: "C: Yuting2", choiceD: "D: fuchi", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/fuqing.jpg", choiceA: "A:Yuting2", choiceB: "B:Luyang1", choiceC: "C: houbei", choiceD: "D: fuqing", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Liaoning_CV16.jpg", choiceA: "A:Yuting2", choiceB: "B:dayun", choiceC: "C: houjiang", choiceD: "D: Liaoning_CV16", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Jianghu3.jpg", choiceA: "A:JiangDao", choiceB: "B:dadie", choiceC: "C: Jianghu3", choiceD: "D: Yuting2", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Jianghu1.jpg", choiceA: "A:Jianghu1", choiceB: "B:Sov_2_3", choiceC: "C: Jianghu1", choiceD: "D: JiangKai1", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Luyang1.jpg", choiceA: "A:Luyang1", choiceB: "B:Jianghu2", choiceC: "C: Sov_3", choiceD: "D: fuqing", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/sov3.jpg", choiceA: "A:JiangKai2", choiceB: "B:dadie", choiceC: "C: sov3", choiceD: "D: jingdao", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/fuyu.jpg", choiceA: "A:Jianghu2", choiceB: "B:fuyu", choiceC: "C: Jianghu1", choiceD: "D: houxin", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/dadie.jpg", choiceA: "A:houjiang", choiceB: "B:Luzhou", choiceC: "C: dadie", choiceD: "D: Luyang2", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/fuchi.jpg", choiceA: "A:JiangKai1", choiceB: "B:Jianghu3", choiceC: "C: sov3", choiceD: "D: fuchi", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Yukan.jpg", choiceA: "A:Jianghu5", choiceB: "B:fuchi", choiceC: "C: Yukan", choiceD: "D: Luhai", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Dongdao.jpg", choiceA: "A:Luda", choiceB: "B:Luyang2", choiceC: "C: Yuting3", choiceD: "D: Dongdao", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/JiangKai1.jpg", choiceA: "A:Luhu", choiceB: "B:houjiang", choiceC: "C: JiangKai1", choiceD: "D: houjiang", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Yuting3.jpg", choiceA: "A:Yuting3", choiceB: "B:JiangWei2", choiceC: "C: Luyang1", choiceD: "D: Renhai", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Yuting2.jpg", choiceA: "A:Sov_2", choiceB: "B:Yuting3", choiceC: "C: Yuting2", choiceD: "D: fuchi", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Luhu.jpg", choiceA: "A:Luhai", choiceB: "B:Dongdao", choiceC: "C: Luhu", choiceD: "D: Luda", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Luhai.jpg", choiceA: "A:fuyu", choiceB: "B:JiangDao", choiceC: "C: JiangKai2", choiceD: "D: Luhai", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/JiangKai2.jpg", choiceA: "A:JiangKai2", choiceB: "B:Liaoning_CV16", choiceC: "C: Luyang2", choiceD: "D: jingdao", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Jianghu2.jpg", choiceA: "A:jingdao", choiceB: "B:Jianghu3", choiceC: "C: Jianghu2", choiceD: "D: fuyu", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Luzhou.jpg", choiceA: "A:Sov_3", choiceB: "B:Jianghu2", choiceC: "C: Luhu", choiceD: "D: Luzhou", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Luyang2.jpg", choiceA: "A:Dongdao", choiceB: "B:Luyang2", choiceC: "C: sov3", choiceD: "D: JiangDao", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/JiangDao.jpg", choiceA: "A:jingdao", choiceB: "B:Renhai", choiceC: "C: JiangWei2", choiceD: "D: JiangDao", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Luyang3.jpg", choiceA: "A:JiangWei2", choiceB: "B:Luyang3", choiceC: "C: dayun", choiceD: "D: Yukan", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/houjiang.jpg", choiceA: "A:sov3", choiceB: "B:Luzhou", choiceC: "C: houjiang", choiceD: "D: houjiang", correct: "D"},















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

