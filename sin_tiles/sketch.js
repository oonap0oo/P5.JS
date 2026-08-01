// Sin tiles           K Moerman 2026
const w=500,hw=w/2 // size of image
const d=5*Math.PI; // plot range of canculated x and y
const sc=hw/d; // scale factor x,y to image
const lw=1/sc; // line width to compensate for scale() function

function setup() // this function is called once at start
{
	createCanvas(w, w);
	colorMode(HSB); // set color mode to (hue,saturation,brightness)
	background('black');
}

function draw() // this function is called again every frame
{	
	translate(hw,hw); // shift origin 0,0 to center
	scale(sc); // set scale factor
	strokeWeight(lw); // make line width 1px again
	for(let l=0;l<50;l++){drawsin();} // draw a number of curves each frame
}

function drawsin() // draw 1 curve
{
	stroke(random(360),100,random(10,100)); // random color
	let x=random(-d,d); // random starting point
	let y=random(-d,d);
	let x2; let y2;
	for(let k=0;k<100;k++)
	{
		line(x2||x,y2||y,x,y); // draw line, use x,y of x2,y2 are not known yet
		x2=x; y2=y;
		x=x+sin(y); // iteration, new x,y out of previous values
		y=y+sin(x);
	}			
}

