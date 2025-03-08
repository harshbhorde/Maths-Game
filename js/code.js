var playing=false;
var action;
var timeremaining;
var correctAnswer;
document.getElementById('start').onclick=function()
{
if(playing==true)
{

    location.reload();
}
else{

    playing=true;
    score=0;
    document.getElementById('scorevalue').innerHTML=score;
    document.getElementById('timer').style.display="block";
    timeremaining=40;
   document.getElementById('trvalue').innerHTML=timeremaining;
    document.getElementById('start').innerHTML="Reset Game";
    showCountdown();
    
  generateQA();
        }
}
for(i=1; i<5; i++){
document.getElementById('box' + i).onclick=function()
{
if(playing==true)
{
  if(this.innerHTML==correctAnswer)
  {
    score++;
    document.getElementById('scorevalue').innerHTML=score*5;
    document.getElementById('wrong').style.display="none";
    document.getElementById('correct').style.display="block";
    setTimeout(function(){
        document.getElementById('correct').style.display="none";
    },1000)
    generateQA();
  }
else{
    document.getElementById('wrong').style.display="block";
    document.getElementById('correct').style.display="none";
    setTimeout(function(){
        document.getElementById('wrong').style.display="block";
    },1000)
    

}

}


}
}
function showCountdown(){
action=setInterval(function(){
timeremaining--;
document.getElementById('trvalue').innerHTML=timeremaining;

if(timeremaining==0){
   clearInterval(action);
   document.getElementById('gameover').style.display="block";
   document.getElementById('gameover').innerHTML="<p>GAME OVER!</p><p>Your Score is " + score + "</p>"
   document.getElementById('timeremaining').style.display="none";
  
   playing=false;
   document.getElementById('start').innerHTML="Start Game";
   document.getElementById('gameover').style.display="none";
  
}
},1000)

}
function generateQA(){

var x=1 + Math.round(9 * Math.random());
var y=1 + Math.round(9 * Math.random());
 correctAnswer=x * y;
 document.getElementById('question').innerHTML=x + "x" +y;
 var correctpos=1 + Math.round(3 * Math.random());
 document.getElementById('box' + correctpos).innerHTML=correctAnswer;
  var answers= [correctAnswer];
 for(i=1; i < 5; i++){

if(i!=correctpos){

    var wrongans;
    do{
        wrongans=(1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
    }
    while(answers.indexOf(wrongans)>-1){
         answers.push(wrongans);
        document.getElementById('box' + i).innerHTML=wrongans;

    }
    
}


 }
}
