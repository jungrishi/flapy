function Obstacles(x,y,width,height, speed) {
    this.left = x;
    this.top = y;
    this.width = width;
    this.height = height;
    this.speed =speed;
}

Obstacles.prototype.init = function(parentEle) {
    this.obsElement = document.createElement('img');
    this.obsElement.setAttribute('src', OBSTACLEIMAGE[getRandomInt(0,1)]);
    this.obsElement.style.backgroundRepeat =  'no-repeat';
    this.obsElement.style.position = 'absolute';
    this.obsElement.style.top = this.top + 'px';
    this.obsElement.style.left = this.left  + 'px';
    this.obsElement.style.width = this.width  + 'px';
    this.obsElement.style.height = this.height  + 'px';
    parentEle.appendChild(this.obsElement);   
}

Obstacles.prototype.update = function() {
    this.left -= this.speed;

    if (this.left + this.width <= 0) {
        this.left = CONTAINERWIDTH - PIPEWIDTH;
    }
}