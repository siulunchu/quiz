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





 
{question : "What is this?" , imgSrc: "pictures/Air/CH/Z-9_Haitun.jpg", choiceA: "A:Z-19 Black Whirlwind", choiceB: "B:Z-9 Haitun", choiceC: "C: Ka-31 Helix", choiceD: "D: HESA-Kowsar", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/Z-8.jpg", choiceA: "A:Mi-28 Havoc", choiceB: "B:Z-8", choiceC: "C: F-4 Phantom", choiceD: "D: J-8 Finback", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/IL-22_Coot.jpg", choiceA: "A:Z-10 Thunderbolt", choiceB: "B:J-8 Finback", choiceC: "C: IL-22 Coot", choiceD: "D: IL-18 Coot", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/Other/F-4_Phantom.jpg", choiceA: "A:F-4 Phantom", choiceB: "B:IL-76 Candid", choiceC: "C: Tu-154 careless", choiceD: "D: Su-24 Fencer", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Tu-142_Bear_F.jpg", choiceA: "A:KJ-2000 Mainring", choiceB: "B:Tu-142 Bear F", choiceC: "C: j-13", choiceD: "D: An-124 Condor", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-10_FireBird.jpg", choiceA: "A:J-10 FireBird", choiceB: "B:KJ-500", choiceC: "C: J-5 Fresco", choiceD: "D: Tu-154 careless", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/Z-19_Black_Whirlwind.jpg", choiceA: "A:An-12 Cub", choiceB: "B:Z-19 Black Whirlwind", choiceC: "C: Tu-154 careless", choiceD: "D: Ka-27 Helix", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Su-25_Frogfoot.jpg", choiceA: "A:Su-57 Pak FA", choiceB: "B:Su-25 Frogfoot", choiceC: "C: Kj-200", choiceD: "D: Tu-160 BlackJack", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Be-200_Mermaid.jpg", choiceA: "A:Be-200 Mermaid", choiceB: "B:An-12 Cub", choiceC: "C: An-30 Clank", choiceD: "D: Tu-22 Backfire", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Ka-50_Hokum_A_Black_Shark.jpg", choiceA: "A:KA-28 Helix", choiceB: "B:Ka-50 Hokum A_Black Shark", choiceC: "C: Be-12 Mail", choiceD: "D: KJ-500", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/Y-9.jpg", choiceA: "A:Tu-134 Crusty", choiceB: "B:Y-9", choiceC: "C: Kj-200", choiceD: "D: H-8", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/H-20.jpg", choiceA: "A:Su-22 Fitter", choiceB: "B:H-20", choiceC: "C: J-6 Farmer", choiceD: "D: Yak-130 Mitten", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/Other/F-14_Tomcat.jpg", choiceA: "A:HESA-Saeqeh Thunderbolt", choiceB: "B:F-14 Tomcat", choiceC: "C: Su-35 Flanker S", choiceD: "D: KA-28 Helix", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/KJ-2000_Mainring.jpg", choiceA: "A:IL-22 Coot", choiceB: "B:Mi-14 Haze", choiceC: "C: Ka-50 Hokum A_Black Shark", choiceD: "D: KJ-2000 Mainring", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/An-124_Condor.jpg", choiceA: "A:An-124 Condor", choiceB: "B:Su-25 Frogfoot", choiceC: "C: Y-8", choiceD: "D: H-20", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/Other/Su-22_Fitter.jpg", choiceA: "A:Y-9", choiceB: "B:Su-22 Fitter", choiceC: "C: Ka-27 Helix", choiceD: "D: F-5 Tiger", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Yak-42_Clobber.jpg", choiceA: "A:JF-17 Thunder", choiceB: "B:Mi-24_35 Hind", choiceC: "C: Yak-42 Clobber", choiceD: "D: FC-31_J-31  F60_Snow Owl", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mi-28_Havoc.jpg", choiceA: "A:Mi-28 Havoc", choiceB: "B:Y-8", choiceC: "C: F-1 Mirage", choiceD: "D: IL-28 Beagle", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/IL-28_Beagle.jpg", choiceA: "A:IL-28 Beagle", choiceB: "B:Z-9 Haitun", choiceC: "C: Y-9", choiceD: "D: Tu-142 Bear F", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Tu-154_careless.jpg", choiceA: "A:Z-9 Haitun", choiceB: "B:J-15 Flanker X", choiceC: "C: Tu-154 careless", choiceD: "D: Mi-26 Halo", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mi-17_Hip.jpg", choiceA: "A:Mi-28 Havoc", choiceB: "B:Y-8", choiceC: "C: Y-9", choiceD: "D: Mi-17 Hip", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-15_Flanker_X.jpg", choiceA: "A:Eruofighter", choiceB: "B:Tu-214", choiceC: "C: Z-9 Haitun", choiceD: "D: J-15 Flanker X", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-12.jpg", choiceA: "A:Mi-8 Hip", choiceB: "B:Su-25 Frogfoot", choiceC: "C: J-12", choiceD: "D: Tu-214", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-6_Farmer.jpg", choiceA: "A:J-8 Finback", choiceB: "B:KJ-2000 Mainring", choiceC: "C: J-6 Farmer", choiceD: "D: Eruofighter", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/Other/F-5_Tiger.jpg", choiceA: "A:Mi-38", choiceB: "B:Tu-214", choiceC: "C: F-5 Tiger", choiceD: "D: Tu-95 Bear H", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Su-32_34_FullBack.jpg", choiceA: "A:Su-32_34 FullBack", choiceB: "B:HESA-Kowsar", choiceC: "C: Mi-8 Hip", choiceD: "D: HESA-Saeqeh Thunderbolt", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Tu-214.jpg", choiceA: "A:Tu-142 Bear", choiceB: "B:Y-9", choiceC: "C: Tu-214", choiceD: "D: Tu-154 careless", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/JH-7_Flounder.jpg", choiceA: "A:Su-30 Flanker C", choiceB: "B:JH-7 Flounder", choiceC: "C: HESA-Kowsar", choiceD: "D: Su-57 Pak FA", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-16_Flanker_RedEagle.jpg", choiceA: "A:Mi-26 Halo", choiceB: "B:J-16 Flanker_RedEagle", choiceC: "C: Su-27 Flanker", choiceD: "D: A-50 Mainstay", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Ka-29_Helix_B.jpg", choiceA: "A:Eruofighter", choiceB: "B:Ka-29 Helix B", choiceC: "C: Yak-42 Clobber", choiceD: "D: J-16 Flanker_RedEagle", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mi-38.jpg", choiceA: "A:Y-9", choiceB: "B:Mi-38", choiceC: "C: Mig-29 Fulcrum", choiceD: "D: Z-19 Black Whirlwind", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Su-27_Flanker.jpg", choiceA: "A:Su-22 Fitter", choiceB: "B:Tu-142 Bear F", choiceC: "C: KJ-500", choiceD: "D: Su-27 Flanker", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/Other/F-1_Mirage.jpg", choiceA: "A:F-1 Mirage", choiceB: "B:Su-33 Flanker D", choiceC: "C: Tu-95 Bear H", choiceD: "D: Su-22 Fitter", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/IL-76_Candid.jpg", choiceA: "A:IL-76 Candid", choiceB: "B:KJ-2000 Mainring", choiceC: "C: J-5 Fresco", choiceD: "D: Su-27 Flanker", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/An-22_Cock.jpg", choiceA: "A:Mi-38", choiceB: "B:Su-35 Flanker S", choiceC: "C: Kj-200", choiceD: "D: An-22 Cock", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/Kj-200.jpg", choiceA: "A:j-13", choiceB: "B:Mi-8 Hip", choiceC: "C: A-50 Mainstay", choiceD: "D: Kj-200", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mi-26_Halo.jpg", choiceA: "A:IL-22 Coot", choiceB: "B:Mi-38", choiceC: "C: Mi-26 Halo", choiceD: "D: Ka-226 Hoodlum", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/KJ-600.jpg", choiceA: "A:JF-17 Thunder", choiceB: "B:Z-10 Thunderbolt", choiceC: "C: KJ-600", choiceD: "D: Su-27 Flanker", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Be-12_Mail.jpg", choiceA: "A:Su-30 Flanker C", choiceB: "B:IL-80 Maxdome", choiceC: "C: Be-12 Mail", choiceD: "D: J-5 Fresco", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mi-24_35_Hind.jpg", choiceA: "A:J-15 Flanker X", choiceB: "B:IL-28 Beagle", choiceC: "C: Ka-226 Hoodlum", choiceD: "D: Mi-24_35 Hind", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/FC-31_J-31__F60_Snow_Owl.jpg", choiceA: "A:Mi-24_35 Hind", choiceB: "B:Z-20", choiceC: "C: KJ-500", choiceD: "D: FC-31_J-31  F60_Snow Owl", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Ka-27_Helix.jpg", choiceA: "A:j-13", choiceB: "B:Ka-27 Helix", choiceC: "C: IL-78 Midas", choiceD: "D: H-6", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-5_Fresco.jpg", choiceA: "A:Mi-26 Halo", choiceB: "B:An-72 Coaler", choiceC: "C: Q-5 Fantan", choiceD: "D: J-5 Fresco", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Yak-130_Mitten.jpg", choiceA: "A:Yak-130 Mitten", choiceB: "B:J-8 Finback", choiceC: "C: Su-27 Flanker", choiceD: "D: Su-32_34 FullBack", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/j-13.jpg", choiceA: "A:J-13", choiceB: "B:J-8 Finback", choiceC: "C: An-124 Condor", choiceD: "D: IL-76 Candid", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mig-15_Fagot.jpg", choiceA: "A:An-12 Cub", choiceB: "B:IL-78 Midas", choiceC: "C: Mig-15 Fagot", choiceD: "D: Tu-22 Backfire", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Tu-142_Bear.jpg", choiceA: "A:Tu-142 Bear", choiceB: "B:Mi-17 Hip", choiceC: "C: IL-80 Maxdome", choiceD: "D: Z-19 Black Whirlwind", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Su-57_Pak_FA.jpg", choiceA: "A:Y-9", choiceB: "B:Su-27 Flanker", choiceC: "C: KJ-2000 Mainring", choiceD: "D: Su-57 Pak FA", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Ka-31_Helix.jpg", choiceA: "A:Mi-38", choiceB: "B:J-11 Flanker L.jfif", choiceC: "C: Ka-31 Helix", choiceD: "D: j-13", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/IL-78_Midas.jpg", choiceA: "A:KJ-2000 Mainring", choiceB: "B:An-124 Condor", choiceC: "C: J-8 Finback", choiceD: "D: IL-78 Midas", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/JF-17_Thunder.jpg", choiceA: "A:An-22 Cock", choiceB: "B:An-30 Clank", choiceC: "C: JF-17 Thunder", choiceD: "D: Yak-130 Mitten", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Su-24_Fencer.jpg", choiceA: "A:Su-24 Fencer", choiceB: "B:Su-24 Fencer", choiceC: "C: Mi-24_35 Hind", choiceD: "D: Tu-134 Crusty", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/Z-10_Thunderbolt.jpg", choiceA: "A:Z-10 Thunderbolt", choiceB: "B:Tu-22 Backfire", choiceC: "C: Su-24 Fencer", choiceD: "D: An-22 Cock", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/Other/HESA-Saeqeh_Thunderbolt.jpg", choiceA: "A:Su-27 Flanker", choiceB: "B:F-14 Tomcat", choiceC: "C: HESA-Saeqeh Thunderbolt", choiceD: "D: Mig-31 Foxhound", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Tu-22_Backfire.jpg", choiceA: "A:Su-25 Frogfoot", choiceB: "B:Tu-22 Backfire", choiceC: "C: j-13", choiceD: "D: Mi-26 Halo", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/Y-8.jpg", choiceA: "A:An-124 Condor", choiceB: "B:Su-32_34 FullBack", choiceC: "C: J-16 Flanker_RedEagle", choiceD: "D: Y-8", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Tu-160_BlackJack.jpg", choiceA: "A:An-26 Curl", choiceB: "B:Mi-28 Havoc", choiceC: "C: Tu-160 BlackJack", choiceD: "D: Mig-15 Fagot", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/Other/HESA-Kowsar.jpg", choiceA: "A:Mig-29 Fulcrum", choiceB: "B:Tu-214", choiceC: "C: HESA-Kowsar", choiceD: "D: IL-38 May", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-8_Finback.jpg", choiceA: "A:Yak-42 Clobber", choiceB: "B:J-8 Finback", choiceC: "C: Su-24 Fencer", choiceD: "D: HESA-Kowsar", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mig-29_Fulcrum.jpg", choiceA: "A:Tu-22 Backfire", choiceB: "B:IL-22 Coot", choiceC: "C: Mig-29 Fulcrum", choiceD: "D: Tu-134 Crusty", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-7_Fishcan.jpg", choiceA: "A:J-7 Fishcan", choiceB: "B:IL-22 Coot", choiceC: "C: Mi-38", choiceD: "D: Su-25 Frogfoot", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/H-8.jpg", choiceA: "A:KJ-2000 Mainring", choiceB: "B:IL-28 Beagle", choiceC: "C: H-8", choiceD: "D: Y-9", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mig-21_Fishbed.jpg", choiceA: "A:Mig-21 Fishbed", choiceB: "B:IL-38 May", choiceC: "C: F-14 Tomcat", choiceD: "D: Mi-38", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-20_MightyDragon.jpg", choiceA: "A:Mig-15 Fagot", choiceB: "B:Su-33 Flanker D", choiceC: "C: Y-8", choiceD: "D: J-20 MightyDragon", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/J-11_Flanker_L.jpg", choiceA: "A:An-26 Curl", choiceB: "B:IL-38 May", choiceC: "C: J-11 Flanker ", choiceD: "D: Q-5 Fantan", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/H-6.jpg", choiceA: "A:H-20", choiceB: "B:H-6", choiceC: "C: F-14 Tomcat", choiceD: "D: Ka-50 Hokum A_Black Shark", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/IL-38_May.jpg", choiceA: "A:IL-18 Coot", choiceB: "B:Mi-28 Havoc", choiceC: "C: Be-12 Mail", choiceD: "D: IL-38 May", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/Z-20.jpg", choiceA: "A:A-50 Mainstay", choiceB: "B:JF-17 Thunder", choiceC: "C: An-124 Condor", choiceD: "D: Z-20", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/A-50_Mainstay.jpg", choiceA: "A:Su-25 Frogfoot", choiceB: "B:A-50 Mainstay", choiceC: "C: KJ-600", choiceD: "D: IL-38 May", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Ka-226_Hoodlum.jpg", choiceA: "A:Ka-226 Hoodlum", choiceB: "B:Z-19 Black Whirlwind", choiceC: "C: Su-35 Flanker S", choiceD: "D: Su-27 Flanker", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mi-14_Haze.jpg", choiceA: "A:HESA-Kowsar", choiceB: "B:Mi-14 Haze", choiceC: "C: JF-17 Thunder", choiceD: "D: Su-33 Flanker D", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mig-31_Foxhound.jpg", choiceA: "A:Mig-15 Fagot", choiceB: "B:Tu-22 Backfire", choiceC: "C: Mig-31 Foxhound", choiceD: "D: Mig-15 Fagot", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Su-35_Flanker_S.jpg", choiceA: "A:Su-35 Flanker S", choiceB: "B:JH-7 Flounder", choiceC: "C: Z-9 Haitun", choiceD: "D: An-22 Cock", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/IL-18_Coot.jpg", choiceA: "A:Mi-24_35 Hind", choiceB: "B:IL-18 Coot", choiceC: "C: H-20", choiceD: "D: J-20 MightyDragon", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/IL-80_Maxdome.jpg", choiceA: "A:J-16 Flanker_RedEagle", choiceB: "B:IL-80 Maxdome", choiceC: "C: KA-28 Helix", choiceD: "D: Mig-15 Fagot", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/An-30_Clank.jpg", choiceA: "A:An-30 Clank", choiceB: "B:IL-38 May", choiceC: "C: Be-200 Mermaid", choiceD: "D: Mi-14 Haze", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/An-72_Coaler.jpg", choiceA: "A:An-72 Coaler", choiceB: "B:J-5 Fresco", choiceC: "C: J-16 Flanker_RedEagle", choiceD: "D: JH-7 Flounder", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/An-12_Cub.jpg", choiceA: "A:An-12 Cub", choiceB: "B:Yak-42 Clobber", choiceC: "C: Tu-214", choiceD: "D: Q-5 Fantan", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/KA-28_Helix.jpg", choiceA: "A:KA-28 Helix", choiceB: "B:Q-5 Fantan", choiceC: "C: H-20", choiceD: "D: H-20", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Su-33_Flanker_D.jpg", choiceA: "A:KJ-500", choiceB: "B:Mi-14 Haze", choiceC: "C: Tu-154 careless", choiceD: "D: Su-33 Flanker D", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/KJ-500.jpg", choiceA: "A:KJ-500", choiceB: "B:KJ-600", choiceC: "C: Su-30 Flanker C", choiceD: "D: F-14 Tomcat", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/Other/Eruofighter.jpg", choiceA: "A:Be-200 Mermaid", choiceB: "B:Eruofighter", choiceC: "C: IL-80 Maxdome", choiceD: "D: IL-62 Classic", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Su-30_Flanker_C.jpg", choiceA: "A:IL-76 Candid", choiceB: "B:Ka-50 Hokum A_Black Shark", choiceC: "C: Su-30 Flanker C", choiceD: "D: Mi-28 Havoc", correct: "C"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Tu-95_Bear_H.jpg", choiceA: "A:Be-200 Mermaid", choiceB: "B:Tu-95 Bear H", choiceC: "C: An-12 Cub", choiceD: "D: Su-30 Flanker C", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/CH/Q-5_Fantan.jpg", choiceA: "A:Tu-95 Bear H", choiceB: "B:HESA-Kowsar", choiceC: "C: Ka-226 Hoodlum", choiceD: "D: Q-5 Fantan", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Tu-134_Crusty.jpg", choiceA: "A:Tu-134 Crusty", choiceB: "B:Tu-134 Crusty", choiceC: "C: An-22 Cock", choiceD: "D: Z-20", correct: "B"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/An-26_Curl.jpg", choiceA: "A:Mig-15 Fagot", choiceB: "B:Z-8", choiceC: "C: Mi-24_35 Hind", choiceD: "D: An-26 Curl", correct: "D"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/IL-62_Classic.jpg", choiceA: "A:IL-62 Classic", choiceB: "B:Mig-31 Foxhound", choiceC: "C: Yak-42 Clobber", choiceD: "D: Su-57 Pak FA", correct: "A"},
{question : "What is this?" , imgSrc: "pictures/Air/RU/Mi-8_Hip.jpg", choiceA: "A:Su-33 Flanker D", choiceB: "B:Mi-28 Havoc", choiceC: "C: Mi-8 Hip", choiceD: "D: An-26 Curl", correct: "C"},

















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

