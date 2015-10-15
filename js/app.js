$(document).ready(function() {

// Hide Photo Elements
$("#jQuery").hide();
$("#Rails").hide();
$("#PHP").hide();
$("#Python").hide();
$("#Swift").hide();


var questions = [{
	question: "Who created jQuery?",
	choices: ["Misko Hevery", "John Resig", "Satoshi Nakamoto", "Nikola Tesla"],
	correct: 1
	}
	{
	question: "When Was Ruby on Rails First released?",
	choices: ["22 of October 2006", "13 of January 2007", "13 of December 2005", "09 of March 2005"],
	correct: 2
	}
	{
	question: "Which one of the below is a Python Framework?",
	choices: ["Backbone", "MooTools", "Sinatra" "Flask"],
	correct: 3
	}
	{
	question: "When PHP first was released what did the acronym mean?",
	choices: ["Pretty Hefty Program", "Personal Home Page", "Please Help Program", "Plethora Hypertext Programming"],
	correct: 1
	}
	{
	question: " Who and When was Swfit Created?",
	choices: ["Taylor Swift in 2012", "Apple Inc in 2014", "Justin Bieber in 2015", "Microsoft in 2013"].
	answer: 1
	}
}]
});