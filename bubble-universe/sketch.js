// Bubble universe, algoritm found on many places on the web, this version K Moerman 2026
// example used as reference, in Sinclair Basic on a PC by BigEd:
// https://stardot.org.uk/forums/viewtopic.php?t=25833

const w=500,hw=w/2; // size of image
const ovlalpha=8; // alpha factor of black overley applied each frame
const maxxy = 2.0; // max x and t coordinates of calculated points
const nshapes = 80; // number of spirals and other shapes 
const npoints = 60; // number of points in a shape
const dt = 2E-3; // time increase each frame
const R = 2 * Math.PI / nshapes; // amount added to value t for each shape 
const sc = hw/maxxy; // scale factor calculated coord. to actual pixels
const lw=1/sc; // inverse sc used to set plot size back to original after scale() function

let t=0; let x=0; let y=0;

function setup() // this function is called once at start
{
	createCanvas(w, w);	// create a cancas element
	frameRate(15); // reduce frame rate to allow for drawing work
	background('black'); // clear canvas to black
}

function draw() // this function is called again every frame
{	
	translate(hw,hw); // shift origin 0,0 to center
	scale(sc); // set scale factor
	strokeWeight(lw); // make line width 1px again
	background(0,0,0,ovlalpha); // put partly transparent black across image to fade previous frames to black
	for(let shape=0; shape<nshapes; shape++) // loop drawing several shapes
	{
		let shape_t = R * shape + t; // jumps which each shape also various continuously with time
		let colred=(4 * shape + frameCount) % 256 // red color component
		for(let pnt=0; pnt<npoints; pnt++) // loop which draws the points of 1 shape
		{
			let ang_y = shape + y; let ang_x = shape_t + x; // 2 arguments for trig fun, ang_x depends on t also
			x = Math.sin(ang_y) + Math.sin(ang_x); // iterative functions for x and y, influenced by t and shape number
			y = Math.cos(ang_y) + Math.cos(ang_x);
			let colgreen=(4 * pnt) % 256; // green color component
			stroke(colred,colgreen,255-colred); // set color
			point(x,y); // plot point
		}
	}
	t=t+dt; // update t, ever increasing
}
