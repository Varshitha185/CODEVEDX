const thoughts = [
    "Do fish know they're underwater?",
    "The last dinosaur never knew it was the last dinosaur.",
    "Someone remembers you, but you don't remember them.",
    "What was the first joke ever told?",
    "Do birds have favorite humans?"
];

let currentIndex = -1;

function newThought() {

    let randomIndex;

    do {
        randomIndex = Math.floor(
            Math.random() * thoughts.length
        );
    }
    while (randomIndex === currentIndex);

    currentIndex = randomIndex;

    document.getElementById("thought").innerText =
        thoughts[randomIndex];
}

newThought();