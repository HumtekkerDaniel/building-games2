let pageState = "intro"; // Tracks the current page state
let introImg; // Store the intro background image
let characterImg; // Stores the player image
let backgroundImg; // Stores the background image
let backgroundY = 0; // Stores the Y position of the background
let cloudImg; // Stores the cloud platform image
let monsterImg; // Stores the monster image
let rareMonsterImg; // Stores the rare monster image
let dareSound; // Stores the dare sound effect
let rareMonsterSound; // Stores the rare monster sound effect
let highScores = [];

function preload() {
    backgroundImg = loadImage("background.webp"); // Load the background image
    characterImg = loadImage("hero.png"); // Load the player image
    cloudImg = loadImage("cloud.png"); // Load the cloud platform image
    introImg = loadImage("image.png"); // Load the intro image
    monsterImg = loadImage("monster.png"); // Load the monster image
    rareMonsterImg = loadImage("rareMonster.png"); // Load the rare monster image
    dareSound = loadSound("da.mp3"); // Load the dare sound effect
    rareMonsterSound = loadSound("rareMonster.mp3"); // Load the rare monster sound effect
}

function setup() {
    createCanvas(500, 800); // Set canvas size
    setupIntroPage(); // Initialize the intro page
}

function draw() {
    switch (pageState) {
        case "intro":
            drawIntroPage();
            break;
        case "game":
            drawGamePage();
            break;
        case "gameOver":
            drawGameOverPage();
            break;
    }
}