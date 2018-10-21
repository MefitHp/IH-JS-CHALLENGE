// Rover Object Goes Here
// ======================
var rover = {
    direction: 'N',
    position: [0, 0],
    travelLog: []
}

var board = [
    [null, null, null, "S", null, null, "S", null, "S", null],
    [null, "S", null, "S", null, "S", null, null, null, null],
    ["S", null, null, null, null, null, "S", null, null, null],
    [null, "S", null, null, null, null, null, null, null, "S"],
    [null, null, null, null, "S", null, null, null, "S", null],
    [null, "S", null, null, null, null, null, null, null, "S"],
    [null, null, null, null, "S", null, null, null, "S", null],
    [null, null, null, "S", null, null, "S", null, "S", null],
    [null, "S", null, "S", null, "S", null, null, null, null],
    ["S", null, null, null, null, null, "S", null, null, null]
];

// ======================
function turnLeft() {
    console.log("turnLeft was called!");

    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            break;
        case "S":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "N";
            break;
        case "W":
            rover.direction = "S";
    }
    console.log("New direction: " + rover.direction);
}

function turnRight() {
    console.log("turnRight was called!");

    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            break;
        case "S":
            rover.direction = "W";
            break;
        case "E":
            rover.direction = "S";
            break;
        case "W":
            rover.direction = "N";
            break;
    }
    console.log("New direction: " + rover.direction);
}


function moveForward() {
    console.log("moveForward was called")
    switch (rover.direction) {
        case "N":
            rover.position[0] = rover.position[0] - 1;
            break;
        case "S":
            rover.position[0] = rover.position[0] + 1;
            break;
        case "E":
            rover.position[1] = rover.position[1] + 1;
            break;
        case "W":
            rover.position[1] = rover.position[1] - 1;
            break;
    }
    travelHistory();
}

function travelHistory() {
    rover.travelLog.push("Movement detected, new coordinates: " + rover.position);
}

function directions(directions) {
    for (i = 0; i < directions.length; i++) {
        switch (directions[i]) {
            case "r":
                turnRight();
                break;
            case "l":
                turnLeft();
                break;
            case "f":
                moveForward();
                break;
        }
    }
    console.log("Final position: " + rover.position);
}