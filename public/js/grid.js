const rectWidth = 100;
const rectHeight = 100;
const stage = new PIXI.Container();
var stages = [];

function init() {
    var width = document.getElementById("game-canvas").width;
    var height = document.getElementById("game-canvas").height;

    renderer = PIXI.autoDetectRenderer(512, 550, {
        view: document.getElementById("game-canvas")
    });

    setSquaresBlock();
    stage.position.set(-64, 64);

    requestAnimationFrame(update);

}

function setSquaresBlock() {

    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            createPortal(i * rectWidth, j * rectHeight, i + ":" + j);
        }
    }

}

function createPortal(posX, posY, name) {

    stage.addChild(createASquare(posX, posY, name));
    stage.addChild(createTxt(posX, posY, name));

}


function createTxt(posX, posY, str) {
    var txt = new PIXI.Text(
        str, {
            fontFamily: "Arial",
            fontSize: 12,
            fill: "white"
        }
    );

    txt.position.set(posX, posY);
    return txt;

}

function createASquare(posX, posY, name) {
    var rectangle = new PIXI.Graphics();
    rectangle.lineStyle(4, 0xFF3300, 1);
    rectangle.beginFill(0x66CCFF);
    rectangle.drawRect(0, 0, rectWidth, rectHeight);
    rectangle.endFill();
    rectangle.x = posX;
    rectangle.y = posY;

    return rectangle;

}

function update() {

    stage.x += 1;

    if (stage.x > 500) {
        stage.x = 0;
    }

    renderer.render(stage);

    requestAnimationFrame(update);
}
