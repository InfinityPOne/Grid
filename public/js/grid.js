const rectWidth = 100;
const rectHeight = 100;

var stages = [];
var stageCount = 0;
var squareBlockWidthCount;

var theGrid = new PIXI.Container();

function init() {
    var width = document.getElementById("game-canvas").width;
    var height = document.getElementById("game-canvas").height;

    renderer = PIXI.autoDetectRenderer(1512, 1550, {
        view: document.getElementById("game-canvas")
    });


    // set the inital sqaure grid
    for (squareBlockWidthCount = 0; squareBlockWidthCount <= 5; squareBlockWidthCount++) {
        setSquaresBlock(squareBlockWidthCount, 0);
    }


    requestAnimationFrame(update);

}

function setSquaresBlock(squareX, squareY) {
    //squareX refers to the precis location of the block that contains the 3x3 sqaures 
    //squareY refers to the precis location of the block that contains the 3x3 sqaures 

    var stage = new PIXI.Container();
    var offsetX = squareX * rectWidth * 3;
    var offsetY;
    var txt;

    stage.x = stage.x + offsetX;

    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {

            // how do I get the right txt here??
            txt =

                createPortal(stage, i * rectWidth, j * rectHeight, txt);
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
            fontSize: 22,
            fill: "white"
        }
    );

    txt.position.set(posX, posY);
    return txt;

}

function createASquare(posX, posY, name) {
    var rectangle = new PIXI.Graphics();
    rectangle.lineStyle(4, 0xFF3300, 1);
    rectangle.beginFill(0x17709d);
    rectangle.drawRect(0, 0, rectWidth, rectHeight);
    rectangle.endFill();
    rectangle.x = posX;
    rectangle.y = posY;

    return rectangle;

}

function update() {


    stages.forEach(function (stage, index, array) {

        stage.x -= 2;

        if (stage.x < 0) {

            theGrid.removeChild(stage);
            stages.splice(index, 1);
            setSquaresBlock(squareBlockWidthCount, 0);
        }

    });

    renderer.render(theGrid);

    requestAnimationFrame(update);
}
