var bird;
var pipesimage;
var pipes = [];
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score;
function preload (){
pipesimage = loadImage("500_F_168337653_BFaUjGRpNpO3rSB7lZSI2AGGhfLarwyt.jpg")
}
function setup() {
var canvas = createCanvas(400,600)
bird = new Bird();
pipes.push(new Pipe());
score = 0
}

function draw() {
background(pipesimage);

for (var i = pipes.length-1; i >= 0;i--) {
    pipes[i].show();
    pipes[i].update();


if (pipes[i].hits(bird)) {
    gameState = END
    score = score-5 ;
    console.log("HIT");
}


    if (pipes[i].offscreen()) {
        pipes.slice(i,1);
    }


  }
bird.update();
bird.show();
fill("Black")
textSize(15);
text("Score: "+ score, 300,50);
if (frameCount % 30 == 0 ) {
    
    pipes.push(new Pipe());
    score = score + 100
}


}

function keyPressed() {
if (key == ' ') {
    bird.up();
   
  }
}
