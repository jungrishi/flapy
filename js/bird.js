function Bird(x,y) {
    this.left = x;
    this.top = y;
    this.width = BIRDWIDTH;
    this.height = BIRDHEIGHT;
    this.fallSpeed = 0; //v0
    this.ySpeed = 0;
    this.scored = false;
    this.element = null;
    
}
    Bird.prototype.init = function(parentEle){
    this.element = document.createElement('img');
    this.element.setAttribute('src', BIRDIMAGE[BIRDPOSITION.second]);
    this.element.style.backgroundRepeat =  'no-repeat';
    this.element.style.width = this.width;
    this.element.style.height = this.height;
    this.element.style.position = 'absolute';
    this.element.style.top = this.top + 'px';
    this.element.style.left = this.left + 'px';
    parentEle.appendChild(this.element);   
}
//check to update
    // Bird.prototype.draw = function() {
    //     this.element.style.top = this.top + 'px';
    // } 

    Bird.prototype.updatePosition = function() {
        currentPosition = this.top;
        if (!isFlaping) {
            flaping = 0;
            dy += GRAVITY + flaping;
            currentPosition += dy;
            this.top = currentPosition;
            
        }
        else {
            flaping = -20;
            dy = GRAVITY + flaping;
            currentPosition += dy;
            this.top = currentPosition;
            isFlaping = false;
        }       
        
    }

    Bird.prototype.moveUp = function(speed) {
        
        this.fallSpeed = 0;
        this.ySpeed = -speed;
        this.fallSpeed += this.ySpeed;
    }

    Bird.prototype.checkCollision =function() {
        if (this.left + this.width >= pipeTop.left && pipeTop.left + pipeTop.width >= this.left) {
            if (this.top + this.height >= pipeBottom.height || this.top <= pipeTop.top + pipeTop.height) {
                isGameOver = true;
            }

            //not touch top bg condition
            else {
                if (!this.scored) {
                    score++;
                    this.scored = true;
                }
            }
        }
        if (this.top >= CONTAINERHEIGHT) {
            isGameOver = true;
        }

        if (this.fallSpeed >= 3) {
            night = true;
        }
        else {
            night = false;
        }
    }
