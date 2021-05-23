let imageArray = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];

function roll() {
    //Dice 1
    let calculateNumber1 = Math.floor(Math.random() * imageArray.length);
    document.querySelector(".img1").setAttribute("src", imageArray[calculateNumber1]);

    //Dice2
    let calculateNumber2 = Math.floor(Math.random() * imageArray.length);
    document.querySelector(".img2").setAttribute("src", imageArray[calculateNumber2]);

    //WINNER / DRAW
    if (calculateNumber1 > calculateNumber2) {
        document.querySelector("h1").innerHTML = ("Player 1 wins!")
        document.querySelector("h1").style.color = ("#008CBA")
    } else if (calculateNumber2 > calculateNumber1) {
        document.querySelector("h1").innerHTML = ("Player 2 wins!")
        document.querySelector("h1").style.color = ("#FF6347")

    } else {
        document.querySelector("h1").innerHTML = ("Draw!")
        document.querySelector("h1").style.color = ("grey")
    }

}
