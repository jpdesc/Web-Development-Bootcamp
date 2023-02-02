let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let imgDict = {
  1: "images/dice1.png",
  2: "images/dice2.png",
  3: "images/dice3.png",
  4: "images/dice4.png",
  5: "images/dice5.png",
  6: "images/dice6.png",
};

let imgSrc1 = imgDict[randomNumber1];
let imgSrc2 = imgDict[randomNumber2];

elem1 = document.querySelectorAll("img")[0];
elem1.setAttribute("src", imgSrc1);

elem2 = document.querySelectorAll("img")[1];
elem2.setAttribute("src", imgSrc2);

if (randomNumber1 > randomNumber2) {
  winner = "left";
} else if (randomNumber2 > randomNumber1) {
  winner = "right";
}

if (winner == "left") {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (winner == "right") {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
