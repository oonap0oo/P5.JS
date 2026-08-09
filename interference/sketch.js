// Interference     P5.JS            K Moerman 2026
// A visual effect based on the general idea of two point wave sources 
// with an interference pattern. The point sources travel in circular paths 
// changing their distance from each other continuously.
// This idea was first implemented using QB64:
// https://github.com/oonap0oo/QB64-projects#interference

const w = 500, hw = w / 2; // size of image
const h = 400, hh = h / 2;
const n = 80; // number of blocks in x and y dir.
const dx = w / n, dy = h / n; // code uses size of 1 block, width dx and height dy
const wl = 10, invwl = 1 / wl; // wavelength, code used inverse value invwl
const r1 = 150, r2 = 100; // Radii of circular paths of wave sources
const f1 = 0.06, f2 = 0.01 // rotational freq. of wave sources

let s1x, s1y // global vars, position wave sources
let s2x, s2y;
let t = 0; // global time var, ever increasing

function setup() // function called by p5.js once at start 
{
	createCanvas(w, h);
	frameRate(30);
	// Some displays use several smaller pixels to set the color at a single point. 
	// High density displays often have a pixelDensity() of 2 
	// In this code 1 pixel of the display has to correspond to one pixel in array pixels[]
	pixelDensity(1); // turns off pixel scaling for high pixel density displays
}

function draw() // function called by p5.js each frame
{
	loadPixels(); // Loads the current value of each pixel on the canvas into array pixels[]
	// Update position wave sources
	let sa1 = f1 * t; let sa2 = f2 * t + PI;
	s1x = r1 * cos(sa1); s1y = r1 * sin(sa1);
	s2x = r2 * cos(sa2); s2y = r2 * sin(sa2);
	// Step through image in blocks, width dx and height dy
	for (let gridX = 0; gridX < n; gridX++) 
	{
		let x = -hw + gridX * dx; // Variable used for distance calculations sources - point
		let dx1 = x - s1x; // distance sources - point in x direction
		let dx2 = x - s2x;
		for (let gridY = 0; gridY < n; gridY++) 
		{
			let y = -hh + gridY * dy; // Variable used for distance calculations sources - point	
			// Total distances sources - point
			let d1 = Math.hypot(dx1,  y - s1y); 
			let d2 = Math.hypot(dx2, y - s2y);
			// Interference between wave emited from the 2 sources
			let wave = 128 * (Math.sin(invwl * d1 - t) + Math.sin(invwl * d2 - t));
			// Calculate color components from wave value
			let r = wave > 0 ? wave : 0;
			let b = wave < 0 ? -wave : 0;
			// Fill pixel block corresponding to rectangle at x,y width dy, height dy
			// Calculate edges of block in pixels
			let startX = Math.floor(gridX * dx); 
			let endX = Math.floor((gridX + 1) * dx);			
			let startY = Math.floor(gridY * dy); // Index increments w for each step in y direction
			let endY = Math.floor((gridY + 1) * dy);
			// loop through pixels that are part of block
			for (let py = startY * w; py < endY * w; py += w) // index incr. w for each step in y direction
			{
				for (let px = startX; px < endX; px++)
				{
					// pixels is an array containing the color of each pixel on the canvas
					// a one-dimensional array for performance reasons
					// Each pixel occupies four elements in the pixels array, one for each RGBA value 
					let index = 4 * (py + px);
					pixels[index] = r;   // Red
					pixels[index + 1] = 0;   // Green
					pixels[index + 2] = b;   // Blue
					pixels[index + 3] = 255; // Alpha
				}
			}
		}
	}
	updatePixels(); // Updates the canvas with the RGBA values in the array pixels[]
	t += 0.2; // update time var for next frame
	//console.log(1000/deltaTime);
}