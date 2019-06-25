var wrapper = document.getElementById('start-page');
wrapper.style.width = CONTAINERWIDTH + 'px';
wrapper.style.height = CONTAINERHEIGHT + 'px';
wrapper.style.position = 'relative';
wrapper.style.background = "url('../images/background-day.png')";
wrapper.style.backgroundRepeat = 'repeat-x';
wrapper.style.overflow = 'hidden';
wrapper.style.left = 120 + 'px';
wrapper.style.backgroundSize = 'contain';
console.log(wrapper);




var night = false;
var score = 0;
var isPaused = false;
var isGameOver = false;

var player = new Bird(STARTINGLEFTPOSITION, STARTINGTOPPOSITION, 100, 100);
var pipeTop = new Obstacles(PIPEPOSITIONX,0,70,200,10);
var pipeBottom = new Obstacles(PIPEPOSITIONX,CONTAINERHEIGHT-200,70,200,10 )
var reset = new Exit();
window.addEventListener('keydown', function(e){
    if (e.keyCode === 38) {
        player.moveUp(2);
        console.log('heps')
    }

    if (e.keyCode === 32) {
        if (isGameOver) {
            window.location.reload();
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
        background.init(imagePos);
    }

    if (isGameOver) {
        reset.init(score,wrapper);
    }
}


