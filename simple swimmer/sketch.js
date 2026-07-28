// Simple swimmer P5.JS    K Moerman 2026
// ported from first version using QB64, see:
// https://github.com/oonap0oo/QB64-projects#simple-swimmer

function setup() // this function is called once at start
{
  createCanvas(600, 500);
  //saveGif('simpleswimmer',20) // Optionally save animated GIF
}

function draw() // this function is called again every frame
{
	background(0); // clear canvas, black background
	// variable frameCount automatically provides number of displayed frames
    let t = frameCount * Math.PI/600; // derive t from frameCount
    let xold = null; // declare vars needed for line statement
    let yold = null;
    for (let a = 0; a < 1; a += 1/2999)
    {
        let at = 2 * a * Math.PI - 8 * t;     
        let b = Math.sin(450 * a) * (.7 + Math.sin(930 * a)); 
        let e = 2 * a * Math.exp(-a * 8); 
        let l = 1.5 * (0.7 - a) * (1 - b * b / 8) + t;
        let w = e * b - Math.sin(at) / 12 + 0.75 ;
        let x = 300 + 200 * w * Math.cos(l);
        let y = 250 + 200 * w * Math.sin(l);
		let col = 128 + 127 * Math.cos(4 * b - a * 6)
        if (a !== 0) {
			stroke(col, 255, 1 - col);
            line(x, y, xold, yold);
        }
        xold = x; // current x,y to be re-used next frame
        yold = y;
    }
}

