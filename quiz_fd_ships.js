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





 
{question : "What is this?" , imgSrc: "pictures/ships/Other/Horizon.jpg", choiceA: "A:Bremen", choiceB: "B:Bremen", choiceC: "C: Vosper", choiceD: "D: Horizon", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/OHP.jpg", choiceA: "A:Jamaran", choiceB: "B:Floreal", choiceC: "C: OHP", choiceD: "D: Juan_Carlos", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Cassard.jpg", choiceA: "A:Cassard", choiceB: "B:OHP", choiceC: "C: p-2000", choiceD: "D: Baden-Württemberg", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Jamaran.jpg", choiceA: "A:Comandanti", choiceB: "B:OSA", choiceC: "C: Jamaran", choiceD: "D: Daring", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/La_Fayette.jpg", choiceA: "A:Bandar_Abbas", choiceB: "B:La_Fayette", choiceC: "C: OSA", choiceD: "D: Jamaran", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Juan_Carlos.jpg", choiceA: "A:osa2", choiceB: "B:Horizon", choiceC: "C: Juan_Carlos", choiceD: "D: Mistral", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Bandar_Abbas.jpg", choiceA: "A:Kaman_Combattante", choiceB: "B:MEKO200", choiceC: "C: Brandenburg", choiceD: "D: Bandar_Abbas", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/OSA.jpg", choiceA: "A:Mistral", choiceB: "B:OSA", choiceC: "C: Sahand", choiceD: "D: Bremen", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/p-2000.jpg", choiceA: "A:MEKO_A200", choiceB: "B:Juan_Carlos", choiceC: "C: Cassard", choiceD: "D: p-2000", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Baden-Württemberg.jpg", choiceA: "A:Houdong", choiceB: "B:Queen_Elizabeth", choiceC: "C: Baden-Württemberg", choiceD: "D: Galicia", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Charles_de_Gaulle.jpg", choiceA: "A:Charles_de_Gaulle", choiceB: "B:Cassard", choiceC: "C: OSA", choiceD: "D: La_Fayette", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Daring.jpg", choiceA: "A:Houdong", choiceB: "B:Queen_Elizabeth", choiceC: "C: OHP", choiceD: "D: Daring", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Queen_Elizabeth.jpg", choiceA: "A:Queen_Elizabeth", choiceB: "B:MEKO_A200", choiceC: "C: osa2", choiceD: "D: Floreal", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Aquitaine.jpg", choiceA: "A:Bremen", choiceB: "B:Aquitaine", choiceC: "C: koni", choiceD: "D: Garibaldi", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Duke.jpg", choiceA: "A:Sachsen", choiceB: "B:Cavour", choiceC: "C: Duke", choiceD: "D: OSA", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Comandanti.jpg", choiceA: "A:Comandanti", choiceB: "B:koni", choiceC: "C: Houdong", choiceD: "D: Hamzeh", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/BAM.jpg", choiceA: "A:BAM", choiceB: "B:Floreal", choiceC: "C: Brandenburg", choiceD: "D: Charles_de_Gaulle", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Cavour.jpg", choiceA: "A:Sachsen", choiceB: "B:Cavour", choiceC: "C: Maestrale", choiceD: "D: La_Fayette", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/F100.jpg", choiceA: "A:Sahand", choiceB: "B:Sachsen", choiceC: "C: F100", choiceD: "D: Sachsen", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Georges_Leygues.jpg", choiceA: "A:Georges_Leygues", choiceB: "B:OHP", choiceC: "C: Bremen", choiceD: "D: Delvar", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Houdong.jpg", choiceA: "A:La_Fayette", choiceB: "B:Houdong", choiceC: "C: Georges_Leygues", choiceD: "D: Maestrale", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Maestrale.jpg", choiceA: "A:osa2", choiceB: "B:Maestrale", choiceC: "C: MEKO_A200", choiceD: "D: Cassard", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Sachsen.jpg", choiceA: "A:Hamzeh", choiceB: "B:Sachsen", choiceC: "C: Floreal", choiceD: "D: Carlo_Margottini", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Galicia.jpg", choiceA: "A:Queen_Elizabeth", choiceB: "B:Galicia", choiceC: "C: Sachsen", choiceD: "D: osa2", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Hendijan.jpg", choiceA: "A:River", choiceB: "B:Hendijan", choiceC: "C: Aquitaine", choiceD: "D: OSA", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Mistral.JPG", choiceA: "A:Kaman_Combattante", choiceB: "B:osa2", choiceC: "C: Mistral", choiceD: "D: Albion", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Carlo_Margottini.jpg", choiceA: "A:Juan_Carlos", choiceB: "B:Charles_de_Gaulle", choiceC: "C: Carlo_Margottini", choiceD: "D: F100", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Garibaldi.jpg", choiceA: "A:Maestrale", choiceB: "B:Maestrale", choiceC: "C: Garibaldi", choiceD: "D: Duke", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Vosper.jpeg", choiceA: "A:Vosper", choiceB: "B:MEKO_A200", choiceC: "C: Aquitaine", choiceD: "D: osa2", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/MEKO200.jpg", choiceA: "A:Albion", choiceB: "B:MEKO200", choiceC: "C: Maestrale", choiceD: "D: Floreal", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Hamzeh.jpg", choiceA: "A:Hamzeh", choiceB: "B:Maestrale", choiceC: "C: Houdong", choiceD: "D: Aquitaine", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Sahand.jpg", choiceA: "A:Comandanti", choiceB: "B:Houdong", choiceC: "C: Sahand", choiceD: "D: OHP", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/River.jpg", choiceA: "A:Georges_Leygues", choiceB: "B:Albion", choiceC: "C: Delvar", choiceD: "D: River", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Albion.jpg", choiceA: "A:koni", choiceB: "B:Baden-Württemberg", choiceC: "C: River", choiceD: "D: Albion", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/MEKO_A200.jpg", choiceA: "A:MEKO_A200", choiceB: "B:Sachsen", choiceC: "C: koni", choiceD: "D: Aquitaine", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Brandenburg.jpg", choiceA: "A:Galicia", choiceB: "B:Comandanti", choiceC: "C: Brandenburg", choiceD: "D: Sahand", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Delvar.jpg", choiceA: "A:BAM", choiceB: "B:osa2", choiceC: "C: Horizon", choiceD: "D: Delvar", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Floreal.jpg", choiceA: "A:Horizon", choiceB: "B:Garibaldi", choiceC: "C: Floreal", choiceD: "D: Georges_Leygues", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Penne.jpg", choiceA: "A:Hendijan", choiceB: "B:Carlo_Margottini", choiceC: "C: Daring", choiceD: "D: Penne", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/osa2.jpg", choiceA: "A:osa2", choiceB: "B:Jamaran", choiceC: "C: OSA", choiceD: "D: Mistral", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Bremen.jpg", choiceA: "A:Maestrale", choiceB: "B:Horizon", choiceC: "C: Carlo_Margottini", choiceD: "D: Bremen", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Kaman_Combattante.jpg", choiceA: "A:Daring", choiceB: "B:Brandenburg", choiceC: "C: Kaman_Combattante", choiceD: "D: Daring", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/koni.jpg", choiceA: "A:Albion", choiceB: "B:osa2", choiceC: "C: Daring", choiceD: "D: koni", correct: "D"},


















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

