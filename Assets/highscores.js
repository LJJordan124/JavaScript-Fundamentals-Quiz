var highScores = JSON.parse(localStorage.getItem('highScores') || '[]');

highScores.sort(function(a, b) {
    return b.score - a.score;
});

var highScoresList = document.querySelector('ol');
for (var i = 0; i < highScores.length; i++) {
    var li = document.createElement('li');
    li.textContent = 'Initials: ' + highScores[i].initials + ', Score: ' + highScores[i].score;
    highScoresList.appendChild(li);
}

var goBackBtn = document.getElementById('go-back');
goBackBtn.addEventListener('click', function() {
    window.location.href = '../index.html';
});

var clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function() {
    localStorage.removeItem('highScores');
    highScoresList.innerHTML = '';
});