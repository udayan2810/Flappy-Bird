function Bird() {
    this.y = height/2
    this.x=64;
    this.birdimage = loadImage("dove.png")
    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0

    this.show = function(){
fill("yellow");
ellipse(this.x,this.y,32,32)

  //      imageScale=0.1
//image(this.birdimage,this.x,this.y,80,80);
    }

    this.up = function () {
        this.velocity += this.lift;
    }
    
    this.update = function(){
        this.velocity += this.gravity
        this.y += this.velocity
        this.velocity*= 0.9;


        if (this.y > height) {
            this.y = height;
            this.velocity = 0 ;
        }
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0 ;
        }
    }

}