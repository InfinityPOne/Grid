const rectWidth = 100;
const rectHeight = 100;
const stage = new PIXI.Container();

function init() {
    var width = document.getElementById("game-canvas").width;
    var height = document.getElementById("game-canvas").height;

    renderer = PIXI.autoDetectRenderer(512, 384, {
        view: document.getElementById("game-canvas")
    });

    setSquares();

    requestAnimationFrame(update);

}

function setSquares() {
    var txt = new PIXI.Text(
        "0:2", {
            fontFamily: "Arial",
            fontSize: 12,
            fill: "white"
        }
    );

    txt.position.set(54, 96);
    stage.addChild(txt);

    stage.addChild(createASquare(170, 170));
    stage.addChild(createASquare(270, 270));


}

function createASquare(posX, posY) {
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

    renderer.render(stage);

    requestAnimationFrame(update);
}
