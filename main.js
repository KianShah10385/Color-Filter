function preload() {
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(135,275);
    video = createCapture(VIDEO);
    video.hide();
tint_color = "";
}

function draw() {
    Image(video, 0, 0, 700, 500);
    tint(tint_color);
}
function take_snapshot(){
    save('Filter.png');
}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}