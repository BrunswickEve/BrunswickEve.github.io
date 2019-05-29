function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;

	if (question1 == "a plateau") {
		correct++;
	}

	if (question2 == "South Asia") {
		correct++;
	}

	if (question3 == "U-Tsang, Amdo, Kham") {
		correct++;
	}

	if (question4 == "Communist China invaded Tibet in 1959") {
		correct++;
	}

	if (question5 == "India and Nepal") {
		correct++;
	}

	if (question6 == "Tibetans are committing Self-Emulation") {
		correct++;
	}

	if (question7 == "Dalai Lama") {
		correct++;
	}

	if (question8 == "November 29, 1995") {
		correct++;
	}

	if (question9 == "Phur") {
		correct++;
	}

	if (question10 == "Doreen and Lodoe") {
		correct++;
	}

	var pictures = ["happy.jpg", "medium.jpg", "fustrated.jpg"];
	var messages = ["Great job!", "You can do better.", "Fail!"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 10) {
		score = 1;
	}

	if (correct == 10) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}