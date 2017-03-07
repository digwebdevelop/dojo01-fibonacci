/*for (var i = 1; i <= 100; i++) {
    document.write("<br>You Chose " + i );
}

var randomNumber = prompt();*/

// console.log(guessResponse);
var computer = Math.floor(Math.random()*100);
console.log(computer);

function game() {
    var user = document.querySelector(".guess").value;
    console.log(user);
    
           if (user > computer) {
               document.getElementById("guessResponse").innerHTML = "<br> You're too high.";
           } else if (user < computer) {
               document.getElementById("guessResponse").innerHTML = "<br> You're too low.";
           } else if (user == computer) {
               document.getElementById("guessResponse").innerHTML = "<br> You're like a genius or something!!!!";
           } else {
               console.log("Yep");
           }
}

// var max = 100;
// var min = 1;

// function getRandom(min,max) {
//     return Math.random() * (max - min) + min;
// }

// var guessResponse;

// if (guessResponse > getRandom) {
//     document.write("<br> You're too high.");
// } else if (guessResponse < getRandom) {
     
//         document.write("<br> You're too low.");
        
//     } else if (guessResponse === getRandom) {
//         document.write("<br> You got it!");
//     } else {
//         document.write("<br> Choose a number");
//     }