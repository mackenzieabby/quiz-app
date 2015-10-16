$(document).ready(function() {

	$("#reset_game").hide();
	$(".container").hide();
	// Hide Photo Elements
	$("#results").hide();
	$("#jQuery").hide();
	$("#Rails").hide();
	$("#PHP").hide();
	$("#Python").hide();
	$("#Swift").hide();

	// Questions and Answers
	var questions = [{
		question: "Who created jQuery?",
		choices: ["Misko Hevery", "John Resig", "Satoshi Nakamoto", "Nikola Tesla"],
		correct: "John Resig"
	},
		{
		question: "When Was Ruby on Rails First released?",
		choices: ["22 of October 2006", "13 of January 2007", "13 of December 2005", "09 of March 2005"],
		correct: "13 of December 2005"
	},
		{
		question: "Which one of the below is a Python Framework?",
		choices: ["Backbone", "MooTools", "Sinatra", "Flask"],
		correct: "Flask"
	},
		{
		question: "When PHP first was released what did the acronym mean?",
		choices: ["Pretty Hefty Program", "Personal Home Page", "Please Help Program", "Plethora Hypertext Programming"],
		correct: "Personal Home Page"
	},
		{
		question: "Who and When was Swift Created?",
		choices: ["Taylor Swift in 2012", "Apple Inc in 2014", "Justin Bieber in 2015", "Microsoft in 2013"],
		correct: "Apple Inc in 2014"
		}]

	//Variables
	var numberCorrect = 0; // Shows how many correct at the end
	var currentQuestion = 0; // WHat question of the quiz we are on
	var userCurrentQuestion = 0; // Current Question for the user
	var newQuestion = $("#onlyQuestion").text(questions[currentQuestion].question); // Inputs new Question
	var newAnswer = $("#answerZero").text(questions[currentQuestion].choices[0]) + $("#answerOne").text(questions[currentQuestion].choices[1]) + $("#answerTwo").text(questions[currentQuestion].choices[2]) + $("#answerThree").text(questions[currentQuestion].choices[3]);// Inputs New Answer
	
	// Adding Class for Checking and Displaying Selected Answer
	function selectedAnswer() {
		$("#answerZero").click(function(event) {
			$(this).toggleClass('checkAnswer');
			$(".selected").html("You have selected:" + $(".checkAnswer").text());
		});
		$("#answerOne").click(function(event) {
			$(this).toggleClass('checkAnswer');
			$(".selected").html("You have selected:" + $(".checkAnswer").text());
		});
		$("#answerTwo").click(function(event) {
			$(this).toggleClass('checkAnswer');
			$(".selected").html("You have selected:" + $(".checkAnswer").text());
		});
		$("#answerThree").click(function(event) {
			$(this).toggleClass('checkAnswer');
			$(".selected").html("You have selected:" + $(".checkAnswer").text());
		});
		
	}

	selectedAnswer(); // Calls answerChecking in the Scope

	// When Submit Button is clicked
	$("#submit").click(function() {
		checker(); // Checks for Correct Anawer
		increaseQuestion(); // Increases Question
		populate(); // Populates new Q and A data
		clearThis(); // CLear
		photoShow(); // Shows Photos and update currentQuestion for user

	});

 	// Checks if answer text is equal to questions[currentQuestion].correct
	function checker() {
		var answer = $(".checkAnswer").html();
		if (answer == questions[currentQuestion].correct ) {
			numberCorrect++;
			swal("Your Correct The Answer is" + "\n" + questions[currentQuestion].correct);
			$(".sweet-alert h2").css('color', '#D80887');
			console.log("correct");
		} else {
			swal("Oops, Wong Answer, but the Correct Answer is" + "\n" + questions[currentQuestion].correct);
			$(".sweet-alert h2").css('color', '#860000');
			console.log("incorrect");
		}
	}		

	// Populates Questions and Answers
	function populate() {
		$("#onlyQuestion").text(questions[currentQuestion].question); // Inputs new Question
		$("#answerZero").text(questions[currentQuestion].choices[0]) + $("#answerOne").text(questions[currentQuestion].choices[1]) + $("#answerTwo").text(questions[currentQuestion].choices[2]) + $("#answerThree").text(questions[currentQuestion].choices[3]);
	
	}	

	// Shows Photo Depending on Question  and updates userCurrentQuestion
	function photoShow() {
	var questionTextCheck = $("#onlyQuestion").html();
		if (questionTextCheck == "Who created jQuery?" ) {
			$("#jQuery").show();
			questNum();
		} else if  (questionTextCheck == "When Was Ruby on Rails First released?") {
			$("#jQuery").hide();
			$("#Rails").show();
			questNum();
		} else if (questionTextCheck == "Which one of the below is a Python Framework?") {
			$("#Rails").hide();
			$("#Python").show();
			questNum();
		} else if (questionTextCheck == "When PHP first was released what did the acronym mean?") {
			$("#Python").hide();
			$("#PHP").show();
			questNum();
		} else if (questionTextCheck == "Who and When was Swift Created?") {
			$("#PHP").hide();
			$("#Swift").show();
			questNum();
			showResult()
			
		}
	}	
	photoShow(); // Calls photoShow

	// Adds the currentQuestion number to a span
	function questNum() {
		userCurrentQuestion++;
		$("#oneNum").html(userCurrentQuestion);
	}

	// Increase currentQuestion
	function increaseQuestion() {
		currentQuestion++;
	}

	// CLear
	function clearThis() {
		$(".selected").empty();
		$("h2").removeClass("checkAnswer");
	}

	// Shows results
	function showResult() {
		$("#results").show(6000);
		$("#results").click(function(event) {
        	swal("You Got" + "\n" + numberCorrect + "\n" + "out of" + "\n" + "5" + "\n" + "correct.").fadeIn(1000);
		});
	}

	// Hides loading screen and shows the Quiz
	function enterQuiz() {
		$("#enter_button").click(function(event) {
			$(".loading").hide(1000);
			$(".container").show(1500);
			$("#reset_game").show(2000);

		});
	}

	enterQuiz(); // Calling enterQuiz

	function resetGame() {
		$("#reset_game").click(function(event) {
			location.reload();
		});
	}

	resetGame(); // Resets Game
});

