const thoughts = [
    "Every existing bird is a decendent of a dinosaur.",
    "Crows can remeber human faces and hold grudges.",
    "We pass by serial killers every day and never know it.",
    "Sand is called that becuase it is in between the sea and land.",
    "A crocodile cannot stick its tongue out.",
    "A group of flamingos is called a flamboyance.",
    "A shrimp's heart is in its head.",
    "Cat urine glows under a black light.",
    "There are more stars in the universe than there are grains of sand on Earth.",
    "It would take 1,200,000 mosquitoes, each sucking once, to completely drain the average human of blood.",
    "It would take 19 minutes for a human to die from total blood loss.",
    "It would take 19 minutes to fall to the center of the Earth if there were a tunnel and you could ignore air resistance and the Earth's rotation.",
    "The real name for the hashtag symbol is 'octothorpe'.",
    "The longest time between two twins being born is 87 days.",
    "The tiny pocket in jeans was designed to store pocket watches.",
    "There were active volcanoes on the moon when dinosaurs were alive.",
    "Tug of war was an Olympic event until 1920.",
    "All swans in England are the property of the Queen.",
    "All polar bears are left-handed.",
    "All the ants on Earth weigh about as much as all the humans.",
    "All mammals get their color from their skin, not their fur.",
    "A group of unicorns is called a blessing.",
    "The average person walks the equivalent of three times around the world in a lifetime.",
    "The average person has about 1,460 dreams a year.",
    "The average person has about 70,000 thoughts a day.",
    "The average person spends about six months of their life waiting for red lights to turn green.",
    "Japan has a 'Naki Sumo' festival where wrestlers compete to see who can make a baby cry first.",
    "Japan has one vending machine for every 40 people.",
    "Wearing a suit of armor was once considered a fashion statement in the 15th century.",
    "Wearing a necktie could reduce blood flow to the brain by up to 7.5%.",

];

let currentIndex = -1;

function newThought() {

    const thoughtBox =
        document.getElementById("thoughtBox");

    thoughtBox.classList.add("slide-out");

    setTimeout(() => {

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

        // Instantly move to right
        thoughtBox.style.transition = "none";
        thoughtBox.style.transform = "translateX(150%)";
        thoughtBox.style.opacity = "0";

        // Force browser repaint
        thoughtBox.offsetHeight;

        // Re-enable animation
        thoughtBox.style.transition =
            "transform 0.6s ease, opacity 0.6s ease";

        // Slide into center
        thoughtBox.style.transform = "translateX(0)";
        thoughtBox.style.opacity = "1";

    }, 600);
}
newThought();