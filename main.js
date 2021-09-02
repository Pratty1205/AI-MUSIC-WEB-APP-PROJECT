grateful = "";
wma = "";
LeftX = 0;
LeftY = 0;
RightX = 0;
RightY = 0;

function setup() {
    canvas = createCanvas(600, 450);
    video = createCapture(VIDEO);
    canvas.center();
    video.hide();
    posenet = ml5.poseNet(video, model_loaded);
    posenet.on("pose", getResult);
}

function model_loaded() {
    console.log("Model is not loaded");
}

function preload() {
    grateful = loadSound("Grateful.mp3");
    wma = loadSound("We'll Meet Again.mp3")
}

function draw() {
    image(video, 0, 0, 600, 450);
}

function getResult(result) {
    if (result.length > 0) {
        console.log(result);
        LeftX = result[0].pose.leftWrist.x;
        LeftY = result[0].pose.leftWrist.y;
        RightX = result[0].pose.rightWrist.x;
        RightY = result[0].pose.rightWrist.y;
    }
}