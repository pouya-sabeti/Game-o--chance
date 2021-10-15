function value_num(a){
var value_input = document.getElementById("numb").value;
document.getElementById("numb").value = value_input + String(a);
}
function Play_again(){
    document.getElementById("numb").value = "";
    Your_score = 20;
    document.getElementById("Your_score").innerHTML = Your_score;
    document.body.style = "background-color: #222;"
    document.getElementById("help").innerHTML = "Not started... ";
    document.querySelector(".number").innerHTML= "?";
    
  RandomNumber = random[Math.floor(Math.random()*20)];
  
    document.getElementById("Check").onclick = function(){check()}
    document.getElementById("Check").innerHTML="Check!";
}
var the_best_score = 0;

   
const random = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let RandomNumber = random[Math.floor(Math.random()*20)];

var Your_score = 20;

function check(){
  var numvalue = document.getElementById("numb").value;
if(numvalue == RandomNumber){
 document.body.style = "background-color: #60b347;"
 document.getElementById("help").innerHTML = "..You won..";
 document.querySelector(".number").innerHTML= RandomNumber;
 if(Your_score > the_best_score){
 the_best_score = Your_score; 
 }
 document.getElementById("The_best_score").innerHTML = the_best_score;
 document.getElementById("Check").onclick = function(){Play_again()}
 document.getElementById("Check").innerHTML="Play again";
}
else{
Your_score -= 1;
document.getElementById("Your_score").innerHTML = Your_score;
if(numvalue < RandomNumber){
    document.getElementById("help").innerHTML = "Go higher...";
}
else if(numvalue > RandomNumber){
    document.getElementById("help").innerHTML = "Go lower...";
}
}
}


