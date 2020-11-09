var ball1Img, ball2Img, ball3Img, ball4Img;
var line1Img, line2Img, line3Img, gameoverImg;
function setup() {
  createCanvas(600,600);
  
}

function preload() {
  ball1Img = loadImage("ball1.png")
  ball2Img = loadImage("ball2.png")
  ball3Img = loadImage("ball3.png")
  ball4Img = loadImage("ball4.png")

  line1Img = loadImage("stick.png")
  line2Img = loadImage("stick.png")
  line3Img = loadImage("stick.png")
  gameoverImg = loadImage("gameover.png")
}

function draw() {
  background(0,0,0);
  
  imageMode(CENTER);
  image(ball1Img, 100, 100, 20, 20);

  imageMode(CENTER);
  image(ball2Img, 200, 100, 20, 20);
  
  imageMode(CENTER);
  image(ball3Img, 300, 100, 20, 20);

  imageMode(CENTER);
  image(ball4Img, 400, 100, 20, 20);

  imageMode(CENTER);
  image(ball4Img, 5, 100, 20, 20);

  imageMode(CENTER);
  image(ball1Img, 500, 100, 20, 20);

  imageMode(CENTER);
  image(ball1Img, 100, 200, 20, 20);

  imageMode(CENTER);
  image(ball2Img, 200, 200, 20, 20);
  
  imageMode(CENTER);
  image(ball3Img, 300, 200, 20, 20);

  imageMode(CENTER);
  image(ball4Img, 400, 200, 20, 20);

  imageMode(CENTER);
  image(ball4Img, 5, 200, 20, 20);

  imageMode(CENTER);
  image(ball1Img, 500, 200, 20, 20);

  imageMode(CENTER);
  image(ball2Img, 50, 580, 20, 20);

  imageMode(CENTER);
  image(ball3Img, 60, 590, 20, 20);

  imageMode(CENTER);
  image(ball4Img, 40, 550, 20, 20);

  imageMode(CENTER);
  image(ball1Img, 30, 545, 20, 20);

  imageMode(CENTER);
  image(ball2Img, 50, 585, 20, 20);

  imageMode(CENTER);
  image(ball3Img, 30, 589, 20, 20);

  imageMode(CENTER);
  image(ball4Img, 24, 595, 20, 20);

  imageMode(CENTER);
  image(ball1Img, 44, 575, 20, 20);

  imageMode(CENTER);
  image(ball2Img, 33, 570, 20, 20);






  imageMode(CENTER);
  image(ball2Img, 140, 580, 20, 20);

  imageMode(CENTER);
  image(ball3Img, 160, 590, 20, 20);

  imageMode(CENTER);
  image(ball4Img, 120, 550, 20, 20);

  imageMode(CENTER);
  image(ball1Img, 130, 545, 20, 20);

  imageMode(CENTER);
  image(ball2Img, 150, 585, 20, 20);

  imageMode(CENTER);
  image(ball3Img, 160, 589, 20, 20);

  imageMode(CENTER);
  image(ball4Img, 145, 595, 20, 20);

  imageMode(CENTER);
  image(ball1Img, 155, 575, 20, 20);

  imageMode(CENTER);
  image(ball2Img, 165, 570, 20, 20);
  
  





  imageMode(CENTER);
  image(ball2Img, 370, 580, 20, 20);

  imageMode(CENTER);
  image(ball3Img, 390, 590, 20, 20);

  imageMode(CENTER);
  image(ball4Img, 345, 550, 20, 20);

  imageMode(CENTER);
  image(ball1Img, 325, 545, 20, 20);

  imageMode(CENTER);
  image(ball2Img, 365, 585, 20, 20);

  imageMode(CENTER);
  image(ball3Img, 355, 589, 20, 20);

  imageMode(CENTER);
  image(ball4Img, 335, 595, 20, 20);

  imageMode(CENTER);
  image(ball1Img, 375, 575, 20, 20);

  imageMode(CENTER);
  image(ball2Img, 367, 570, 20, 20);




 

  imageMode(CENTER);
  image(ball2Img, 576, 580, 20, 20);

  imageMode(CENTER);
  image(ball3Img, 560, 590, 20, 20);

  imageMode(CENTER);
  image(ball4Img, 543, 550, 20, 20);

  imageMode(CENTER);
  image(ball1Img, 524, 545, 20, 20);

  imageMode(CENTER);
  image(ball2Img, 580, 585, 20, 20);

  imageMode(CENTER);
  image(ball3Img, 563, 589, 20, 20);

  imageMode(CENTER);
  image(ball4Img, 584, 595, 20, 20);

  imageMode(CENTER);
  image(ball1Img, 537, 575, 20, 20);

  imageMode(CENTER);
  image(ball2Img, 542, 570, 20, 20);


  imageMode(CENTER);
  image(gameoverImg, 300, 300, 150, 60);


  imageMode(CENTER);
  image(line1Img, 500, 590, 10, 400);

  imageMode(CENTER);
  image(line2Img, 300, 590, 10, 400);

  imageMode(CENTER);
  image(line3Img, 100, 590, 10, 400);

    drawSprites();
}