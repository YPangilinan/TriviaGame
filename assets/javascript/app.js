$(document).ready(function(){

//ON CLICK FOR BUTTONS
$("#startButton").on("click", startTimer);
$("#startButton").on("click",displayQuestion);
$(".doneButton").on("click",stopTimer);


//FUNCTIONS FOR TIMER
var timeRemaining = 90;
var intervalId;


function startTimer(){
    timeRemaining = 90;
    intervalId = setInterval(count,1000);
    $("#startButton").hide();
    $("#start-text").hide();
    }
function count(){
    timeRemaining--;
    var converted = timeConverter(timeRemaining);
    $("#display").text("TIME REMAINING: " + converted);
    if (timeRemaining === 0){
        stopTimer();
        $("#display").empty();
    }
}
function stopTimer(){
    clearInterval(intervalId);
    checkAnswer();
}

//time converter taken from stopwatch activity
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

   
//FUNCTIONS FOR QUESTIONS AND ANSWERS
    function displayQuestion(){
      var questionContainer = $("#questions");
      var answerSelection = $("#answerform");
      questionContainer.append('<h2> Answer the following questions:</h2>');

      for (var i=0; i<quizQuestions.length; i++){
          questionContainer.append("<br><b>"+ quizQuestions[i].question +"<b>");

          var answer1 = quizQuestions[i].answers[0];
          var answer2 = quizQuestions[i].answers[1];
          var answer3 = quizQuestions[i].answers[2];
          var answer4 = quizQuestions[i].answers[3];

          questionContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
          questionContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
          questionContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
          questionContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer4 + '</label></div>');
        }
        var doneButton = $("<button>");
        doneButton.addClass("doneButton");
        doneButton.addClass("btn btn-light")
        doneButton.text("DONE")
        $("#questions").append(doneButton);
        $(".doneButton").on("click",stopTimer);

        
      }
    
    //checking for correct answers depending on user input
    function checkAnswer(){
    var numcorrectAnswers = 0;
    var numincorrectAnswers = 0;
    var correctAnswer;
    var userAnswer;

    for (var i=0; i<quizQuestions.length; i++){
        correctAnswer = quizQuestions[i].correctAnswer;
        userAnswer = $('input[id=radio'+i+']:checked + label').text();

        if (userAnswer === correctAnswer){
            numcorrectAnswers++;
        } else if(userAnswer !== correctAnswer){
            numincorrectAnswers++;
        } 
    }
    //FUNCTION TO HIDE QUESTIONS AND SHOW RESULTS PAGE
   function results(){
    $("#results-page").show();
    $("#title").text("Here's how you did!");
    $("#questions").empty();
    $("#questions").hide();
    $("#display").empty();
    $("#display").hide();
    $("#startButton").hide();
    $("#doneButton").hide();
    $("#correctAnswers").text("Correct Answers: " + numcorrectAnswers);
    $("#incorrectAnswers").text("Incorrect Answers: " + numincorrectAnswers);
        var resetButton = $("<button>");
        resetButton.addClass("resetButton");
        resetButton.addClass("btn btn-light");
        resetButton.text("START OVER")
        $("#results-page").append(resetButton);
        $(".resetButton").on("click",gameReset);
        $(".resetButton").on("click",displayQuestion);
        $(".resetButton").on("click", startTimer);

}
    results();
        
    } 
   
})
    //FUNCTION TO START TRIVIA OVER W/O REFRESHING PAGE
    function gameReset(){
        $("#questions").show();
        $("#display").show();
        $("#results-page").hide();
        $(".doneButton").show();
        $(".resetButton").hide();
    }


//QUESTION BANK
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
            question:"What is the name of Mulan's horse?",
            answers:["Mushu", "Cric-kee", "Genghis", "Khan"],
            correctAnswer:"Khan"
        },
        {
            question:"Who said the famous movie quote: 'Sometimes we only see how people are different from us. But if you look hard enoughm you see how much we're all alike'?",
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


