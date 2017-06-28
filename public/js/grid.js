const rectWidth = 100;
const rectHeight = 100;

var stages = [];
var stageCount = 0;

var theGrid = new PIXI.Container();

function init() {
    var width = document.getElementById("game-canvas").width;
    var height = document.getElementById("game-canvas").height;

    renderer = PIXI.autoDetectRenderer(1512, 1550, {
        view: document.getElementById("game-canvas")
    });

    setSquaresBlock(0, 0);
    setSquaresBlock(1, 0);

    requestAnimationFrame(update);

}

function setSquaresBlock(squareX, squareY) {

    var stage = new PIXI.Container();
    var offsetX = squareX * 300;
    var offsetY;

    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {

            createPortal(stage, (i * rectWidth) + offsetX, j * rectHeight, (i + squareX) + ":" + j);
        }
    }

    theGrid.addChild(stage);

    stages[stageCount] = stage;
    stageCount++;
}

function createPortal(stage, posX, posY, name) {

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


    stages.forEach(function (stage, index, array) {


        console.log(stage.x)

        stage.x += 1;

        if (stage.x > 500) {
            stage.x = 0;
        }

    });

    renderer.render(theGrid);

    requestAnimationFrame(update);
}
