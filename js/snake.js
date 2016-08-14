function Snake() {
    this.totlength = 0;
    this.body = [];
    this.x = 0;
    this.y = 0;
    this.xSpeed = 1;
    this.ySpeed = 0;   
    
    this.direction = function (x,y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }
    this.update = function () {
        var snakeLen = this.body.length;
        if (this.totlength === snakeLen) {
            for(var i = 0; i < snakeLen-1; i++){
                this.body[i] = this.body[i+1];
            }
        }
        this.body[this.totlength-1] = createVector(this.x,this.y);
        this.x += this.xSpeed * snakeThickness;
        this.y += this.ySpeed * snakeThickness;
        this.x = constrain(this.x, 0, width - snakeThickness);
        this.y = constrain(this.y, 0, height - snakeThickness);
    }
    this.show = function () {
        fill(255);
        var snakeLen = this.body.length;
        for(var i = 0; i < snakeLen; i++){
            rect(this.body[i].x, this.body[i].y, snakeThickness, snakeThickness);
        }        
        rect(this.x,this.y,snakeThickness,snakeThickness);
    }
    this.eat = function (foodPos) {
        var d = dist(this.x,this.y,foodPos.x,foodPos.y);
        if(d < 3) {
            if(this.totlength>0 && (this.totlength%4 == 0)) dynamicFrameRate++;
            this.totlength++;
            return true;
        } else return false;
    }
    this.kill = function () {
        var snakeLen = this.body.length;
        for (var i = 0; i < snakeLen; i++) {
            var d = dist(this.x,this.y,this.body[i].x,this.body[i].y);
            if(d <= 1) {
                this.totlength = 0;
                this.body = [];
                dynamicFrameRate = startFrameRate;
            }
        }
    }
}