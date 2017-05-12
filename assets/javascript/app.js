var questions = [
	{
		question: "What is Sansa Stark’s favorite treat?",
		choices: ["Lamprey pie", "Tyroshi pears", "Lemon cakes", "Berry tarts"],
		answer: "Lemon cakes"
	},

	{
		question: "Who is NOT on Arya Stark’s list?",
		choices: ["Ilyn Payne", "Varys", "Cersei Lannister", "Joffrey Baratheon"],
		answer: "Varys"
	},

	{
		question: "Where does the Red Wedding take place?",
		choices: ["Riverrun", "The Red Keep", "The Twins", "The Eyrie"],
		answer: "The Twins"
	},

	{
		question: "What can kill a White Walker?",
		choices: ["Iron", "Sunlight", "Dragon fire", "Dragonglass"],
		answer: "Dragonglass"
	},

	{
		question: "Who says, 'When you play the game of thrones, you win or you die?'",
		choices: ["Varys", "Cersei Lannister", "Tyrion Lannister", "Petyr Baelish"],
		answer: "Cersei Lannister"
	},

	{
		question: "What are House Lannister’s words?",
		choices: ["A Lannister always pays his debts", "Ours be the glory", "Hear me roar!", "Righteous in wrath"],
		answer: "Hear me roar!"
	},

	{
		question: "Which of the following does Tyrion Lannister NOT say?",
		choices: ['Sometimes there is no happy choice, only one less grievous than the others.', 'It’s not easy being drunk all the time. If it were easy, everyone would do it.', 'A mind needs books like a sword needs a whetstone.', 'That’s what I do. I drink and I know things.'],
		answer: "'Sometimes there is no happy choice, only one less grievous than the others.'"
	},
]

$("#start-button").click(function(){
	$("#start-button").hide();
	
	for (var i = 0; i < questions.length; i++) {

		$("#content").append(questions[i].question + "<br>");
		$("#content").append("<input type= 'radio' value = '" + questions[i].choices + "'" + ">" questions[i].choices + "<br>");

	}

});
















console.log(questions)