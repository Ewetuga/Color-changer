const colours=["red","blue","green","yellow","brown","purple"];

 const colors=document.getElementById("color");
 const btn=document.getElementById("btn");


 function getRandomNumber(){
    return Math.floor(Math.random() * colours.length);
 }
 

 btn.addEventListener("click",function(){
    const randomNumber=getRandomNumber();
colors.textContent=colours[randomNumber];
document.body.style.backgroundColor=colours[randomNumber];
 });