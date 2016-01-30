// 1. Turn on Bluetooth
// 2. Run node ./node_modules/noble/examples/advertisement-discovery.js
// 3. Change UUID (BLE address)

var uuid = "40c52a3de90b4a6fa3a8d9db15d5042d";

var sphero = require("sphero"),
    keypress = require("keypress");
    bb8 = sphero(uuid);

bb8.connect(listen);

function handle(ch, key) {
    var stop = bb8.roll.bind(bb8, 0, 0),
        roll = bb8.roll.bind(bb8, 60);

    console.log("[Input] " + key.name);

    if (key.ctrl && key.name === "c") {
        process.stdin.pause();
        process.exit();
    }

    if (key.name === "e") {
        bb8.startCalibration();
    }

    if (key.name === "q") {
        bb8.finishCalibration();
    }

    if (key.name === "up") {
        roll(0);
    }

    if (key.name === "down") {
        roll(180);
    }

    if (key.name === "left") {
        roll(270);
    }

    if (key.name === "right") {
        roll(90);
    }

    if (key.name === "space") {
        stop();
    }
}

function listen() {
    keypress(process.stdin);
    process.stdin.on("keypress", handle);

    console.log("Start keyboard listener");

    process.stdin.setRawMode(true);
    process.stdin.resume();
}

