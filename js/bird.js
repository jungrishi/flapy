function Bird(x,y) {
    this.left = x;
    this.top = y;
    this.width = BIRDWIDTH;
    this.height = BIRDHEIGHT; //v0
    this.scored = false;
    this.element = null;
    this.flaping = -40;
    this.dy = 0;
    this.rotate = 0;
    that = this;

    window.addEventListener('keydown',function(e) {
            if (e.keyCode == 38) {
                that.isFlaping = true;
                that.moveUp(e);
                console.log('heps');
            }
            if (e.keyCode == 32) {
                console.log('spacebar');
                
                that.isPLaying = !that.isPlaying;
            }
        });
    }
Bird.prototype.init = function(parentEle){
    this.element = document.createElement('img');
    this.element.setAttribute('src', BIRDIMAGE[2]);
    this.element.style.backgroundRepeat =  'no-repeat';
    this.element.style.width = this.width;
    this.element.style.height = this.height;
    this.element.style.position = 'absolute';
    this.element.style.top = this.top + 'px';
    this.element.style.left = this.left + 'px';
    parentEle.appendChild(this.element);   
}

Bird.prototype.moveDown = function() {
    this.top += 1;
    this.rotate += 2;
    this.draw();
}

Bird.prototype.moveUp = function() {
    console.log('that is this')
    this.currentPosition = this.top;
    this.rotate -= 2;
    this.targetPosition = this.currentPosition + this.flaping;
    this.currentPosition -= 20 ;
    if (this.currentPosition <= this.targetPosition) {
        this.top = this.currentPosition + GRAVITY
        this.draw();
    }
    else {
        this.top = this.currentPosition;
        this.draw();
        this.currentPosition -= 17;        
    }
    
}

Bird.prototype.draw = function() {
    this.element.style.transform = "rotate("+this.rotate+"deg)";
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

   