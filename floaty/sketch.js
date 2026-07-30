// Floaty           K Moerman 2026

const P=2*Math.PI;
const dt=1/200; // stepsize for time parameter, increased every frame
const da=P/2000; // stepsize for shape parameter a, da=P/Npoints

function setup() // this function is called once at start
{
	createCanvas(500, 500);
	background(0);
	//saveGif('floaty',12) // Optionally save animated GIF
}

function draw() // this function is called again every frame
{	
	let t = frameCount * dt; // derive t from frameCount
	background(0,60) // fade previous frame to black giving some persistence
	translate(250,250); // put origin 0,0 in center image
	scale(20); // scale coord. system avoiding some multiplications
	strokeWeight(.05); // restore line width after scale influence
	let x2;	let y2;
	for (let a=0;a<P;a+=da) // a is an angle, ramps from 0..2*pi
	{
		let r=Math.exp((1+0.5*Math.sin(6*a))*Math.sin(45*a)) // radius body shape
		let amod=a+0.15*r*Math.sin(a-6*t+r)-t; // modulate angle a with t and r
		let w=8+r*Math.cos(amod); // constructing along it's width
		let h=0.1*(r*Math.sin(amod)+r*r-3*t); // constructing along it's length
		let x=w*Math.cos(h); // polar to rect
		let y=w*Math.sin(h);
		let col=50*r; // color depends on r
		stroke(col,col,255-col,100);
		line(x2||x,y2||y,x,y); // line from x2,y2 if these not known yet use x,y
		x2=x; y2=y
	}
}

