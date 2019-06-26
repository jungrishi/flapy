// function gameWorld() {


    
    var wrapper = document.getElementById('start-page');
    wrapper.style.position = 'relative';
    wrapper.style.width = CONTAINERWIDTH + 'px';
    wrapper.style.height = CONTAINERHEIGHT + 'px';
    wrapper.style.backgroundRepeat = 'repeat-x';
    wrapper.style.background = "url('../images/background-day.png')";
    wrapper.style.left = 120 + 'px';
    wrapper.style.overflow = 'hidden';
    wrapper.style.backgroundSize = 'contain';

    
var flaping = -25;
var dy2 = 4;
var dy = 0;
var t = 0;//time
var night = false;
var score = 0;
var isPaused = false;
var isGameOver = false;
var isFlaping = false;

// var background = new Container();
// console.log(this);
// background.init();
// console.log(this);
var player = new Bird(STARTINGLEFTPOSITION, STARTINGTOPPOSITION);//const: lai need to set parameter??

var pipeTop = new Obstacles(PIPEPOSITIONX,0,PIPEWIDTH,PIPEPOSITIONY[getRandomInt(PIPEPOSITION.first,PIPEPOSITION.third)],2);
var pipeBottom = new Obstacles(PIPEPOSITIONX,CONTAINERHEIGHT-PIPEPOSITIONY[getRandomInt(PIPEPOSITION.first,PIPEPOSITION.third)],PIPEWIDTH,PIPEPOSITIONY[getRandomInt(PIPEPOSITION.first,PIPEPOSITION.third)],1)
var reset = new Exit();

var listen = window.addEventListener('keydown', function(e){
    if (e.keyCode == 38) {
        isFlaping = true;
        console.log('heps');
    }

    if (e.keyCode == 32) {
        console.log('spacebar');
        if (isGameOver) {
            reset.init(score,wrapper);
        }
        if (isPaused) {
            isPaused = false;
        }

    }
}, false);

var counter = 0;
function start(){
mainloop();
}
function mainloop() {
    
    if (!isPaused & !isGameOver) {
       player.updatePosition();
       player.checkCollision();
       pipeTop.update();
       pipeBottom.update();
       console.log('from main loop');
    }
    // setTimeout(function(){
    player.init(wrapper);
    
    counter++;
    if (counter >= 150){
        pipeTop.init(wrapper);
    pipeBottom.init(wrapper);
        counter = 0;
}
    // }, 60);
    if (isPaused) {
        background.init();
        console.log('from pause state');
    }

    if (isGameOver) {
        reset.init(score,wrapper);
    }
    window.requestAnimationFrame(mainloop);

    }
    
// }

// gameWorld();
