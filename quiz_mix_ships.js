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





{question : "What is this?" , imgSrc: "pictures/ships/Other/Jamaran.jpg", choiceA: "A:Comandanti", choiceB: "B:OSA", choiceC: "C: Jamaran", choiceD: "D: Daring", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Juan_Carlos.jpg", choiceA: "A:osa2", choiceB: "B:Horizon", choiceC: "C: Juan_Carlos", choiceD: "D: Mistral", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Queen_Elizabeth.jpg", choiceA: "A:Queen_Elizabeth", choiceB: "B:MEKO_A200", choiceC: "C: osa2", choiceD: "D: Floreal", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Balzam.jpeg", choiceA: "A:Kashin", choiceB: "B:Gren", choiceC: "C: Steregushchiy2", choiceD: "D: Balzam", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Cassard.jpg", choiceA: "A:Cassard", choiceB: "B:OHP", choiceC: "C: p-2000", choiceD: "D: Baden-Württemberg", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Sov_2_3.jpg", choiceA: "A:Sov_3", choiceB: "B:Sov_2", choiceC: "C: fuqing", choiceD: "D: JiangWei1", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/BAM.jpg", choiceA: "A:BAM", choiceB: "B:Floreal", choiceC: "C: Brandenburg", choiceD: "D: Charles_de_Gaulle", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/MEKO_A200.jpg", choiceA: "A:MEKO_A200", choiceB: "B:Sachsen", choiceC: "C: koni", choiceD: "D: Aquitaine", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Gren.jpg", choiceA: "A:Gepard1", choiceB: "B:Bykov", choiceC: "C: Parchim", choiceD: "D: Gren", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Sachsen.jpg", choiceA: "A:Hamzeh", choiceB: "B:Sachsen", choiceC: "C: Floreal", choiceD: "D: Carlo_Margottini", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Daring.jpg", choiceA: "A:Houdong", choiceB: "B:Queen_Elizabeth", choiceC: "C: OHP", choiceD: "D: Daring", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/houjiang.jpg", choiceA: "A:sov3", choiceB: "B:Luzhou", choiceC: "C: houjiang", choiceD: "D: houjiang", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/jingdao.jpg", choiceA: "A:Yuting3", choiceB: "B:jingdao", choiceC: "C: Luhai", choiceD: "D: houxin", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Horizon.jpg", choiceA: "A:Bremen", choiceB: "B:Bremen", choiceC: "C: Vosper", choiceD: "D: Horizon", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Delvar.jpg", choiceA: "A:BAM", choiceB: "B:osa2", choiceC: "C: Horizon", choiceD: "D: Delvar", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Hamzeh.jpg", choiceA: "A:Hamzeh", choiceB: "B:Maestrale", choiceC: "C: Houdong", choiceD: "D: Aquitaine", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Bremen.jpg", choiceA: "A:Maestrale", choiceB: "B:Horizon", choiceC: "C: Carlo_Margottini", choiceD: "D: Bremen", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Baden-Württemberg.jpg", choiceA: "A:Houdong", choiceB: "B:Queen_Elizabeth", choiceC: "C: Baden-Württemberg", choiceD: "D: Galicia", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Hendijan.jpg", choiceA: "A:River", choiceB: "B:Hendijan", choiceC: "C: Aquitaine", choiceD: "D: OSA", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Tarantul.jpg", choiceA: "A:Grachonok", choiceB: "B:Tarantul", choiceC: "C: Nanuchka", choiceD: "D: Sviyazhsk", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Garibaldi.jpg", choiceA: "A:Maestrale", choiceB: "B:Maestrale", choiceC: "C: Garibaldi", choiceD: "D: Duke", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Jianghu1.jpg", choiceA: "A:Jianghu1", choiceB: "B:Sov_2_3", choiceC: "C: Jianghu1", choiceD: "D: JiangKai1", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Yukan.jpg", choiceA: "A:Jianghu5", choiceB: "B:fuchi", choiceC: "C: Yukan", choiceD: "D: Luhai", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Bandar_Abbas.jpg", choiceA: "A:Kaman_Combattante", choiceB: "B:MEKO200", choiceC: "C: Brandenburg", choiceD: "D: Bandar_Abbas", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Brandenburg.jpg", choiceA: "A:Galicia", choiceB: "B:Comandanti", choiceC: "C: Brandenburg", choiceD: "D: Sahand", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Aquitaine.jpg", choiceA: "A:Bremen", choiceB: "B:Aquitaine", choiceC: "C: koni", choiceD: "D: Garibaldi", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Luhai.jpg", choiceA: "A:fuyu", choiceB: "B:JiangDao", choiceC: "C: JiangKai2", choiceD: "D: Luhai", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/fuyu.jpg", choiceA: "A:Jianghu2", choiceB: "B:fuyu", choiceC: "C: Jianghu1", choiceD: "D: houxin", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Yuting2.jpg", choiceA: "A:Sov_2", choiceB: "B:Yuting3", choiceC: "C: Yuting2", choiceD: "D: fuchi", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Kaman_Combattante.jpg", choiceA: "A:Daring", choiceB: "B:Brandenburg", choiceC: "C: Kaman_Combattante", choiceD: "D: Daring", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Liaoning_CV16.jpg", choiceA: "A:Yuting2", choiceB: "B:dayun", choiceC: "C: houjiang", choiceD: "D: Liaoning_CV16", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Maestrale.jpg", choiceA: "A:osa2", choiceB: "B:Maestrale", choiceC: "C: MEKO_A200", choiceD: "D: Cassard", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Uragan.jpg", choiceA: "A:Balzam", choiceB: "B:Udaloy2", choiceC: "C: Uragan", choiceD: "D: Krivak1", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Ropucha.jpg", choiceA: "A:Degach", choiceB: "B:Gorshkov", choiceC: "C: Ropucha", choiceD: "D: Sviyazhsk", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Luhu.jpg", choiceA: "A:Luhai", choiceB: "B:Dongdao", choiceC: "C: Luhu", choiceD: "D: Luda", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Bykov.jpg", choiceA: "A:Sviyazhsk", choiceB: "B:Bykov", choiceC: "C: Degach", choiceD: "D: Grisha", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Steregushchiy2.jpg", choiceA: "A:Steregushchiy2", choiceB: "B:Neustrashimyy", choiceC: "C: Nanuchka", choiceD: "D: Sov1", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Vosper.jpeg", choiceA: "A:Vosper", choiceB: "B:MEKO_A200", choiceC: "C: Aquitaine", choiceD: "D: osa2", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Kuznetsov.jpg", choiceA: "A:Kuznetsov", choiceB: "B:Krivak1", choiceC: "C: Parchim", choiceD: "D: Gepard1", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Udaloy1.jpg", choiceA: "A:Kara", choiceB: "B:Vishnya", choiceC: "C: Udaloy1", choiceD: "D: Grachonok", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Mistral.JPG", choiceA: "A:Kaman_Combattante", choiceB: "B:osa2", choiceC: "C: Mistral", choiceD: "D: Albion", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Carlo_Margottini.jpg", choiceA: "A:Juan_Carlos", choiceB: "B:Charles_de_Gaulle", choiceC: "C: Carlo_Margottini", choiceD: "D: F100", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Dongdao.jpg", choiceA: "A:Luda", choiceB: "B:Luyang2", choiceC: "C: Yuting3", choiceD: "D: Dongdao", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/La_Fayette.jpg", choiceA: "A:Bandar_Abbas", choiceB: "B:La_Fayette", choiceC: "C: OSA", choiceD: "D: Jamaran", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/MEKO200.jpg", choiceA: "A:Albion", choiceB: "B:MEKO200", choiceC: "C: Maestrale", choiceD: "D: Floreal", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Gepard.jpg", choiceA: "A:Kuznetsov", choiceB: "B:Uragan", choiceC: "C: Gepard2", choiceD: "D: Steregushchiy1", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Vishnya.jpg", choiceA: "A:Sov1", choiceB: "B:Vishnya", choiceC: "C: Degach", choiceD: "D: Udaloy1", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Renhai.jpg", choiceA: "A:Jianghu5", choiceB: "B:Renhai", choiceC: "C: fuchi", choiceD: "D: Yuting1", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Duke.jpg", choiceA: "A:Sachsen", choiceB: "B:Cavour", choiceC: "C: Duke", choiceD: "D: OSA", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/dayun.jpg", choiceA: "A:dadie", choiceB: "B:dayun", choiceC: "C: Yuting2", choiceD: "D: fuchi", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Krivak2.jpg", choiceA: "A:Uragan", choiceB: "B:Gorshkov", choiceC: "C: Krivak2", choiceD: "D: Degach", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Jianghu2.jpg", choiceA: "A:jingdao", choiceB: "B:Jianghu3", choiceC: "C: Jianghu2", choiceD: "D: fuyu", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Cavour.jpg", choiceA: "A:Sachsen", choiceB: "B:Cavour", choiceC: "C: Maestrale", choiceD: "D: La_Fayette", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/JiangWei2.jpg", choiceA: "A:houbei", choiceB: "B:Yuzhao", choiceC: "C: JiangWei2", choiceD: "D: Luyang3", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/JiangWei1.jpg", choiceA: "A:Yuzhao", choiceB: "B:Luyang3", choiceC: "C: JiangWei1", choiceD: "D: Luyang3", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Kara.jpg", choiceA: "A:Gorshkov", choiceB: "B:Kara", choiceC: "C: Uragan", choiceD: "D: Gren", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Slava.jpg", choiceA: "A:Slava", choiceB: "B:Steregushchiy1", choiceC: "C: Sviyazhsk", choiceD: "D: Gorshkov", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Udaloy2.jpg", choiceA: "A:Steregushchiy3", choiceB: "B:Kirov", choiceC: "C: Grachonok", choiceD: "D: Udaloy2", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/JiangDao.jpg", choiceA: "A:jingdao", choiceB: "B:Renhai", choiceC: "C: JiangWei2", choiceD: "D: JiangDao", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/houxin.jpg", choiceA: "A:houxin", choiceB: "B:Luda", choiceC: "C: jingdao", choiceD: "D: Luhu", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Sov1.jpg", choiceA: "A:Kirov", choiceB: "B:Gepard", choiceC: "C: Steregushchiy1", choiceD: "D: Sov1", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Kirov.jpg", choiceA: "A:Gepard", choiceB: "B:Steregushchiy2", choiceC: "C: Neustrashimyy", choiceD: "D: Kirov", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Alligator.jpg", choiceA: "A:Balzam", choiceB: "B:Gepard", choiceC: "C: Alligator", choiceD: "D: Vishnya", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Luyang3.jpg", choiceA: "A:JiangWei2", choiceB: "B:Luyang3", choiceC: "C: dayun", choiceD: "D: Yukan", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Sviyazhsk.jpg", choiceA: "A:Sviyazhsk", choiceB: "B:Steregushchiy2", choiceC: "C: Neustrashimyy", choiceD: "D: Sviyazhsk", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Parchim.jpg", choiceA: "A:Tarantul", choiceB: "B:Vishnya", choiceC: "C: Parchim", choiceD: "D: Uragan", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Steregushchiy1.jpg", choiceA: "A:Degach", choiceB: "B:Krivak1", choiceC: "C: Steregushchiy1", choiceD: "D: Vishnya", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/p-2000.jpg", choiceA: "A:MEKO_A200", choiceB: "B:Juan_Carlos", choiceC: "C: Cassard", choiceD: "D: p-2000", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Neustrashimyy.jpg", choiceA: "A:Neustrashimyy", choiceB: "B:Kuznetsov", choiceC: "C: Neustrashimyy", choiceD: "D: Krivak1", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Nanuchka.jpg", choiceA: "A:Krivak2", choiceB: "B:Alligator", choiceC: "C: Uragan", choiceD: "D: Nanuchka", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Kashin.jpg", choiceA: "A:Kashin", choiceB: "B:Udaloy2", choiceC: "C: Grachonok", choiceD: "D: Vishnya", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/koni.jpg", choiceA: "A:Albion", choiceB: "B:osa2", choiceC: "C: Daring", choiceD: "D: koni", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/OSA.jpg", choiceA: "A:Mistral", choiceB: "B:OSA", choiceC: "C: Sahand", choiceD: "D: Bremen", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/JiangKai1.jpg", choiceA: "A:Luhu", choiceB: "B:houjiang", choiceC: "C: JiangKai1", choiceD: "D: houjiang", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Georges_Leygues.jpg", choiceA: "A:Georges_Leygues", choiceB: "B:OHP", choiceC: "C: Bremen", choiceD: "D: Delvar", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Krivak1.jpg", choiceA: "A:Nanuchka", choiceB: "B:Bykov", choiceC: "C: Vishnya", choiceD: "D: Krivak1", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Penne.jpg", choiceA: "A:Hendijan", choiceB: "B:Carlo_Margottini", choiceC: "C: Daring", choiceD: "D: Penne", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Gepard1.jpg", choiceA: "A:Gren", choiceB: "B:Ropucha", choiceC: "C: Kashin", choiceD: "D: Gepard1", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/houbei.jpg", choiceA: "A:JiangWei1", choiceB: "B:houbei", choiceC: "C: Yuting3", choiceD: "D: dayun", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/fuqing.jpg", choiceA: "A:Yuting2", choiceB: "B:Luyang1", choiceC: "C: houbei", choiceD: "D: fuqing", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Luzhou.jpg", choiceA: "A:Sov_3", choiceB: "B:Jianghu2", choiceC: "C: Luhu", choiceD: "D: Luzhou", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Galicia.jpg", choiceA: "A:Queen_Elizabeth", choiceB: "B:Galicia", choiceC: "C: Sachsen", choiceD: "D: osa2", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Yuting1.jpg", choiceA: "A:Yuting3", choiceB: "B:Yuting1", choiceC: "C: Jianghu3", choiceD: "D: Jianghu5", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Grachonok.jpg", choiceA: "A:Ropucha", choiceB: "B:Kirov", choiceC: "C: Grachonok", choiceD: "D: Tarantul", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Gorshkov.jpg", choiceA: "A:Bykov", choiceB: "B:Gorshkov", choiceC: "C: Vishnya", choiceD: "D: Kara", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Floreal.jpg", choiceA: "A:Horizon", choiceB: "B:Garibaldi", choiceC: "C: Floreal", choiceD: "D: Georges_Leygues", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/fuchi.jpg", choiceA: "A:JiangKai1", choiceB: "B:Jianghu3", choiceC: "C: sov3", choiceD: "D: fuchi", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Degach.jpg", choiceA: "A:Gorshkov", choiceB: "B:Krivak1", choiceC: "C: Degach", choiceD: "D: Kashin", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Comandanti.jpg", choiceA: "A:Comandanti", choiceB: "B:koni", choiceC: "C: Houdong", choiceD: "D: Hamzeh", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/osa2.jpg", choiceA: "A:osa2", choiceB: "B:Jamaran", choiceC: "C: OSA", choiceD: "D: Mistral", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/sov3.jpg", choiceA: "A:JiangKai2", choiceB: "B:dadie", choiceC: "C: sov3", choiceD: "D: jingdao", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Jianghu5.jpg", choiceA: "A:Luzhou", choiceB: "B:Sov_2", choiceC: "C: JiangWei2", choiceD: "D: Jianghu5", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Grigorovich.jpg", choiceA: "A:Grisha", choiceB: "B:Grigorovich", choiceC: "C: Krivak2", choiceD: "D: Krivak1", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/JiangKai2.jpg", choiceA: "A:JiangKai2", choiceB: "B:Liaoning_CV16", choiceC: "C: Luyang2", choiceD: "D: jingdao", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Luda.jpg", choiceA: "A:Sov_2", choiceB: "B:Luda", choiceC: "C: houjiang", choiceD: "D: houbei", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Grisha.jpg", choiceA: "A:Tarantul", choiceB: "B:Grisha", choiceC: "C: Gorshkov", choiceD: "D: Vishnya", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Yuzhao.jpg", choiceA: "A:Yuzhao", choiceB: "B:JiangDao", choiceC: "C: Luyang1", choiceD: "D: Jianghu2", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Albion.jpg", choiceA: "A:koni", choiceB: "B:Baden-Württemberg", choiceC: "C: River", choiceD: "D: Albion", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/River.jpg", choiceA: "A:Georges_Leygues", choiceB: "B:Albion", choiceC: "C: Delvar", choiceD: "D: River", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Charles_de_Gaulle.jpg", choiceA: "A:Charles_de_Gaulle", choiceB: "B:Cassard", choiceC: "C: OSA", choiceD: "D: La_Fayette", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Yuting3.jpg", choiceA: "A:Yuting3", choiceB: "B:JiangWei2", choiceC: "C: Luyang1", choiceD: "D: Renhai", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/F100.jpg", choiceA: "A:Sahand", choiceB: "B:Sachsen", choiceC: "C: F100", choiceD: "D: Sachsen", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/dadie.jpg", choiceA: "A:houjiang", choiceB: "B:Luzhou", choiceC: "C: dadie", choiceD: "D: Luyang2", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/RU/Steregushchiy3.jpg", choiceA: "A:Sviyazhsk", choiceB: "B:Neustrashimyy", choiceC: "C: Steregushchiy3", choiceD: "D: Neustrashimyy", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Sahand.jpg", choiceA: "A:Comandanti", choiceB: "B:Houdong", choiceC: "C: Sahand", choiceD: "D: OHP", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Jianghu3.jpg", choiceA: "A:JiangDao", choiceB: "B:dadie", choiceC: "C: Jianghu3", choiceD: "D: Yuting2", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Luyang1.jpg", choiceA: "A:Luyang1", choiceB: "B:Jianghu2", choiceC: "C: Sov_3", choiceD: "D: fuqing", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/ships/CH/Luyang2.jpg", choiceA: "A:Dongdao", choiceB: "B:Luyang2", choiceC: "C: sov3", choiceD: "D: JiangDao", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/OHP.jpg", choiceA: "A:Jamaran", choiceB: "B:Floreal", choiceC: "C: OHP", choiceD: "D: Juan_Carlos", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/ships/Other/Houdong.jpg", choiceA: "A:La_Fayette", choiceB: "B:Houdong", choiceC: "C: Georges_Leygues", choiceD: "D: Maestrale", correct: "B"},













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

