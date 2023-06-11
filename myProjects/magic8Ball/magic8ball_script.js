const points = [
  "It is certain",
  "Without a doubt",
  "You may rely on it",
  "Yes definitely",
  "It is decidedly so",
  "As I see it, yes",
  "Most likely",
  "Yes",
  "Outlook good",
  "Signs point to yes",
  "Reply hazy try again",
  "Better not tell you now",
  "Ask again later",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don’t count on it",
  "Outlook not so good",
  "My sources say no",
  "Very doubtful",
  "My reply is no",
];

function myFunction() {
  points.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  document.getElementById("response").innerHTML = points[0];
  document.getElementById("response").style.fontSize = "20px";
  // setTimeout(timeup, 5000);
}

const ball = document.getElementById("ball");
let frontSide = ball.querySelector(".front-side");
let backSide = ball.querySelector(".back-side");
// var number2 = ball.querySelector(".back-side .number");

function animateBall() {
  // Shake ball
  ball.classList.add("shake");
  setTimeout(function () {
    ball.classList.remove("shake");
    // front side out <-
    frontSide.style.transition = "transform 3s, opacity 1.5s";
    frontSide.style.transform = "translate(-100%, -100%)";
    frontSide.style.opacity = 0;

    // back side in with answer
    setTimeout(function () {
      backSide.style.transform = "translate(0%, 0%)";
      backSide.style.opacity = 1;
      // number2.style.transform = "translate(-50%, -50%)";
      myFunction();
    }, 2000);
  }, 1000);
}

function resetBall() {
  // Reset back side (random answer)
  backSide.style.opacity = 0;

  // Show front side (number 8)
  setTimeout(function () {
    frontSide.style.transform = "translate(0,0)";
    frontSide.style.opacity = 1;
  }, 1000);
}

setTimeout(resetBall, 500);
// Button click event listener for turning the ball
// turnButton.addEventListener("click", animateBall);

// Button click event listener for resetting the ball
// var resetButton = document.getElementById("resetButton");
// resetButton.addEventListener("click", resetBall);

// Timeout for automatic reset after 10 seconds
