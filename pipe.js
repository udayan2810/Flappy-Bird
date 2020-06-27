

class Pipe {
    constructor() {
        
        this.top = random(height / 2);
        this.bottom = random(height / 2);
        this.x = width;
        this.w = 50;
        this.speed = 10;
//this.pipeimage = loadImage("pillar.png")
        this.highlight = false;

        this.hits = function () {
            if (bird.y < this.top || bird.y > height - this.bottom) {
                if (bird.x > this.x && bird.x < this.x + this.w) {
                    this.highlight = true;
                    return true;
                }
            }

            return false;
        };
        this.show = function () {
            fill("Blue");
            if (this.highlight) {
                fill(255, 0, 0);
            
            }
           
            //image(this.pipeimage,this.x,0,this.w,this.top,40,90);
            //image(this.pipeimage,this.x,height - this.bottom, this.w, this.bottom,40,90)
            rect(this.x, 0, this.w, this.top);
                rect(this.x, height - this.bottom, this.w, this.bottom);
        };

        this.update = function () {
            this.x -= this.speed;
        };

        this.offscreen = function () {
            if (this.x < -this.w) {
                return true;
            }
            else {
                return false;
            }
        };


    }
}
