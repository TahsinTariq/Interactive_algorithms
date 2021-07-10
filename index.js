const alg = document.getElementById("alg");

var height = 1920;
var width = 1080;

var canvas = document.getElementById("canvas");
const slider = document.getElementById("range");
canvas.height = height;
canvas.width = width;

var ctx = canvas.getContext('2d');

let rangess = 1;

slider.oninput = () => {
    rangess = slider.value;

}

let animationId = null;

const renderLoop = () => {
    // fps.render();
    // for (let i = 0; i <= rangess; i++) {
    //     // implement range
    // }

    animationId = requestAnimationFrame(renderLoop);
};

const isPaused = () => {
    return animationId === null;
};

const playPauseButton = document.getElementById("play-pause");
const make_destination = document.getElementById("dest");
const make_source = document.getElementById("source");

// make_destination.addEventListener("click", event => {

// });

// make_source.addEventListener("click", event => {

// });

const play = () => {
    playPauseButton.textContent = "⏸ Pause";
    renderLoop();
};

const pause = () => {
    playPauseButton.textContent = "▶ Resume";
    cancelAnimationFrame(animationId);
    animationId = null;
};

playPauseButton.addEventListener("click", event => {
    if (isPaused()) {
        play();
    } else {
        pause();
    }
});



const drawCells = () => {
    const cellsPtr = universe.cells();

    // This is updated!
    const cells = new Uint8Array(memory.buffer, cellsPtr, width * height / 8);
    // console.log(cells);
    ctx.beginPath();

    ctx.fillStyle = DEAD_COLOR;

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.stroke();
};



// alg.addEventListener('change', event => {
//     if (alg.value == "bfs") {

//     }
//     if (alg.value == "dfs") {

//     }
//     if (alg.value == "ucs") {

//     }
//     if (alg.value == "A*") {

//     }
// });


canvas.addEventListener("click", event => {
    const boundingRect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / boundingRect.width;
    const scaleY = canvas.height / boundingRect.height;

    const canvasLeft = (event.clientX - boundingRect.left) * scaleX;
    const canvasTop = (event.clientY - boundingRect.top) * scaleY;

    const x = Math.min(canvasTop / (CELL_SIZE + 1), height);
    const y = Math.min(canvasLeft / (CELL_SIZE + 1), width);

    draw_one_node_at_click(x, y);
});


const fps = new class {
    constructor() {
        this.fps = document.getElementById("fps");
        this.frames = [];
        this.lastFrameTimeStamp = performance.now();
    }

    render() {
        // Convert the delta time since the last frame render into a measure
        // of frames per second.
        const now = performance.now();
        const delta = now - this.lastFrameTimeStamp;
        this.lastFrameTimeStamp = now;
        const fps = 1 / delta * 1000;

        // Save only the latest 100 timings.
        this.frames.push(fps);
        if (this.frames.length > 100) {
            this.frames.shift();
        }

        // Find the max, min, and mean of our 100 latest timings.
        let min = Infinity;
        let max = -Infinity;
        let sum = 0;
        for (let i = 0; i < this.frames.length; i++) {
            sum += this.frames[i];
            min = Math.min(this.frames[i], min);
            max = Math.max(this.frames[i], max);
        }
        let mean = sum / this.frames.length;

        // Render the statistics.
        this.fps.textContent = `Average fps last 100 frames = ${Math.round(mean)}`.trim();
        //         this.fps.textContent = `
        //   Frames per Second:
        //            latest = ${Math.round(fps)}
        //   avg of last 100 = ${Math.round(mean)}
        //   min of last 100 = ${Math.round(min)}
        //   max of last 100 = ${Math.round(max)}
        //   `.trim();
    }
};

drawNodes();
play();