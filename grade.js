var collectedAnswers = [];

// Assuming you have stored correct answers for each category in a global variable
var correctAnswersCategory1 = ['Documentum', 'Collabnet Teamforge', 'AccuRev'];
var correctAnswersCategory2 = ['Clear Case', 'Github'];
var correctAnswersCategory3 = ['Collaborator Smart Bear', 'Crucible'];
var correctAnswersCategory4 = ['Bugzilla', 'Linode'];
var correctAnswersCategory5 = ['Jira', 'Zephyr'];
var correctAnswersCategory6 = ['HP Quality Center','Rally','VersionOne'];
var correctAnswersCategory7 = ['Bard','ChatGPT'];
var correctAnswersCategory8 = ['SonarQube', 'Zoom'];
var correctAnswersCategory9 = ['Render'];
var correctAnswersCategory10 = ['Mockito','gMock'];
var correctAnswersCategory11 =['Veracode'];

// Add correct answers for other categories as needed

// Calculate and display the score
var score = calculateScore(collectedAnswers, correctAnswersCategory1);
document.getElementById('score-display').textContent += ' ' + score + ' out of 11';

function calculateScore(userAnswers, correctAnswers) {
    var correctCount = 0;

    for (var i = 0; i < userAnswers.length; i++) {
        if (correctAnswers.includes(userAnswers[i])) {
            correctCount++;
        }
    }

    return correctCount;
}

function tryAgain() {
    // Redirect to the first category page to start again
    window.location.href = 'category1.html';
}