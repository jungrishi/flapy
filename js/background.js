function GameWorld() {
    this.scores = [];
    this.score = 0;
    this.isPlaying = true;
    this.isGameOver = false;
    this.isPaused = false;
    this.isFlaping = false;
    this.night = false;
    this.zero = 0;    
    this.remove = null;
    this.addImage = null;
    this.mainloop;
  
    this.worldinit = function(){
        this.wrapper = document.getElementById('start-page');
        this.wrapper.setAttribute('class','start-page1');
        this.wrapper.style.position = 'relative';
        this.wrapper.style.height = CONTAINERHEIGHT + 'px';
        this.wrapper.style.backgroundRepeat = 'repeat-x';
        this.wrapper.style.background = "url('../images/background-day.png')";
        this.wrapper.style.left = 120 + 'px';
        this.wrapper.style.overflow = 'hidden';
        this.wrapper.style.backgroundSize = 'contain';
        this.wrapper.style.width = CONTAINERWIDTH + 'px';
        console.log(this.wrapper);      
        this.objectInit();
    }
    
    this.checkCollision =  function() {
        if (this.player.left < this.pipeTop1.left + this.pipeTop1.width &&
            this.player.left + this.player.width > this.pipeTop1.left &&
            this.player.PIPEHEIGHT1 < this.pipeTop1.PIPEHEIGHT1 + this.pipeTop1.PIPEHEIGHT1 &&
            this.player.top + this.player.BIRDHEIGHT > this.pipeTop1.PIPEHEIGHT1) {
             console.log('ccjjncdncdjcnjdncjdn');
         }
        if (this.player.left + BIRDWIDTH >= this.pipeTop1.left) {
            console.log(this.pipeTop2.left);
            if ((this.player.top <= this.pipeTop1.top + PIPEHEIGHT1) || (this.player.top + BIRDHEIGHT >= this.pipeBottom1)){
            this.isGameOver = true;
            this.isPlaying = false;
            
            console.log('HELLO');
            }
        }
        else if (this.player.left + BIRDWIDTH >= this.pipeTop2.left) {
         
            if ((this.player.top <= this.pipeTop2.top + PIPEHEIGHT2) || (this.player.top + BIRDHEIGHT >= this.pipeBottom2)){
                this.isGameOver = true;
                this.isPlaying = false;
            
            console.log('HELLO');
            }
        }
        else if (this.player.top >= CONTAINERHEIGHT) {
            this.isGameOver = true;
            this.isPlaying = false;
        }
        else {
            
        }
    }

    this.objectInit = function() {
        this.player = new Bird(STARTINGLEFTPOSITION, STARTINGTOPPOSITION);//const: lai need to set parameter??
        this.pipeTop1 = new Obstacles(PIPEPOSITIONX,0,PIPEWIDTH,PIPEHEIGHT1,SPEED);
        this.player.init(this.wrapper);
        this.pipeBottom1 = new Obstacles(PIPEPOSITIONX,CONTAINERHEIGHT-PIPEHEIGHT1 - GAP + 0,PIPEWIDTH,PIPEHEIGHT1+GAP,SPEED)
        this.pipeTop2 = new Obstacles(PIPEPOSITIONX + 200,0,PIPEWIDTH,PIPEHEIGHT2,SPEED);
        this.pipeBottom1.init(this.wrapper);
        this.pipeBottom2 = new Obstacles(PIPEPOSITIONX + 200,CONTAINERHEIGHT-PIPEHEIGHT2 + 100,PIPEWIDTH,PIPEHEIGHT2+GAP,SPEED)
        this.pipeTop1.init(this.wrapper);
        this.pipeBottom2.init(this.wrapper);
        this.pipeTop2.init(this.wrapper);

        console.log('player obj' + this.player)
    }
    this.mainloop = function() {
    if (this.isPlaying) {
       this.player.moveDown();
       this.pipeTop1.update();
       this.pipeTop2.update();
       this.pipeBottom1.update();
       this.pipeBottom2.update();
       this.checkCollision();
    }
    if (!this.isPlaying){
        if (this.isGameOver){
            // document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
            this.remove = document.querySelector('start-game');
            this.remove.style.display = 'none';
            this.addImage = document.createElement('img');
            this.addImage.setAttribute('src', GAMESTATE[2]);
        }

        if (isPaused) {
            // document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
            this.remove = document.querySelector('start-game');
            this.remove.style.display = 'none';
            this.addImage = document.createElement('img');
            this.addImage.setAttribute('src', GAMESTATE[2]);
        }
    }
    
    window.requestAnimationFrame(this.mainloop.bind(this));
}
}


    function start() {
        var game =  new GameWorld()
        game.worldinit();
        game.mainloop();
        


    
    }
