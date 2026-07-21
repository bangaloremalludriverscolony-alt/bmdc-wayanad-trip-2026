// BMDC Wayanad Trip 2026

let totalSeats = 20;
let bookedSeats = 0;
let waitingList = 0;

const form = document.getElementById("tripForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (bookedSeats < totalSeats) {
            bookedSeats++;
            document.getElementById("seatCount").innerText = totalSeats - bookedSeats;
            alert("✅ Registration Successful!\nYour seat has been confirmed.");
        } else {
            waitingList++;
            document.getElementById("waitingCount").innerText = waitingList;
            alert("⏳ Seats are full.\nYou have been added to the waiting list.");
        }

        form.reset();
    });
}

// Countdown Timer
const tripDate = new Date("August 9, 2026 06:00:00").getTime();

setInterval(function () {

    const now = new Date().getTime();
    const distance = tripDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const timer = document.getElementById("countdown");

    if (timer) {
        timer.innerHTML = "Trip Starts In : " + days + " Days";
    }

}, 1000);
