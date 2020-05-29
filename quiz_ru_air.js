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




{question : "What is this?" , imgSrc: "pictures/Air/RU/IL-80_Maxdome.jpg", choiceA: "A:IL-38_May", choiceB: "B:Su-33_Flanker_D", choiceC: "C: IL-80_Maxdome", choiceD: "D: An-22_Cock", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/IL-28_Beagle.jpg", choiceA: "A:IL-28_Beagle", choiceB: "B:IL-78_Midas", choiceC: "C: Ka-31_Helix", choiceD: "D: Su-32_34_FullBack", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/IL-62_Classic.jpg", choiceA: "A:Su-30_Flanker_C", choiceB: "B:Su-27_Flanker", choiceC: "C: Tu-154_careless", choiceD: "D: IL-62_Classic", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mi-14_Haze.jpg", choiceA: "A:Ka-27_Helix", choiceB: "B:Yak-42_Clobber", choiceC: "C: An-22_Cock", choiceD: "D: Mi-14_Haze", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/IL-38_May.jpg", choiceA: "A:IL-38_May", choiceB: "B:Mi-24_35_Hind", choiceC: "C: Tu-142_Bear", choiceD: "D: IL-38_May", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/IL-22_Coot.jpg", choiceA: "A:Ka-31_Helix", choiceB: "B:Mig-21_Fishbed", choiceC: "C: IL-22_Coot", choiceD: "D: Ka-27_Helix", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mi-38.jpg", choiceA: "A:An-26_Curl", choiceB: "B:Mi-38", choiceC: "C: Ka-50_Hokum_A_Black_Shark", choiceD: "D: IL-28_Beagle", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Tu-95_Bear_H.jpg", choiceA: "A:Mig-31_Foxhound", choiceB: "B:Tu-214", choiceC: "C: An-22_Cock", choiceD: "D: Tu-95_Bear_H", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Su-32_34_FullBack.jpg", choiceA: "A:Mig-21_Fishbed", choiceB: "B:Tu-142_Bear", choiceC: "C: Su-32_34_FullBack", choiceD: "D: An-72_Coaler", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Ka-27_Helix.jpg", choiceA: "A:Tu-142_Bear", choiceB: "B:Tu-134_Crusty", choiceC: "C: Mi-14_Haze", choiceD: "D: Ka-27_Helix", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mig-15_Fagot.jpg", choiceA: "A:IL-18_Coot", choiceB: "B:Tu-142_Bear", choiceC: "C: Mig-15_Fagot", choiceD: "D: Tu-22_Backfire", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/IL-18_Coot.jpg", choiceA: "A:Tu-22_Backfire", choiceB: "B:Su-27_Flanker", choiceC: "C: IL-18_Coot", choiceD: "D: Su-24_Fencer", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mi-24_35_Hind.jpg", choiceA: "A:Mi-24_35_Hind", choiceB: "B:Su-25_Frogfoot", choiceC: "C: Mig-29_Fulcrum", choiceD: "D: Su-33_Flanker_D", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mig-21_Fishbed.jpg", choiceA: "A:Mig-31_Foxhound", choiceB: "B:IL-80_Maxdome", choiceC: "C: Mig-21_Fishbed", choiceD: "D: An-30_Clank", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Yak-42_Clobber.jpg", choiceA: "A:IL-38_May", choiceB: "B:Yak-42_Clobber", choiceC: "C: A-50_Mainstay", choiceD: "D: IL-18_Coot", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/An-22_Cock.jpg", choiceA: "A:An-22_Cock", choiceB: "B:Mi-24_35_Hind", choiceC: "C: An-22_Cock", choiceD: "D: IL-78_Midas", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Tu-142_Bear.jpg", choiceA: "A:Su-33_Flanker_D", choiceB: "B:Mig-31_Foxhound", choiceC: "C: Tu-142_Bear", choiceD: "D: Mi-26_Halo", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Su-33_Flanker_D.jpg", choiceA: "A:An-12_Cub", choiceB: "B:Mi-38", choiceC: "C: Su-33_Flanker_D", choiceD: "D: Su-57_Pak_FA", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Su-30_Flanker_C.jpg", choiceA: "A:Be-200_Mermaid", choiceB: "B:Su-30_Flanker_C", choiceC: "C: Ka-31_Helix", choiceD: "D: Mig-31_Foxhound", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/IL-78_Midas.jpg", choiceA: "A:IL-78_Midas", choiceB: "B:Su-32_34_FullBack", choiceC: "C: Yak-130_Mitten", choiceD: "D: Ka-27_Helix", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Ka-50_Hokum_A_Black_Shark.jpg", choiceA: "A:A-50_Mainstay", choiceB: "B:Ka-50_Hokum_A_Black_Shark", choiceC: "C: An-124_Condor", choiceD: "D: Mi-24_35_Hind", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Tu-154_careless.jpg", choiceA: "A:Mig-15_Fagot", choiceB: "B:Tu-154_careless", choiceC: "C: Su-35_Flanker_S", choiceD: "D: Tu-142_Bear_F", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Su-35_Flanker_S.jpg", choiceA: "A:IL-80_Maxdome", choiceB: "B:Su-35_Flanker_S", choiceC: "C: Su-30_Flanker_C", choiceD: "D: Mi-38", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Su-25_Frogfoot.jpg", choiceA: "A:An-124_Condor", choiceB: "B:Su-25_Frogfoot", choiceC: "C: IL-80_Maxdome", choiceD: "D: An-124_Condor", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Ka-29_Helix_B.jpg", choiceA: "A:Ka-29_Helix_B", choiceB: "B:Su-30_Flanker_C", choiceC: "C: Mi-26_Halo", choiceD: "D: IL-22_Coot", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Tu-160_BlackJack.jpg", choiceA: "A:IL-18_Coot", choiceB: "B:Tu-160_BlackJack", choiceC: "C: An-26_Curl", choiceD: "D: Tu-134_Crusty", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Ka-226_Hoodlum.jpg", choiceA: "A:Ka-226_Hoodlum", choiceB: "B:An-12_Cub", choiceC: "C: Mi-17_Hip", choiceD: "D: Tu-22_Backfire", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Tu-214.jpg", choiceA: "A:Tu-214", choiceB: "B:Mig-15_Fagot", choiceC: "C: Mig-21_Fishbed", choiceD: "D: Ka-50_Hokum_A_Black_Shark", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mi-8_Hip.jpg", choiceA: "A:Tu-22_Backfire", choiceB: "B:IL-76_Candid", choiceC: "C: Mi-8_Hip", choiceD: "D: Ka-226_Hoodlum", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Tu-22_Backfire.jpg", choiceA: "A:IL-76_Candid", choiceB: "B:Tu-22_Backfire", choiceC: "C: Mi-17_Hip", choiceD: "D: IL-28_Beagle", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mig-29_Fulcrum.jpg", choiceA: "A:Mig-29_Fulcrum", choiceB: "B:Mi-38", choiceC: "C: Tu-142_Bear_F", choiceD: "D: Ka-226_Hoodlum", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/An-72_Coaler.jpg", choiceA: "A:Yak-42_Clobber", choiceB: "B:Be-12_Mail", choiceC: "C: IL-62_Classic", choiceD: "D: An-72_Coaler", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/An-30_Clank.jpg", choiceA: "A:Tu-142_Bear", choiceB: "B:An-30_Clank", choiceC: "C: Mig-31_Foxhound", choiceD: "D: An-26_Curl", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Yak-130_Mitten.jpg", choiceA: "A:Yak-130_Mitten", choiceB: "B:Tu-134_Crusty", choiceC: "C: Tu-160_BlackJack", choiceD: "D: IL-62_Classic", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Be-200_Mermaid.jpg", choiceA: "A:Be-200_Mermaid", choiceB: "B:Mig-29_Fulcrum", choiceC: "C: Su-27_Flanker", choiceD: "D: An-12_Cub", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Tu-142_Bear_F.jpg", choiceA: "A:Tu-142_Bear_F", choiceB: "B:Su-35_Flanker_S", choiceC: "C: Be-200_Mermaid", choiceD: "D: Mi-17_Hip", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/An-124_Condor.jpg", choiceA: "A:An-124_Condor", choiceB: "B:Su-33_Flanker_D", choiceC: "C: IL-38_May", choiceD: "D: Mi-14_Haze", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mig-31_Foxhound.jpg", choiceA: "A:Mig-31_Foxhound", choiceB: "B:Tu-142_Bear", choiceC: "C: Tu-142_Bear_F", choiceD: "D: Ka-50_Hokum_A_Black_Shark", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/An-12_Cub.jpg", choiceA: "A:An-26_Curl", choiceB: "B:IL-62_Classic", choiceC: "C: An-12_Cub", choiceD: "D: IL-28_Beagle", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mi-26_Halo.jpg", choiceA: "A:IL-22_Coot", choiceB: "B:Mi-26_Halo", choiceC: "C: Su-32_34_FullBack", choiceD: "D: Mig-29_Fulcrum", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Ka-31_Helix.jpg", choiceA: "A:IL-38_May", choiceB: "B:Ka-226_Hoodlum", choiceC: "C: Mig-31_Foxhound", choiceD: "D: Ka-31_Helix", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mi-28_Havoc.jpg", choiceA: "A:IL-62_Classic", choiceB: "B:Su-35_Flanker_S", choiceC: "C: Mi-28_Havoc", choiceD: "D: Tu-160_BlackJack", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Su-57_Pak_FA.jpg", choiceA: "A:Su-33_Flanker_D", choiceB: "B:Su-30_Flanker_C", choiceC: "C: Su-57_Pak_FA", choiceD: "D: Tu-22_Backfire", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/A-50_Mainstay.jpg", choiceA: "A:Mi-26_Halo", choiceB: "B:A-50_Mainstay", choiceC: "C: Mi-28_Havoc", choiceD: "D: Tu-95_Bear_H", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/An-26_Curl.jpg", choiceA: "A:Su-27_Flanker", choiceB: "B:An-26_Curl", choiceC: "C: Ka-31_Helix", choiceD: "D: Mi-17_Hip", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mi-17_Hip.jpg", choiceA: "A:An-124_Condor", choiceB: "B:Tu-160_BlackJack", choiceC: "C: Mi-17_Hip", choiceD: "D: Su-33_Flanker_D", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Be-12_Mail.jpg", choiceA: "A:Be-12_Mail", choiceB: "B:Mi-38", choiceC: "C: Su-30_Flanker_C", choiceD: "D: Tu-95_Bear_H", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Su-24_Fencer.jpg", choiceA: "A:Mig-29_Fulcrum", choiceB: "B:Tu-154_careless", choiceC: "C: Mig-15_Fagot", choiceD: "D: Su-24_Fencer", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Su-27_Flanker.jpg", choiceA: "A:Mi-26_Halo", choiceB: "B:Su-27_Flanker", choiceC: "C: An-12_Cub", choiceD: "D: Mig-15_Fagot", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/IL-76_Candid.jpg", choiceA: "A:IL-28_Beagle", choiceB: "B:IL-76_Candid", choiceC: "C: Mi-38", choiceD: "D: A-50_Mainstay", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Tu-134_Crusty.jpg", choiceA: "A:Mi-28_Havoc", choiceB: "B:Mi-24_35_Hind", choiceC: "C: An-72_Coaler", choiceD: "D: Tu-134_Crusty", correct: "D"},

















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

