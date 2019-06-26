function Bird(x,y) {
    this.left = x;
    this.top = y;
    this.width = BIRDWIDTH;
    this.height = BIRDHEIGHT; //v0
    this.scored = false;
    this.element = null;
    this.flaping = -15;
    this.dy = 0;
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

Bird.prototype.moveDown = function() {
    this.top += GRAVITY;
    this.draw();
}

Bird.prototype.moveUp = function() {
    this.top += this.flaping;
    this.draw();
}

Bird.prototype.draw = function() {
    this.element.style.top = this.top + 'px';
}






















    // Bird.prototype.updatePosition = function() {
    //     console.log('top position initial' + this.element.style.top);//in px
    //     this.currentPosition = parseInt(this.element.style.top,10);
    //     console.log('positionCCC ==' + this.currentPosition);
    //     console.log('positionTTT ==' + this.targetPosition);
    //     this.newPosition +=  GRAVITY ;
    //     this.element.style.top  = this.newPosition + 'px';
    //     console.log('after gravity' + this.element.style.top);
    //     // if (this.flag == 1){
    //     // // this.currentPosition -= 1;
    //     // // if (this.currentPosition < this.targetPosition) {
    //     // //     this.newPosition = this.top + GRAVITY;
    //     // //     this.element.style.top = this.newPosition + 'px';
    //     // //     console.log(this.element.style.top);
    //     // // }
    //     // // else {
    //     // //     this.currentPosition -= 1;  
    //     // //     this.element.style.top = this.currentPosition + 'px';
    //     // // }
    //     // }
    //     // this.flag = 0;
    // }

    // Bird.prototype.moveUp = function() {
    //     this.currentPosition = parseInt(this.element.style.top,10); //get the current position
    //     this.targetPosition = this.currentPosition + this.flaping;  
    //     this.currentPosition -= 1;
    //     if (this.currentPosition < this.targetPosition) {
    //         this.newPosition = this.top + GRAVITY;
    //         this.element.style.top = this.newPosition + 'px';
    //         console.log(this.element.style.top);
    //     }
    //     else {
    //         this.currentPosition -= 1;  
    //         this.element.style.top = this.currentPosition + 'px';
    //     }
    //     this.isFlaping = false;
    //     // this.flag = 1 ;  
    // }

    // Bird.prototype.checkCollision =function() {
    //     if (this.left + this.width >= pipeTop.left && pipeTop.left + pipeTop.width >= this.left) {
    //         if (this.top + this.height >= pipeBottom.height || this.top <= pipeTop.top + pipeTop.height) {
    //             isGameOver = true;
    //         }

    //         //not touch top bg condition
    //         else {
    //             if (!this.scored) {
    //                 score++;
    //                 this.scored = true;
    //             }
    //         }
    //     }
    //     if (this.top >= CONTAINERHEIGHT) {
    //         isGameOver = true;
    //     }

    //     if (this.fallSpeed >= 3) {
    //         night = true;
    //     }
    //     else {
    //         night = false;
    //     }
    // }
