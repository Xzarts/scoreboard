let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")
let homeScore = 0
let guestScore = 0

function homeOnePoint() {
    homeScore += 1;
    homePoints.textContent = homeScore;
}

function homeTwoPoint() {
    homeScore += 2;
    homePoints.textContent = homeScore;
}

function homeThreePoint() {
    homeScore += 3;
    homePoints.textContent = homeScore;
}

function guestOnePoint() {
    guestScore += 1;
    guestPoints.textContent = guestScore;
}

function guestTwoPoint() {
    guestScore += 2;
    guestPoints.textContent = guestScore;
}

function guestThreePoint() {
    guestScore += 3;
    guestPoints.textContent = guestScore;
}