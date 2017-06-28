const rectWidth = 100;
const rectHeight = 100;
const stage = new PIXI.Container();

function init() {
    var width = document.getElementById("game-canvas").width;
    var height = document.getElementById("game-canvas").height;

    renderer = PIXI.autoDetectRenderer(512, 550, {
        view: document.getElementById("game-canvas")
    });

    setSquares();
    stage.position.set(-64, 64);

    requestAnimationFrame(update);

}

function setSquares() {
    createPortal(100, 100, "0:0");
    createPortal(100, 200, "-1:1");
    createPortal(200, 100, "0:1");
    createPortal(200, 200, "0:-1");
    createPortal(300, 200, "0:0");
    createPortal(300, 100, "0:0");
    createPortal(100, 300, "0:0");
    createPortal(200, 300, "0:0");
    createPortal(300, 300, "-3:-3");

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
