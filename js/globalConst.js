const CONTAINERWIDTH = 500;
const CONTAINERHEIGHT = 600;
const CENTERTOP = 300;
const STARTINGLEFTPOSITION = 100;
const STARTINGTOPPOSITION = 200;
const PIPEWIDTH = 70;
const PIPEHEIGHT = [10, 15, 30];
const PIPEPOSITIONX =(CONTAINERWIDTH-PIPEWIDTH);
const PIPEPOSITIONY = (CONTAINERHEIGHT - PIPEHEIGHT);
const BIRDWIDTH = 50;
const BIRDHEIGHT =50;
const GRAVITY = 0.001;

const BIRDIMAGE = ['../images/bluebird-downflap.png','../images/bluebird-midflap.png','../images/bluebird-upflap.png'];


const OBSTACLEIMAGE = ['../images/pipe-green.png','../images/pipe-red.png'];
const GAMESTATE = ['../images/message.png','../images/gameover.png']

const PIPEPOSITION = {
    first: 0,
    second: 1,
    third: 2
}

// const OBSTACLEPOSITION = {
//     [POSITION.first] : 0,
//     [POSITION.second]: CONTAINERHEIGHT
// }

const BIRDPOSITION = {
    first: 1,
    second: 2,
    third: 3
}
