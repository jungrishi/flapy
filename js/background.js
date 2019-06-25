function gameWorld() {


    
    var wrapper = document.getElementById('start-page');
    wrapper.style.position = 'relative';
    wrapper.style.width = CONTAINERWIDTH + 'px';
    wrapper.style.height = CONTAINERHEIGHT + 'px';
    wrapper.style.backgroundRepeat = 'repeat-x';
    wrapper.style.background = "url('../images/background-day.png')";
    wrapper.style.left = 120 + 'px';
    wrapper.style.overflow = 'hidden';
    wrapper.style.backgroundSize = 'contain';

    






var night = false;
var score = 0;
var isPaused = false;
var isGameOver = false;

// var background = new Container();
// console.log(this);
// background.init();
// console.log(this);
var player = new Bird(STARTINGLEFTPOSITION, STARTINGTOPPOSITION);//const: lai need to set parameter??

var pipeTop = new Obstacles(PIPEPOSITIONX,0,PIPEWIDTH,PIPEPOSITIONY[getRandomInt(PIPEPOSITION.first,PIPEPOSITION.third)],10);
var pipeBottom = new Obstacles(PIPEPOSITIONX,CONTAINERHEIGHT-PIPEPOSITIONY[getRandomInt(PIPEPOSITION.first,PIPEPOSITION.third)],PIPEWIDTH,PIPEPOSITIONY[getRandomInt(PIPEPOSITION.first,PIPEPOSITION.third)],10)
var reset = new Exit();

window.addEventListener('keydown', function(e){
    if (e.keyCode === 38) {
        player.moveUp(2);
        console.log('heps')
    }

    if (e.keyCode === 32) {
        if (isGameOver) {
            reset.init(score,wrapper);
        }
        if (isPaused) {
            isPaused = false;
        }

    }
}, false);

function mainloop() {
    if (!isPaused & !isGameOver) {
       player.updatePosition();
       pipeTop.update();
       pipeBottom.update();
    }

    player.init(wrapper);
    pipeTop.init(wrapper);
    pipeBottom.init(wrapper);
    
    if (isPaused) {
        background.init();
        console.log('from pause state');
    }

    if (isGameOver) {
        reset.init(score,wrapper);
    }

    }
    window.requestAnimationFrame(mainloop);
}

gameWorld();
