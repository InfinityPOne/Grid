const rectWidth = 100;
const rectHeight = 100;

var stages = [];
var squareBlockWidthCount;
var gridCurrentRight = 0;
var gridCurrentLeft = 0;
var gridCurrentTop = 0;
var gridCurrentBottom = 0;


var theGrid = new PIXI.Container();

function init() {
    var width = document.getElementById("game-canvas").width;
    var height = document.getElementById("game-canvas").height;

    renderer = PIXI.autoDetectRenderer(2512, 1550, {
        view: document.getElementById("game-canvas")
    });

    // set the inital square grid (5 x 3)
    // each sqaure block is (3 x 3)
    // 
    // X X X X X 
    // X X X X X
    // X X X X X
    //

    for (var i = 0; i <= 5; i++) {
        setSquaresBlock(i, 0);
        setSquaresBlock(i, 1);
        setSquaresBlock(i, 2);
    }

    //always render this many blocks (-1 is because I have one of the screen you cannot see)
    squareBlockWidthCount = i - 1;
    requestAnimationFrame(update);

}

function setSquaresBlock(squareX, squareY) {
    //squareX refers to the screen location of the block that contains the 3x3 sqaures 
    //squareY refers to the screen location of the block that contains the 3x3 sqaures 

    var stage = new PIXI.Container();
    var offsetX = squareX * rectWidth * 3;
    var offsetY = squareY * rectHeight * 3;;
    var txt;

    stage.x = stage.x + offsetX;
    stage.y = stage.y + offsetY;

    // create 3 x 3 portals
    for (i = 0; i < 3; i++) {
        // really this is x loc
        // need to take direction here. but for now always right

        gridCurrentRight++;

        for (j = 0; j < 3; j++) {
            //top is not right
            gridCurrentTop = j;

            txt = "X:" + gridCurrentRight + " Y:" + gridCurrentTop;
            // create a single portal
            createPortal(stage, i * rectWidth, j * rectHeight, txt);
        }
    }

    //add it to the engine
    theGrid.addChild(stage);

    // add the stage to the array 'stages'
    stages.push({
        stage: stage,
        x: squareX,
        y: squareY
    });

}

function createPortal(stage, posX, posY, name) {
    //add a physical square 
    stage.addChild(createASquare(posX, posY, name));
    //add some text
    stage.addChild(createTxt(posX, posY, name));

}


function createTxt(posX, posY, str) {
    //create text routine

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

function createImg(posX, posY, str) {

}


function createASquare(posX, posY, name) {
    // create a rectangle
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
    // the 'game engine'
    // 

    // change to -1 to go right to left
    // change to 1 to go left to right
    // increase the number to go faster!
    var increment = -1;
    var count = 0;

    stages.forEach(function (stage, index, array) {

        //I get some slippage here with the stage
        // need to take the '1' (increment) into play

        stage.stage.x += increment;
    });

    stages.forEach(function (stage, index, array) {
        //is the stage left of the screen by 300 - then remove it
        if (stage.stage.x <= -300) {
            //remove it from the screen
            theGrid.removeChild(stage.stage);
            // remove it from the array
            stages.splice(index, 1);
            // create a new stage at where we draw the inital set
            setSquaresBlock(squareBlockWidthCount, count);
            count++;

        }

        if (stage.stage.x >= 1500) {
            //remove it from the screen 
            theGrid.removeChild(stage.stage);
            // remove it from the array
            stages.splice(index, 1);
            // create a new stage left of visable
            setSquaresBlock(-1, 0);
        }

    });

    // calls the debug function 
    debug();

    // calls the debug function 
    renderer.render(theGrid);

    // around we go again - call the game engine recusivly.
    requestAnimationFrame(update);
}


// -----> DEBUG <----------------------------------------------------------
// -----> DEBUG <----------------------------------------------------------
// -----> DEBUG <----------------------------------------------------------

var isDebug = false; //CTRL+SHIT+I
var isPause = false; //flick this to pause one game loop. painful but works
var lineCount = 0;

function debug() {

    if (!isDebug) {
        return;
    }
    console.log('-------------------');
    console.log('debgu start');

    // go through each element in the array and display in console.
    stages.forEach(function (stage, index, array) {
        console.log(stage.stage + "|x=" + stage.x + "|y=" + stage.y + "|" + stage.stage.x + "|" + index);
    });

    if (isPause) {
        alert('debgu end');
    }

    console.log('debgu end');
}
// -----> DEBUG
