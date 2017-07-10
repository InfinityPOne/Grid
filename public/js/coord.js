//  -----> coordinators file <-----
//  ----------------------------------------------------------------- 
// keep this simple for the time being until I get my head around the maths. 
// once done i'll move it to a class
//
//  ----------------------------------------------------------------- 

var coords = [];

function fn_buildInitialCoors() {

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            coords.push({
                x: i,
                y: j,
                xG: i + 3,
                yG: j + 3
            });
        }

    }

    /*
    coords.forEach(function (coord, index, array) {
        console.log(coord.x + "<>" + coord.y + "<>" + coord.xG + "<>" + coord.yG);

    }); */

    fn_MoveRight();

    return;
}


function fn_MoveRight() {

    var farLeft = 10000;
    var farRight = 0;

    coords.forEach(function (coord, index, array) {

        if (coord.x < farLeft) {
            farLeft = coord.x;
        }

        if (coord.x > farRight) {
            farRight = coord.x;
        }

    });

    // delete left Column
    coords.forEach(function (coord, index, array) {

        console.log("xxxx" + coord.x);
        console.log(coord.x == farLeft);

        ////HHHHHHHHHHHHHERERRERERERERER

        if (coord.x == farLeft) {
            console.log(index + "|||" + coord.x);
            coords.splice(index, 1);
        }

    });

    coords.forEach(function (coord, index, array) {
        /*
                console.log(coord.x == farLeft);
          */
        console.log("moveright" + coord.x + "<>" + coord.y + "<>" + coord.xG + "<>" + coord.yG);

    });

}
