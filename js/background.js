    var wrapper = document.getElementById('start-page');
    wrapper.style.position = 'relative';
    wrapper.style.width = CONTAINERWIDTH + 'px';
    wrapper.style.height = CONTAINERHEIGHT + 'px';
    wrapper.style.backgroundRepeat = 'repeat-x';
    wrapper.style.background = "url('../images/background-day.png')";
    wrapper.style.left = 120 + 'px';
    wrapper.style.overflow = 'hidden';
    wrapper.style.backgroundSize = 'contain';
var scores = [];
var counter1 = 0;
var counter2 = 0;
var night = false;
var score = 0;
var isPlaying = false;
var isGameOver = false;
var isFlaping = false;
var player = new Bird(STARTINGLEFTPOSITION, STARTINGTOPPOSITION);//const: lai need to set parameter??
player.init(wrapper);
var pipeTop1 = new Obstacles(PIPEPOSITIONX,0,PIPEWIDTH,PIPEHEIGHT[getRandomInt(PIPEPOSITION.first,PIPEPOSITION.third)],2);
var pipeTop2 = new Obstacles(PIPEPOSITIONX + 200,0,PIPEWIDTH,PIPEHEIGHT[getRandomInt(PIPEPOSITION.first,PIPEPOSITION.third)],2);
var pipeBottom1 = new Obstacles(PIPEPOSITIONX,CONTAINERHEIGHT-PIPEHEIGHT[getRandomInt(PIPEPOSITION.first,PIPEPOSITION.third)],PIPEWIDTH,PIPEPOSITIONY[getRandomInt(PIPEPOSITION.first,PIPEPOSITION.third)],2)
var pipeBottom2 = new Obstacles(PIPEPOSITIONX + 200,CONTAINERHEIGHT-PIPEHEIGHT[getRandomInt(PIPEPOSITION.first,PIPEPOSITION.third)],PIPEWIDTH,PIPEPOSITIONY[getRandomInt(PIPEPOSITION.first,PIPEPOSITION.third)],2)
pipeBottom1.init(wrapper);
pipeBottom2.init(wrapper);
pipeTop1.init(wrapper);
pipeTop2.init(wrapper);

function checkCollision () {
        if (player.left + player.width  >= (pipeTop1.left && pipeTop2.left) && ((pipeTop1.left + pipeTop1.width) || (pipeTop2.left + pipeTop2.width) >= player.left)) {
            if (player.top + player.height >= (pipeBottom1.height || pipeBottom2.height) || (player.top || player.top) <= (pipeTop1.top + pipeTop1.height ||pipeTop2.top + pipeTop2.height)) {
                isGameOver = true;
                isPlaying =false;
            }

            if (player.left <= (pipeTop1.left)){
                score++;
                scores.push(score);
            }
           
        }
        if (player.top >= CONTAINERHEIGHT) {
            isGameOver = true;
            isPlaying = false;
        }
        else {
            night = false;
        }
    }

var listen = window.addEventListener('keydown', function(e){
    if (e.keyCode == 38) {
        isFlaping = true;
        player.moveUp();
        console.log('heps');
    }
    if (e.keyCode == 32) {
        console.log('spacebar');
        isPLaying = !isPlaying;
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
       pipeTop1.update();
       pipeTop2.update();
       pipeBottom1.update();
       pipeBottom2.update();
       checkCollision();
    }    

    window.requestAnimationFrame(mainloop);

    }
