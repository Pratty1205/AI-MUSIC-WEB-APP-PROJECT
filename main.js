grateful = "";
wma = "";

function setup() {
    canvas = createCanvas(600, 450);
    video = createCapture(VIDEO);
    canvas.center();
    video.hide();
}

function preload() {
    grateful = loadSound("Grateful.mp3");
    wma = loadSound("We'll Meet Again.mp3")
}

function draw() {
    image(video, 0, 0, 600, 450);
}