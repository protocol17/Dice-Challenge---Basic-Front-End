var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;

var randomDiceImage1="images/dice"+random1+".png";
var randomDiceImage2="images/dice"+random2+".png";

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomDiceImage1);

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomDiceImage2);

if(random1>random2){
    var result="Player1 is the Winner 🎊";
    var heading=document.querySelectorAll("h1")[0];
    heading.innerHTML=result;
}
else if(random2>random1){
    var result="Player2 is the Winner 🎊";
    var heading=document.querySelectorAll("h1")[0];
    heading.innerHTML=result;
}

else{
    var result="Draw ";
    var heading=document.querySelectorAll("h1")[0];
    heading.innerHTML=result;
}

