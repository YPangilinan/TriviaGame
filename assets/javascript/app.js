$(document).ready(function(){
//have a start button to begin the game everything else will be hidden.

$("#startButton").on("click", startTimer);

//onclick function for start button and timer beginning

//once the player clicks start the timer  will begin and questions and timer divs will show still hidden results div

//display timer to the DOM create a function for the timer
var timeRemaining = 120;

function startTimer(){
    timeRemaining = 120;
    var intervalId;
    intervalId = setInterval(count,1000);
    }
function count(){
    timeRemaining--;
    var converted = timeConverter(timeRemaining);
    $("#display").text(converted);
}
function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }

function timerReset(){
    clearInterval();
    timeRemaining = 120;
    $("#display").text("01:59");
}
//display questions to the DOM

var trivia = {
    displayQuestions =  function(){
        var questionList = $("#questions");
        var answers = $("#answers");
        questionList.append("<h2> Answer the following questions : </h2>")
        for (var i=0; i<quizQuestions.length; i++){
        questionList.append('<div id = "question'> + quizQuestions[i].question + '</div>');
    }
} ;
}


//function to play the game

//timer will count down from 1 minute to complete the test one

//if else statements to determine number of incorrect and correct answers

//once the timer reaches zero, remove questions and display results div

//add a done button

//counter variables for correct answers, wrong answers, and score total 
var correctAnswers = 0;
var incorrectAnswers = 0;


//start over button will reset the game
//onclick for reset including timer reset function
$("#resetButton").on("click",timerReset());


    var quizQuestions = [
        {
            question:"Which of the following is NOT part of Snow White's Seven Dwarves?",
            answers:["Sleepy", "Hungry", "Happy", "Grumpy"],
            correctAnswer:"Hungry"
        },
        {
            question:"What is Simba's mother's name?",
            answers:["Sarabi", "Nala", "Nairobi", "Sarafina"],
            correctAnswer:"Sarabi"
        },
        {
            question:"Who was the first Disney Princess?",
            answers:["Cinderella", "Pocahontas", "Belle", "Snow White"],
            correctAnswer:"Snow White"
        },
        {
            question:"Finish the lyrics: 'Hakuna Matata, what a wonderful phrase! Hakuna Matata ain't no passing craze... it means ___ ______ for the rest of your days...'",
            answers:["So Worried", "Slight Worries", "No Worries", "I worry"],
            correctAnswer:"No Worries"
        },
        {
            question:"What are the names of Cinderella's evil stepsisters?",
            answers:["Anastasia and Drizella", "Beatrice and Daphine", "Daphine and Anastasia", "Drizella and Beatrice"],
            correctAnswer:"Anastasia and Drizella"
        },
        {
            question:"What do Aladdin and his monkey Abu steal from the marketplace when you're first introduced to them in the movie?",
            answers:["An apple", "A ring", "A banana", "A loaf of bread"],
            correctAnswer:"A loaf of bread"
        },
        {
            question:"What is the name of Mulan's horse",
            answers:["Mushu", "Cric-kee", "Genghis", "Khan"],
            correctAnswer:"Khan"
        },
        {
            question:"Who said the famous movie quote: 'Sometimes we only see how people are different from us. But if you look hard enoughm you see how much we're all alike'",
            answers:["Laverne in The Hunchback of Notre Dame", "Anna in Frozen 2", "Jasmine in Aladdin", "John Smith in Pocahontas"],
            correctAnswer:"Jasmine in Aladdin"
        },
        {
            question:"What is Boo's real name in Monster's Inc?",
            answers:["Ashley", "Mary", "Alice", "Suzie"],
            correctAnswer:"Mary"
        },
        {
            question:"How many eggs does Gaston eat for breakfast?",
            answers:["24", "48", "36", "60"],
            correctAnswer:"60"
        },
        {
            question:"Where is the entrance to Peter Pan's hideout?",
            answers:["Blindman's Bluff", "Hangman's Tree", "Cannibal Cove", "Mermaid Lagoon"],
            correctAnswer:"Hangman's Tree"
        },
        {
            question:"Who disguises himself as an organgutan to rescue Mowgli in The Jungle Book?",
            answers:["Rama", "Baloo", "Bagheera", "Colonel Hathi"],
            correctAnswer:"Baloo"
        },
        {
            question:"What is the first monster Hercules fights when he arrives in Thebes?",
            answers:["Hydra", "Cyclops", "Gorgon", "Rock Titan"],
            correctAnswer:"Cyclops"
        },
        {
            question:"What is Minnie Mouse's first full name?",
            answers:["Melinda", "Mary", "Minerva", "Wilhelmina"],
            correctAnswer:"Minerva"
        },
        {
            question:"Final Question! What happens when you wish upon a star?",
            answers:["Your dreams come true", "Your dreams become reality", "Your dreams will no longer be dreams", "Your dreams will remain your dreams"],
            correctAnswer:"Your dreams come true"
        },
    ]
})


