const panels = document.querySelectorAll('.panel');
var pText1=document.getElementById("p1");
var pText2=document.getElementById("p2");
var pText3=document.getElementById("p3");
var pText4=document.getElementById("p4");
var pText5=document.getElementById("p5");
var pText6=document.getElementById("p6");
var pText7=document.getElementById("p7");
var pText8=document.getElementById("p8");
var pText9=document.getElementById("p9");
var pText10=document.getElementById("p10");
var pText11=document.getElementById("p11");
var pText12=document.getElementById("p12");
var pText13=document.getElementById("p13");
var pText14=document.getElementById("p14");
var pText15=document.getElementById("p15");

var btnText1 = document.getElementById("Mybtn1");
var btnText2 = document.getElementById("Mybtn2");
var btnText3 = document.getElementById("Mybtn3");
var btnText4 = document.getElementById("Mybtn4");
var btnText5 = document.getElementById("Mybtn5");
var btnText6 = document.getElementById("Mybtn6");
var btnText7 = document.getElementById("Mybtn7");
var btnText8 = document.getElementById("Mybtn8");
var btnText9 = document.getElementById("Mybtn9");
var btnText10 = document.getElementById("Mybtn10");
var btnText11 = document.getElementById("Mybtn11");
var btnText12 = document.getElementById("Mybtn12");
var btnText13 = document.getElementById("Mybtn13");
var btnText14 = document.getElementById("Mybtn14");
var btnText15 = document.getElementById("Mybtn15");

let about = false;

let x=10;

removeActiveClasses();

function playerBio(y){
    
    if(y==0){
        return "No-one since Bradman has built massive scores as often and as fast as Lara in his pomp. Even his stance was thrilling - the bat raised high in the air, the weight poised on a bent front knee, the eyes low and level. Then the guillotine would fall, sending the ball flashing to the boundary. In the space of two months in 1994, Lara's 375 and 501 not out broke world records for the highest Test and first-class scores.";
        
    }
    
    if(y==1){
        return "India has given to the world many a great cricketer but perhaps none as ambitious as Virat Kohli. To meet his ambition, Kohli employed the technical assiduousness of Sachin Tendulkar and fitness that was in the league of top athletes in the world, not just cricketers. As a result, Kohli became the most consistent all-format accumulator of his time, making jaw-dropping chases look easy, and finding, in his own words, the safest possible way to score runs. Plenty of them.";
        
    }

    if(y==2){
        return "Sachin Tendulkar has been the most complete batsman of his time, the most prolific runmaker of all time, and arguably the biggest cricket icon the game has ever known. His batting was based on the purest principles: perfect balance, economy of movement, precision in stroke-making, and that intangible quality given only to geniuses - anticipation. If he didn't have a signature stroke - the upright, back-foot punch comes close - it's because he was equally proficient at each of the full range of orthodox shots (and plenty of improvised ones as well) and can pull them out at will.";
        
    }
    if(y==3){
        return "Ricky Ponting, the most uncompromising player of his generation, grew into Australia's most successful run-maker and only sits below Bradman in the country's overall ratings. It takes an extremely critical eye to diminish his run-scoring achievements, which seem to collect new records in every series. Like spotting a celebrity, it's necessary to look twice when analysing Ponting, first as the archetypal modern batsman, then as the country's 42nd Test captain.";
        
    }
    if(y==4){
        return "You knew when he was coming. The outgoing batsman would already have disappeared into the pavilion, and the expectation of what was to follow filled the air. Viv kept you waiting... time to ponder. Then he appeared, sauntering, swaggering, arms windmilling slowly. He would take guard, and then, head tilted back slightly and cudding his gum, he would walk a few paces down the pitch to tap it while looking the bowler in the eye. It was calculated menace and magnificent theatre from arguably the most devastating batsman of all time.";
        
    }
    if(y==5){
        return "About the worst way to assess Shoaib Akhtar would be to do so through his numbers; they aren't unimpressive but rarely have they revealed so little. From the moment Shoaib emerged on the scene in the late 90s, the world knew it was in for some career. First there was the extreme pace and there was also the attitude; Shoaib was the fastest bowler in the world, he knew it, he made sure others knew it. He was a natural successor to the legacy of Imran, Wasim and Waqar.";
        
    }
    
    if(y==6){
        return "Warne's greatest feats are perhaps those of the last couple of years of his career. Returning in 2004 from a 12-month hiatus for swallowing forbidden diuretics, he swept aside 26 Sri Lankan batsmen in three Tests, and the following year scalped a world record 96 victims - a stunning 24 more than in his show-stopping 1993 - and still missed out on the Allan Border Medal. Forty of those were Englishmen in what sometimes appeared to be a lone stand in a thrilling Ashes series. At the end he was helped by his stockpile of straight balls: a zooter, slider, toppie and back-spinner, one that drifted in, one that sloped out, and another that didn't budge. Yet he seldom got his wrong'un right and rarely landed his flipper. More than ever he relied on his two oldest friends: excruciating accuracy and an exquisite legbreak, except that he controlled the degree of spin - and mixed it - at will. Like the great classical painters, he stumbled upon the art of simplicity.";
        
    }

    if(y==7){
        return "No bowler in history won India more Test matches than Anil Kumble, and there probably hasn't been a harder trier either. Like the great tall wristspinners Bill O'Reilly and his own idol BS Chandrasekhar, Kumble traded the legspinner's proverbial yo-yo for a spear, as the ball hacked through the air rather than hanging in it and came off the pitch with a kick rather than a kink. The method provided him stunning success, particularly on Indian soil, where his deliveries burst like packets of water upon the feeblest hint of a crack, and more than one modern-day batsman remarked that there was no more difficult challenge in cricket than handling Kumble on a wearing surface.";
        
    }
    if(y==8){
        return "Perhaps no cricketer since Douglas Jardine has polarised opinion quite like Muthiah Muralidaran. For the believers, he's among the greatest to ever spin a ball. For the doubters, he's a charlatan undeserving of the game's greatest records, responsible for changes in the laws that they think have legitimised throwing. What was undeniable was his ability to turn the ball sharply on just about any surface, and bowl the sort of marathon spells that would have seen a lesser man retire after five seasons rather than 18. Whether Sri Lanka played at home, on pitches where he was often unplayable, or overseas, Murali was the go-to man for half a dozen captains. He seldom disappointed.";
        
    }
    if(y==9){
        return "James Anderson had long proved himself as one of the most skilful and prolific fast bowlers in England's history when with the final ball of the 2018 Test summer he eclipsed Glenn McGrath as the most-prolific quick of all. His talents have been particularly apparent in Test cricket where his command of swing bowling, especially on his home grounds, has been the stuff of artistry, bearing comparison with any swing bowler in any age. He has been an integral part of three victorious Ashes campaigns and became the first England bowler to take 500 Test wickets, leaving Ian Botham's previous benchmark of 383 a mere dot on the horizon. ";
        
    }
    if(y==10){
        return "Kapil Dev was the greatest pace bowler India has produced, and their greatest fast-bowling allrounder. If he had played at any other time - not when Imran Khan, Ian Botham and Richard Hadlee were contemporaries - he would surely have been recognised as the best allrounder in the world. In any case he did enough to be voted India's Cricketer of the Century during 2002, ahead of Sunil Gavaskar and Sachin Tendulkar. His greatest feats were to lead India almost jauntily, and by his all-round example, to the 1983 World Cup, and to take the world-record aggregate of Test wickets from Hadlee. He could hit a ball even more brilliantly than he bowled it, with uncomplicated flair.";
        
    }
    
    if(y==11){
        return "Future generations might look at Andrew Flintoff's career figures and wonder what all the fuss was about. In Tests he averaged 31 with bat, and 32 with ball. For all the talk of fearsome fast bowling, only three five-fors featured among his 226 wickets. His one-day figures were good without being outstanding, and his Lancashire ones nothing special. But what the stats don't show is his presence, and the uplifting effect that Flintoff at his finest had on his team-mates, and crowds. The game treasures few things more than an all-action allrounder. Flintoff became one of English cricket's iconic figures and his presence helped to gain the game popularity as the new century developed.";
        
    }

    if(y==12){
        return "Few players who belong to the modern age are a better fit for the notion of the classical cricketer. Kallis is a fine, forceful batsman who has at his disposal both a rock-solid technique and a mind impervious to distraction. Though his role as a bowler diminishes with each passing season, he will be remembered as a purveyor of sometimes surprising pace and swing, and awkward bounce. In the slips, his sure-handedness and rattlesnake reflexes make ridiculous catches look regulation.";
        
    }
    if(y==13){
        return "When the annals of Bangladesh cricket are sifted by future generations, Shakib Al Hasan will emerge and re-emerge as the greatest cricketer of its first two decades. As a bowler, Shakib is accurate, consistent and canny; aggression and a wide range of strokes are the keys to his batting. Even more importantly, he has self-belief and an excellent temperament, unflustered by the big occasion and ready to do battle against the top teams.";
        
    }
    if(y==14){
        return "Dad Peter led the South African attack through the 1960s; uncle Graeme was one of the finest, if not the finest, left-hander to play the game. Shaun has bits of both in his makeup, but it is as an immaculate, Hadlee-esque, line and length seamer that he has established himself. At the start of his first-class career, though, he was both slippery and aggressive and his Natal team-mates delighted in totting up the number of batsmen he pinned match after match. He was brought into the South African Test side against Michael Atherton's England tourists in 1995/96 and although his father was the convener of selectors, there was never a hint of nepotism and the younger Pollock took quickly to the higher level.";
        
    }
}

function clearLog(){
    pText1.innerHTML = "";
    pText2.innerHTML = "";
    pText3.innerHTML = "";
    pText4.innerHTML = "";
    pText5.innerHTML = "";  
    pText6.innerHTML = "";
    pText7.innerHTML = "";
    pText8.innerHTML = "";
    pText9.innerHTML = "";
    pText10.innerHTML = "";   
    pText11.innerHTML = "";
    pText12.innerHTML = "";
    pText13.innerHTML = "";
    pText14.innerHTML = "";
    pText15.innerHTML = "";    
    btnText1.innerHTML = "Know More";
    btnText2.innerHTML = "Know More";
    btnText3.innerHTML = "Know More";
    btnText4.innerHTML = "Know More";
    btnText5.innerHTML = "Know More";
    btnText6.innerHTML = "Know More";
    btnText7.innerHTML = "Know More";
    btnText8.innerHTML = "Know More";
    btnText9.innerHTML = "Know More";
    btnText10.innerHTML = "Know More";
    btnText11.innerHTML = "Know More";
    btnText12.innerHTML = "Know More";
    btnText13.innerHTML = "Know More";
    btnText14.innerHTML = "Know More";
    btnText15.innerHTML = "Know More";
}

function writeLog(){
    s= playerBio(x);
    pText1.innerHTML = s;
    pText2.innerHTML = s;
    pText3.innerHTML = s;
    pText4.innerHTML = s;
    pText5.innerHTML = s;
    pText6.innerHTML = s;
    pText7.innerHTML = s;
    pText8.innerHTML = s;
    pText9.innerHTML = s;
    pText10.innerHTML = s; 
    pText11.innerHTML = s;
    pText12.innerHTML = s;
    pText13.innerHTML = s;
    pText14.innerHTML = s;
    pText15.innerHTML = s;    
    btnText1.innerHTML = "Know Less";
    btnText2.innerHTML = "Know Less";
    btnText3.innerHTML = "Know Less";
    btnText4.innerHTML = "Know Less";
    btnText5.innerHTML = "Know Less";
    btnText6.innerHTML = "Know Less";
    btnText7.innerHTML = "Know Less";
    btnText8.innerHTML = "Know Less";
    btnText9.innerHTML = "Know Less";
    btnText10.innerHTML = "Know Less";
    btnText11.innerHTML = "Know Less";
    btnText12.innerHTML = "Know Less";
    btnText13.innerHTML = "Know Less";
    btnText14.innerHTML = "Know Less";
    btnText15.innerHTML = "Know Less";

}
function aboutPlayer(){
 
    if(about==false){
        writeLog();
        about = true;
    }
   else{
    clearLog();
    about=false;
   }
}


panels.forEach((panel) => {
    
    panel.addEventListener('click',() =>{
        
        removeActiveClasses()
        panel.classList.add('active')
        var arr = Array.prototype.slice.call(panels); // Now it's an Array.
        x = arr.indexOf(panel);
        console.log(x);
        
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')

    })
}

