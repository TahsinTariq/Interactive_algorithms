// let sketch = function (p) {
//     p.setup() = function () {
//         cnv = p.createCanvas(1920, 1080);
//         cnv.parent("canvas");
//         p.background('#ff0000');
//         colors = [
//             p.color(142, 192, 124),
//             p.color(250, 189, 47),
//             p.color(251, 71, 44),
//             p.color(211, 134, 147),
//             p.color(49, 69, 80)
//         ];
//     };

//     p.draw() = function () {
//         p.fill(p.random(255))
//         p.rect(0, 0, 100, 100);
//     }
// }

// new p5(sketch);


// function setup() {
//     var canvas = createCanvas(100, 100);

//     // Move the canvas so it's inside our <div id="sketch-holder">.
//     canvas.parent('canvas-for-p5');

//     background(255, 0, 200);
// }


// function draw() {
//     background(random(0, 255))
// }




function setup() {
    let c = document.getElementById("canvas-div")
    cnv = createCanvas(
        c.offsetWidth,
        800
    )
    // cnv = createCanvas(1620, 800);
    cnv.parent("canvas-div");
    textFont(100)
}



function draw() {
    background(255);
    // fill(0, 255, 0)
    fill(255, 0, 0)

    // rect(0, 0, 100, 100);
    // rect(width - 100, height - 100, width, height);
    rect(0, 0, width, height)
    fill(255)
    rect(20, 20, width - 40, height - 40)

    push();
    translate(width / 2, height / 2, 0);
    ellipse(0, 0, 140, 140)
    rotate(frameCount / 30);
    fill(255, 0, 0)
    ellipse(50, 50, 20, 20);

    text(`This Red Circle Represents
All of Rafi's Aim In Life`, 60, 60, 200, 200)
    pop();
}