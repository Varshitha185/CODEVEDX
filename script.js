const thoughts = [
    {
    text:"Every existing bird is a decendent of a dinosaur.",
    theme: "dinosaur"
    },
    {
    text: "The first dinosaur fossil was discovered in 1824.",
    theme: "dinosaur"
    },
    {
        text:"Crows can remeber human faces and hold grudges.",
        theme: "crow"
    },
    {
    text: "We pass by serial killers every day and never know it.",
    theme: "strangers"
    },
    {
    text: "Most people you'll ever see will never know your name.",
    theme: "strangers"
},

{
    text: "Someone you've walked past has probably thought about you longer than you've thought about them.",
    theme: "strangers"
},

{
    text: "Every window lit up at night contains an entirely different life.",
    theme: "strangers"
},
    {
    text: "Sand is called that becuase it is in between the sea and land.",
    theme: "beach"
    },
    {
    text: "A crocodile cannot stick its tongue out.",
    theme: "dinosaur"
    },
    {
    text: "A group of flamingos is called a flamboyance.",
    theme: "flamboyance"
    },
    {
    text: "A shrimp's heart is in its head.",
    theme: "wildlife"
    },
    {
    text: "Cat urine glows under a black light.",
    theme: "wildlife"
    },
    {
    text: "There are more stars in the universe than there are grains of sand on Earth.",
    theme: "astronomy"
    },
    {
    text: "It would take 1,200,000 mosquitoes, each sucking once, to completely drain the average human of blood.",
    theme: "biology"
    },
    {
    text: "It would take 19 minutes for a human to die from total blood loss.",
    theme: "biology"
    },
    {
    text: "It would take 19 minutes to fall to the center of the Earth (if there were a tunnel and you could ignore air resistance and the Earth's rotation.)",
    theme: "impossible"
    },
    {
    text: "The real name for the hashtag symbol is 'octothorpe'.",
    theme: "language"
    },
    {
    text: "The longest time between two twins being born is 87 days.",
    theme: "strangers"
    },
    {
    text: "The tiny pocket in jeans was designed to store pocket watches.",
    theme: "history"
    },
    {
    text: "There were active volcanoes on the moon when dinosaurs were alive.",
    theme: "astronomy"
    },
    {
        text: "The light from some stars started traveling toward Earth before humans existed.",
        theme: "astronomy"  
    },
    {
    text: "Tug of war was an Olympic event until 1920.",
    theme: "history"
    },
    {
    text: "All swans in England are the property of the Queen.",
    theme: "wildlife"
    },
    {
    text: "All polar bears are left-handed.",
    theme: "wildlife"
    },
    {
    text: "All the ants on Earth weigh about as much as all the humans.",
    theme: "wildlife"
    },
    {
    text: "All mammals get their color from their skin, not their fur.",
    theme: "wildlife"
    },
    {
    text: "A group of unicorns is called a blessing.",
    theme: "flamboyance"
    },
    {
    text: "The average person walks the equivalent of three times around the world in a lifetime.",
    theme: "lifetime"
    },
    {
    text: "The average person has about 1,460 dreams a year.",
    theme: "impossible"
    },
    {
    text: "The average person has about 70,000 thoughts a day.",
    theme: "biology"
    },
    {
    text: "The average person spends about six months of their life waiting for red lights to turn green.",
    theme: "lifetime"
    },
    {
    text: "Japan has a 'Naki Sumo' festival where wrestlers compete to see who can make a baby cry first.",
    theme: "culture"
    },
    {
    text: "Japan has one vending machine for every 40 people.",
    theme: "strangers"
    },
    {
    text: "Wearing a suit of armor was once considered a fashion statement in the 15th century.",
    theme: "history"
    },
    {
    text: "Wearing a necktie could reduce blood flow to the brain by up to 7.5%.",
    theme: "biology"
    }

];

let unseenThoughts = [...thoughts];

let history = [];

let currentThought = null;

function showThought(thoughtObj) {

    const thoughtBox =
        document.getElementById("thoughtBox");

    thoughtBox.classList.add("slide-out");

    setTimeout(() => {

        thoughtBox.classList.remove("slide-out");

        thoughtBox.classList.add("slide-right");

        document.getElementById("thought").innerText =
            thoughtObj.text;

        document.body.className =
            thoughtObj.theme;

        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                thoughtBox.classList.remove("slide-right");

            });

        });

    }, 600);
}

function newThought() {

    if (currentThought !== null) {

        history.push(currentThought);

    }

    if (unseenThoughts.length === 0) {

        document.getElementById("thought").innerText =
            `You've reached the end.

${thoughts.length} thoughts passed through you.`;

        return;
    }

    const randomIndex = Math.floor(
        Math.random() * unseenThoughts.length
    );

    currentThought =
        unseenThoughts[randomIndex];

    unseenThoughts.splice(
        randomIndex,
        1
    );

    showThought(currentThought);

    document.getElementById("counter").innerText =
`${unseenThoughts.length} thoughts remaining`;
}
newThought();

function previousThought() {

    if (history.length === 0) return;

    const previous =
        history.pop();

    unseenThoughts.unshift(
        currentThought
    );

    currentThought =
        previous;

    showThought(currentThought);
}

function restartThoughts() {

    unseenThoughts = [...thoughts];

    history = [];

    currentThought = null;

    document.getElementById("restartBtn")
        .style.display = "none";

    newThought();
}

document.getElementById("restartBtn")
    .style.display = "inline-block";

let startX = 0;

document.addEventListener(
    "touchstart",
    (e) => {

        startX =
            e.touches[0].clientX;

    }
);

document.addEventListener(
    "touchend",
    (e) => {

        const endX =
            e.changedTouches[0].clientX;

        const diff =
            endX - startX;

        if (diff < -50) {

            newThought();

        }

        if (diff > 50) {

            previousThought();

        }

    }
);

document.addEventListener(
    "keydown",
    (e) => {

        if (e.key === "ArrowRight") {

            newThought();

        }

        if (e.key === "ArrowLeft") {

            previousThought();

        }

    }
);

let favorites = [];

function toggleFavorite() {

    if (!currentThought) return;

    favorites.push(currentThought);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

}