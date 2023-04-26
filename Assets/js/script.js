class Quiz {
    constructor(questions) {
        this.score - 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    getQuestionIndex() {
        return this.question[this.questionIndex];
    }
    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }
    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        let questionElement =document.getElementById("questions");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice"
            + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
    }
};
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
}
function showScores() {
    let quizEndHTML = 
    `
        <h1>QuizCompleted</h1>
        <h2 id="scores">You Scored: ${quiz.score} of ${quiz.question.length}</h2>
        <div class="quiz-repeat">
            <a href="index.html">Take Quiz Again</a>        
        </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
}
let questions = [
    new Question(
        "Commonly used data types DO NOT include:", ["strings", "booleans", "alerts", "numbers"], "alerts"        
    ),
    new Question(
        "The condition in an if/else statement is enclosed within ____.", ["quotes", "curly brackets", "parentheses", "square brackets"], "parentheses"        
    ),
    new Question(
        "Arrays in JavaScript can be used to store ____.", ["numbers and strings", "other arrays", "booleans", "all of the above"], "all of the above"        
    ),
    new Question(
        "String values must be enclosed within ____ when being assigned to variables.", ["quotation marks", "commas", "curly brackets", "parentheses"], "quotation marks"        
    ),
    new Question(
        "A very useful tool used during development and debugging for printing content to the debugger is:", ["terminal / bash", "JavaScript", "for loops", "console.log"], "JavaScript"        
    ),
];
let quiz = new Quiz(questions);
displayQuestion();