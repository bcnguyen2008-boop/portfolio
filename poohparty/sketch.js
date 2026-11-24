
let ballX = 300;
let ballY = 300;
let ballSize = 40;
let score = 0;
let gameState = "START";

let hunnypot;
let bee;
let eeyore;
let piglet;
let tigger;
let hungryPooh;
let poohParty;
let fullPooh;
let poohDef;

let poohfriends;
let chooseFriend;

async function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);

hunnypot = await loadImage("imgs/hunnypot.png");
bee = await loadImage("imgs/bee.png");
eeyore = await loadImage("imgs/eeyore.png");
piglet = await loadImage("imgs/piglet.png");
tigger = await loadImage("imgs/tigger.png");
hungryPooh = await loadImage("imgs/hungrypooh.jpg");
poohParty = await loadImage("imgs/poohparty.png");
fullPooh = await loadImage("imgs/fullpooh3.png");
poohDef = await loadImage("imgs/poohdef.png");

poohfriends = [eeyore, piglet, tigger];
chooseFriend = random(poohfriends)



  textAlign(CENTER);
  textSize(20);
}

function draw() {
  background(255, 250, 223);

  if (gameState == "START") {
    startScreen();
  }

  if (gameState == "L1") {
    levelOne();
  }

  if (gameState == "L2") {
    levelTwo();
  }

  if (gameState == "L3") {
    levelThree();
  }

  if (gameState == "WIN" ) {
    winScreen();
  
}

  text("Score: " + score, width / 2, 40);
}

function startScreen () {
  background(255, 250, 223)
  fill (110, 93, 79)
  text("Help Pooh set up his party!", width/2, height/2 - 20)
  text("Press any key to start", width/2, height/2 + 20)
  image(poohDef, 300, 500, 200, 200)

  if (keyIsPressed) {
    gameState = "L1"
  }

}

function levelOne() {
  text("Level One", width / 2, height - 20);
  text("Follow the bees to the hunny!", width/2, height - 70)

  let distToBall = dist(ballX, ballY, mouseX, mouseY);

  if (distToBall < ballSize / 2) {
    ballX = random(width);
    ballY = random(height);
    score = score + 1;
  }

  line(ballX, ballY, mouseX, mouseY);
  image(bee, ballX, ballY, 100, 100);

  if (score >= 5) {
    gameState = "L2";
  }
}

function levelTwo() {
  text("Level Two", width / 2, height - 20);
  text("Grab the hunny!", width/2, height - 70)


  let distToBall = dist(ballX, ballY, mouseX, mouseY);

  if (distToBall < ballSize / 2) {
    ballX = random(width);
    ballY = random(height);
    score = score + 1;
  }

  image(hunnypot, ballX, ballY, 75, 75);

  if (score >= 10) {
    gameState = "L3";
  }
}

function levelThree() {
  text("Level Three", width / 2, height - 20);
  text("Find all of Pooh's friends!", width/2, height - 70)


  let distToBall = dist(ballX, ballY, mouseX, mouseY);

  if (distToBall < ballSize / 2) {
    ballX = random(width);
    ballY = random(height);
    score = score + 1;
    chooseFriend = random(poohfriends)

  }
  image(chooseFriend,ballX, ballY, 90, 90);

 if (score >= 20) {
    gameState = "WIN";
  }
}

function winScreen () {
  text("You win!", width/2, height/2)
  image(poohParty, 300, 500)

}