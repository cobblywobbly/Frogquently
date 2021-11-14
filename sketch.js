//mouse states and mouse events on sprites
//click and hold the mouse button while overing on the sprites

var frog1, frog2;
var sleep1, sleep2, thursday1, thursday2;
let count = 0;
let fontRegular;

var soundThursday, soundHayfork, soundCamp, soundFun;


function preload() {
    soundFormats('mp3', 'ogg');
    soundThursday = loadSound('assets/thursday.mp3');
    soundHayfork = loadSound('assets/hayfork.mp3');
    soundCamp = loadSound('assets/camp.mp3');
    soundFun = loadSound('assets/fun.mp3');
    fontRegular = loadFont('assets/AdobeClean-Bold.otf')

}

function setup() {
    resetSketch();
}

function resetSketch() {
    createCanvas(300, 400);
    frameRate(15);

    frog1 = createSprite(100, 200);
    frog1.addAnimation('sleep1', 'assets/frog_5.png');

    frog1.addAnimation('thursday1', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_7.png', 'assets/frog_7.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png');

    frog1.addAnimation('hayfork1', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_9.png', 'assets/frog_8.png', 'assets/frog_9.png', 'assets/frog_8.png', 'assets/frog_9.png', 'assets/frog_8.png', 'assets/frog_9.png', 'assets/frog_8.png', 'assets/frog_9.png', 'assets/frog_8.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png');

    frog1.addAnimation('camp1', 'assets/frog_5.png', 'assets/frog_5.png', 'assets/frog_5.png', 'assets/frog_5.png', 'assets/frog_5.png', 'assets/frog_6.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_7.png', 'assets/frog_7.png', 'assets/frog_7.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png');

    frog1.addAnimation('fun1', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png');


    frog2 = createSprite(200, 200);
    frog2.addAnimation('sleep2', 'assets/frog_5.png');

    frog2.addAnimation('thursday2', 'assets/frog_5.png', 'assets/frog_5.png', 'assets/frog_5.png', 'assets/frog_5.png', 'assets/frog_5.png', 'assets/frog_6.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_7.png', 'assets/frog_7.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png');

    frog2.addAnimation('hayfork2', 'assets/frog_5.png', 'assets/frog_5.png', 'assets/frog_5.png', 'assets/frog_5.png', 'assets/frog_6.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_1.png', 'assets/frog_9.png', 'assets/frog_8.png', 'assets/frog_9.png', 'assets/frog_8.png', 'assets/frog_9.png', 'assets/frog_8.png', 'assets/frog_9.png', 'assets/frog_8.png', 'assets/frog_9.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png');


    frog2.addAnimation('camp2', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_7.png', 'assets/frog_7.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png');

    frog2.addAnimation('fun2', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_1.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_10.png', 'assets/frog_7.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png', 'assets/frog_6.png');
}

function draw() {
    background(255, 255, 255);

    textSize(12);
    textAlign(CENTER);
    fill(116, 126, 128);
    textFont(fontRegular);
    text('CLICK FROGS TO ASK A QUESTION', 150, 320);
    textSize(20);
    text('FROGQUENTLY', 150, 65);
    text('ASKED QUESTIONS', 150, 90);
    

    drawSprites();

}

function mouseClicked() {
    count++;
    if (count == 1) {
        soundThursday.play();
        frog1.changeAnimation('thursday1');
        frog2.changeAnimation('thursday2');
    }
    else if (count == 2) {
        soundThursday.stop();
        frog1.changeAnimation('sleep1');
        frog2.changeAnimation('sleep2');

    } else if (count == 3) {
        soundHayfork.play();
        frog1.changeAnimation('hayfork1');
        frog2.changeAnimation('hayfork2');
    }
    else if (count == 4) {
        soundHayfork.stop();
        frog1.changeAnimation('sleep1');
        frog2.changeAnimation('sleep2');
    }
    else if (count == 5) {
        soundCamp.play();
        frog1.changeAnimation('camp1');
        frog2.changeAnimation('camp2');
    }
    else if (count == 6) {
        soundCamp.stop();
        frog1.changeAnimation('sleep1');
        frog2.changeAnimation('sleep2');
    }
    else if (count == 7) {
        soundFun.play();
        frog1.changeAnimation('fun1');
        frog2.changeAnimation('fun2');
    }
    else if (count == 8) {
        soundFun.stop();
        frog1.remove();
        frog2.remove();
        count = 0;
        resetSketch();
        frog1.changeAnimation('sleep1');
        frog2.changeAnimation('sleep2');
    }

}