    var wrapper = document.getElementById('start-page');
    wrapper.style.position = 'relative';
    wrapper.style.width = CONTAINERWIDTH + 'px';
    wrapper.style.height = CONTAINERHEIGHT + 'px';
    wrapper.style.backgroundRepeat = 'repeat-x';
    wrapper.style.background = "url('../images/background-day.png')";
    wrapper.style.left = 120 + 'px';
    wrapper.style.overflow = 'hidden';
    wrapper.style.backgroundSize = 'contain';

var counter1 = 0;
var counter2 = 0;
var night = false;
var score = 0;
var isPlaying = false;
var isGameOver = false;
var isFlaping = false;
var player = new Bird(STARTINGLEFTPOSITION, STARTINGTOPPOSITION);//const: lai need to set parameter??
player.init(wrapper);
var pipeTop = new Obstacles(PIPEPOSITIONX,0,PIPEWIDTH,PIPEHEIGHT[getRandomInt(PIPEPOSITION.first,PIPEPOSITION.third)],1);
pipeTop.init(wrapper);
var pipeBottom = new Obstacles(PIPEPOSITIONX,CONTAINERHEIGHT-PIPEHEIGHT[getRandomInt(PIPEPOSITION.first,PIPEPOSITION.third)],PIPEWIDTH,PIPEPOSITIONY[getRandomInt(PIPEPOSITION.first,PIPEPOSITION.third)],1)
pipeBottom.init(wrapper);
var reset = new Exit();

var listen = window.addEventListener('keydown', function(e){
    if (e.keyCode == 38) {
        isFlaping = true;
        player.moveUp();
        console.log('heps');
    }
    if (e.keyCode == 32) {
        console.log('spacebar');
        if (isGameOver) {
            reset.init(score,wrapper);
        }
        if (!isPlaying) {
            isPlaying = true;
        }
        else {
            isplaying = false;
        }

        // isPLaying = !isPlaying
    }
});

function start() {
    isPlaying = true;
    mainloop();

}
function mainloop() {
    console.log('mailloop')
    if (isPlaying) {
       player.moveDown();
       player.checkCollision();
       pipeTop.update();
       pipeBottom.update();
    }    
    if (!isPlaying) {
        background.init();
        console.log('from pause state');
    }

    if (isGameOver) {
        reset.init(score,wrapper);
    }
    window.requestAnimationFrame(mainloop);

    }
