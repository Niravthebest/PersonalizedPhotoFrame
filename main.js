function preload() {}

function setup() {
    canvas = createCanvas(640 , 480);
    canvas.position(315, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}


function draw() {
    image(video, 0, 0, 640, 480); 
    let c = color('hsb(160, 100%, 50%)');
    fill(c);
    noStroke();
    rect(38, -33 , 1000, 55);
    rect(620, 34, 55, 1000);
    rect(38, 460 , 1000, 55);
    rect(-33, 34, 55, 1000);
    c = color(50, 55, 100);
    fill(c);
    circle(0, 0, 90);
    circle(645, 5, 90);
    circle(645,485, 90);
    circle(0,485, 90);
}

function take_snapshot() {
    save('PPF.png');
}
