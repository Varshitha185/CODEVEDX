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
    theme: "reptile"
    },
    // {
    // text: "A group of flamingos is called a flamboyance.",
    // theme: "ocean"
    // },
    // {
    // text: "A shrimp's heart is in its head.",
    // theme: "animal"
    // },
    // {
    // text: "Cat urine glows under a black light.",
    // theme: "animal"
    // },
    // {
    // text: "There are more stars in the universe than there are grains of sand on Earth.",
    // theme: "astronomy"
    // },
    // {
    // text: "It would take 1,200,000 mosquitoes, each sucking once, to completely drain the average human of blood.",
    // theme: "insect"
    // },
    // {
    // text: "It would take 19 minutes for a human to die from total blood loss.",
    // theme: "medicine"
    // },
    // {
    // text: "It would take 19 minutes to fall to the center of the Earth if there were a tunnel and you could ignore air resistance and the Earth's rotation.",
    // theme: "geography"
    // },
    // {
    // text: "The real name for the hashtag symbol is 'octothorpe'.",
    // theme: "language"
    // },
    // {
    // text: "The longest time between two twins being born is 87 days.",
    // theme: "human_being"
    // },
    // {
    // text: "The tiny pocket in jeans was designed to store pocket watches.",
    // theme: "fashion"
    // },
    // {
    // text: "There were active volcanoes on the moon when dinosaurs were alive.",
    // theme: "astronomy"
    // },
    // {
    // text: "Tug of war was an Olympic event until 1920.",
    // theme: "sports"
    // },
    // {
    // text: "All swans in England are the property of the Queen.",
    // theme: "animal"
    // },
    // {
    // text: "All polar bears are left-handed.",
    // theme: "animal"
    // },
    // {
    // text: "All the ants on Earth weigh about as much as all the humans.",
    // theme: "insect"
    // },
    // {
    // text: "All mammals get their color from their skin, not their fur.",
    // theme: "animal"
    // },
    // {
    // text: "A group of unicorns is called a blessing.",
    // theme: "mythology"
    // },
    // {
    // text: "The average person walks the equivalent of three times around the world in a lifetime.",
    // theme: "geography"
    // },
    // {
    // text: "The average person has about 1,460 dreams a year.",
    // theme: "psychology"
    // },
    // {
    // text: "The average person has about 70,000 thoughts a day.",
    // theme: "psychology"
    // },
    // {
    // text: "The average person spends about six months of their life waiting for red lights to turn green.",
    // theme: "traffic"
    // },
    // {
    // text: "Japan has a 'Naki Sumo' festival where wrestlers compete to see who can make a baby cry first.",
    // theme: "culture"
    // },
    // {
    // text: "Japan has one vending machine for every 40 people.",
    // theme: "technology"
    // },
    // {
    // text: "Wearing a suit of armor was once considered a fashion statement in the 15th century.",
    // theme: "history"
    // },
    // {
    // text: "Wearing a necktie could reduce blood flow to the brain by up to 7.5%.",
    // theme: "medicine"
    // }

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

        const selectedThought = thoughts[randomIndex];
        
        document.getElementById("thought").innerText = selectedThought.text;
        
        document.body.className = "";
        document.body.classList.add(selectedThought.theme);

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