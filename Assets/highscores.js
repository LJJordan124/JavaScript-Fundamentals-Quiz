var highscores = JSON.parse(localStorage.getItem('highscores') || '[]');

highscores.sort(function(a,b) {
    return b.score - a.score;
});

var highscoresList = document.querySelector('ol');
for (var i = 0; i <highscores.length; i++) {
    var li = document.createElement('li');
    li.textContent = 'Initials: ' + highscores[i].initials + ', Score: ' + highscores[i].score;
    highscoresList.appendChild(i);
}

var goBackBtn = document.getElementById('go-back');
goBackBtn.addEventListener('click', function() {
    window.location.href = '../index.html';
});

var clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function () {
    localStorage.removeItem('highscores');
    highscoresList.innerHTML = '';
});