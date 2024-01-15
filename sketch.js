// setup() is called once at page-load

let lastPrintedMinute = -1; // Initialize to an impossible value

function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    const hr = hour();
    const min = minute();
    const sec = second();

    background(225);
    textSize(32);
    fill(180);
    text(hr, 10, 30);
    fill(100);
    text(min, 10, 60);
    fill(0);
    text(sec, 10, 90);

    // Check if the minute has changed
    if (min !== lastPrintedMinute) {
        console.log(min);
        lastPrintedMinute = min;
    }

    // New clock
    translate(400, 300);
    rotate(-HALF_PI); // Rotate the canvas by -90 degrees

    strokeWeight(8);
    noFill();

    // Arcs for hours, minutes, and seconds
    stroke(134, 146, 32);
    let end1 = map(sec, 0, 60, 0, TWO_PI);
    arc(0, 0, 300, 300, 0, end1);

    stroke(247, 246, 206);
    let end2 = map(min, 0, 60, 0, TWO_PI);
    arc(0, 0, 280, 280, 0, end2);

    stroke(72, 79, 28);
    let end3 = map(hr % 12, 0, 12, 0, TWO_PI);
    arc(0, 0, 260, 260, 0, end3);
}
