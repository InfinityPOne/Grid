//  -----> coordinators file

var coords = [];

function fn_buildInitialCoors() {

    for (var i = 0; i < 1; i++) {
        for (var j = 0; j < 10; j++) {
            coords.push({
                x: i,
                y: j,
                xG: i + 3,
                yG: j + 3
            });
        }

    }

    coords.forEach(function (coord, index, array) {
        console.log(coord.x + "<>" + coord.y + "<>" + coord.xG + "<>" + coord.yG)

    });

    return;
}
