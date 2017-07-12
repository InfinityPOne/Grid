//  -----> coordinators file <-----
//  ----------------------------------------------------------------- 
// keep this simple for the time being until I get my head around the maths. 
// once done i'll move it to a class
//
//  ----------------------------------------------------------------- 

var coords = [];
var farLeft = 10000;
var farRight = 0;


function fn_buildInitialCoors() {

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 10; j++) {
            coords.push({
                x: i,
                y: j,
                xG: i + 3,
                yG: j + 3
            });
        }

    }

    // fn_MoveLeft();
    /*
        coords.forEach(function (coord, index, array) {
            console.log("Debug " + coord.x + "<>" + coord.y + "<>" + coord.xG + "<>" + coord.yG);
        });
    */
    return;
}



function fn_setOutSide() {

    farLeft = 10000;
    farRight = 0;

    coords.forEach(function (coord, index, array) {

        if (coord.x < farLeft) {
            farLeft = coord.x;
        }

        if (coord.x > farRight) {
            farRight = coord.x;
        }

    });

}

function fn_MoveLeft() {

    fn_setOutSide();

    // delete right Column
    for (i = coords.length - 1; i >= 0; i -= 1) {

        if (coords[i].x == farRight) {
            coords.splice(i, 1);
        }
    }
}



function fn_MoveRight() {

    fn_setOutSide();

    // delete left Column
    for (i = coords.length - 1; i >= 0; i -= 1) {

        if (coords[i].x == farLeft) {
            coords.splice(i, 1);
        }
    }
}
