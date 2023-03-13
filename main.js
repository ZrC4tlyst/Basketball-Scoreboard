let homeScore = document.getElementById('home-team-counter');
let guestScore = document.getElementById('guest-team-counter');
let homeScoreBtnOne = document.getElementById('1-point-home');
let homeScoreBtnTwo = document.getElementById('2-point-home');
let homeScoreBtnThree = document.getElementById('3-point-home');
let guestScorebtnOne = document.getElementById('1-point-guest');
let homeTeamCounter = 0;
let guestTeamCounter = 0;

function homePoint1() {
    homeTeamCounter += 1;
    homeScore.textContent = homeTeamCounter;
}

function homePoint2() {
    homeTeamCounter += 2;
    homeScore.textContent = homeTeamCounter;
}

function homePoint3() {
    homeTeamCounter += 3;
    homeScore.textContent = homeTeamCounter;
}

function guestPoint1() {
    guestTeamCounter += 1;
    guestScore.textContent = guestTeamCounter;
}

function guestPoint2() {
    guestTeamCounter += 2;
    guestScore.textContent = guestTeamCounter;
}

function guestPoint3() {
    guestTeamCounter += 3;
    guestScore.textContent = guestTeamCounter;
}