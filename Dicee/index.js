let randomNumber1 = Math.round(Math.random()*5 + 1);
let randomNumber2 = Math.round(Math.random()*5 + 1);

//get all the elements that i need.
let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");
let header = document.querySelector("h1");

dice1.setAttribute("src","images/dice"+randomNumber1+".png");
dice2.setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
    header.textContent = "Player 1 wins";
}
else if(randomNumber1 < randomNumber2){
    header.textContent = "Player 2 wins";
    
}else{
    header.textContent = "Draw";
    
}
     
