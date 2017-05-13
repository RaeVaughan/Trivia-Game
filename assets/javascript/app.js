var questions = [{
        question: "What is Sansa Stark’s favorite treat?",
        choices: ["Lamprey pie", "Tyroshi pears", "Lemon cakes", "Berry tarts"],
        answer: "Lemon cakes",
        //name so that each question's set of answers will have a differently named radio button to enable only one option choice per question
        name: "question1"
    },

    {
        question: "Who is NOT on Arya Stark’s list?",
        choices: ["Ilyn Payne", "Varys", "Cersei Lannister", "Joffrey Baratheon"],
        answer: "Varys",
        name: "question2"
    },

    {
        question: "Where does the Red Wedding take place?",
        choices: ["Riverrun", "The Red Keep", "The Twins", "The Eyrie"],
        answer: "The Twins",
        name: "question3"
    },

    {
        question: "What can kill a White Walker?",
        choices: ["Iron", "Sunlight", "Dragon fire", "Dragonglass"],
        answer: "Dragonglass",
        name: "question4"
    },

    {
        question: "Who says, 'When you play the game of thrones, you win or you die?'",
        choices: ["Varys", "Cersei Lannister", "Tyrion Lannister", "Petyr Baelish"],
        answer: "Cersei Lannister",
        name: "question5"
    },

    {
        question: "What are House Lannister’s words?",
        choices: ["A Lannister always pays his debts", "Ours be the glory", "Hear me roar!", "Righteous in wrath"],
        answer: "Hear me roar!",
        name: "question6"
    },

    {
        question: "Which of the following does Tyrion Lannister NOT say?",
        choices: ['Sometimes there is no happy choice, only one less grievous than the others.', 'It’s not easy being drunk all the time. If it were easy, everyone would do it.', 'A mind needs books like a sword needs a whetstone.', 'That’s what I do. I drink and I know things.'],
        answer: "'Sometimes there is no happy choice, only one less grievous than the others.'",
        name: "question7"
    },
]

var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = questions.length;

var number = 10;
var intervalId;

//function to run the timer
function run() {
    intervalId = setInterval(decrement, 1000);
}

//function to decrement timer used in run function, show the timer in the html, and change to the stats page when timer hits 0
function decrement() {
    number--;
    $("#timer").html(number);
    if (number === 0) {
        checkAnswers();
        renderStats();
        $("#submit-button").hide();
    }
}

//hides submit button when page loads
$("#submit-button").hide();


//when start button is clicked
$("#start-button").click(function() {
    $("#start-button").hide();
    $("#submit-button").show();
    $("#timer").text(number);
    run();

    //loops through object and creates questions
    for (var i = 0; i < questions.length; i++) {

        $("#content").append("<br>" + questions[i].question + "<br>");

        //loops through object and creates answers for each question
        for (var a = 0; a < questions[i].choices.length; a++) {
            $("#content").append("<input type='radio' name= '" + questions[i].name + "' value='" + questions[i].choices[a] + "'>" + "&nbsp;" + questions[i].choices[a] + "<br>");
        }
    }

});

//function to change to stats page on click of submit button
$("#submit-button").click(function() {
    //debugger
    checkAnswers();
    renderStats();
    $("#submit-button").hide();
    $("#timer").hide();
})

function checkAnswers() {
    var radios = $("input[type='radio']");
    console.log(radios);

    var answersSelected = radios.filter(":checked").map(function() {
        console.log(this);

        var answerObject = {}
        var answeredQuestion = $(this).attr("name");
        var answerValue = $(this).val();
        var questionIndex = answeredQuestion.slice(-1) - 1;

        answerObject.questionAnswered = answeredQuestion;
        answerObject.userAnswer = answerValue;
        answerObject.questionIndex = questionIndex;
        console.log(answerObject);

        return answerObject
    });
    console.log(answersSelected);

    for (var i = 0; i < answersSelected.length; i++) {
        var userGuess = answersSelected[i].userAnswer;
        var masterIndex = answersSelected[i].questionIndex;
        console.log(userGuess);
        var correctAnswer = questions[masterIndex].answer;
        console.log(correctAnswer);
        if (userGuess === correctAnswer) {
            correctCount++;
        } else {
            incorrectCount++;
        }
        //compute unanswered count 
        unansweredCount = questions.length - answersSelected.length;
    }
}

function renderStats() {
    $("#content").html("<h2>" + "Finished!" + "</h2>" + "<h3>" + "Correct Answers: " + correctCount + "</h3>" + "<h3>" + "Incorrect Answers: " + incorrectCount + "</h3>" + "<h3>" + "Unanswered: " + unansweredCount + "</h3>");
    $("#timer").hide();

}