// Bouncing points           K Moerman 2026
// a group of 2D points is launched under influence of gravity inside a circle
// the points bounce of the circle's inner surface
// a friction proportional to velocity can be applied
// exploring vectors and user interface elements in ps.js


const h=500,hh=h/2; // size of image
const w=550, hw=w/2;
const rcircle=hh-30; // radius of circle
const xcircle=hw+30, ycircle=hh+20; // center of circle
const N=150; // number of points in animation
const ndraw=8; // number of times points are updated each frame
const frinit=0; // friction coeff. proportional to velocity
const accelinit=1E-3; // some gravity value, avoids having extra constants in calculations
const alphacircle=8; // alpha factor of black fill color inside circle, fades previous frames to black
const vinit=5E-2; // point get init. with vert. vel. from -vinit to +vinit
const xinit=0, yinit=0.9*rcircle; // init. position of all points at start of program

let p=[],v=[],col=[],a,xp,yp,fr; // global vars, arrays for data per point and common accel. a
let sliderGravity,sliderFriction; // UI slider controls

function setup() // this function is called once at start
{
	xp=xinit; // points start from default position
	yp=yinit;
	createCanvas(w, h); // create canvas for drawing
	background('black');
	a=createVector(0,-accelinit); // a vector for gravity
	fr=frinit; // friction coeff. proportional to velocity
	drawcontrols(); // draw slider controls and text
	initallpoints(); // give all points init data
	fill(0,alphacircle); // fill circle with almost transparent black
}

function draw() // this function is called again every frame
{	
	push();
	applyMatrix(1, 0, 0, -1, xcircle, ycircle); // translate origin to center and flip y axis	
	strokeWeight(2); // draw everything 2 pixels wide
	stroke('white'); // reset stroke color for drawing circle
	circle(0,0,2*rcircle); // redraw circle with it's fill
	for(let d=0; d<ndraw; d++) // update points a number of times each frame
	{
		for(let k=0; k<N; k++) // go through all points and update them
		{
			drawpoint(k);
		}
	}
	pop();
	push(); // draw text showing friction and gravity values
	strokeWeight(1);
	noStroke();
	fill('yellow');
	textAlign(CENTER,TOP);
	textSize(17);
	text('Click inside circle to re-init',xcircle,hh);
	text('Friction='+round(fr,6),xcircle,hh+30);
	text('Gravity='+round(-a.y,6),xcircle,hh+60);
	pop();
}

function drawcontrols() // // draw slider controls and text
{
	strokeWeight(1);
	noStroke();
	fill('white');
	textAlign(CENTER,TOP);
	textSize(25);
	text('Bouncing Points',hw,10);
	textSize(16);
	textAlign(LEFT,TOP);
	text('Gravity',15,30);
	sliderGravity = createSlider(0,5000,accelinit*1E6,10)
	sliderGravity.size(80);
	sliderGravity.position(15,55);
	sliderGravity.changed(sliderGravityChanged);
	text('Friction',15,75);
	sliderFriction = createSlider(0,500,fr*1E6,10)
	sliderFriction.size(80);
	sliderFriction.position(15,100);
	sliderFriction.changed(sliderFrictionChanged);
}

function initpoint(k) // init 1 point with index k
{
	let kn=k/(N-1); // version of index k which stays in 0..1
	p[k]=createVector(xp,yp); // all points start at same position
	v[k]=createVector(1,1); // give the point a velocity pointing in direction depending on k
	v[k].setMag(vinit); // magnitude is always vinit
	v[k].setHeading(TWO_PI*kn); // angle is different for each point, depending on k
	let colred=128+127*sin(TWO_PI*kn); // generate a color for each point
	let colgreen=128+127*sin(TWO_PI*kn+TWO_PI/3);
	let colblue=128+127*sin(TWO_PI*kn+2*TWO_PI/3);
	col[k]=color(colred,colgreen,colblue); // store the color also
}

function initallpoints() // re-init all points
{
	for(let k=0; k<N; k++)
	{
		initpoint(k)
	}	
}

function drawpoint(k) // calculate new pos. of point and redraw, handling reflections also
{	
	p[k].add(v[k]); // update position of point with current velocity
	v[k].add(a); // update velocity with acceleration which is constant
	v[k].mult(1-fr); // apply friction proportional to velocity
	if (p[k].mag()>rcircle) // has point reached circle?
	{			
		// reflection on inside circle Vout = Visn - 2(Vin . n)n
		let n=p[k].copy(); // new norm vector, on circle it is based on position
		n.normalize(); // normalise the new vector n
		n.mult(-1); // flip it 180 degrees
		v[k].reflect(n); // use reflect function with norm vector on velocity		
	}
	else // point has not reached circle yet
	{
		stroke(col[k]); // draw point at current pos with it's color
		point(p[k]);	
	}
}

function mouseClicked() // mouse click handler of ps.js, re-init points at mouse position
{
	xp=mouseX-xcircle;
	yp=ycircle-mouseY;
	if(mag(xp,yp)<rcircle)
	{
		console.log('mouse click x=',xp,'y=',yp);
		initallpoints();
	}
}

function sliderGravityChanged() // slider for gravity has been moved
{
	let sl=1E-6*sliderGravity.value();
	console.log('Gravity =',sl);
	a.y=-sl;
}

function sliderFrictionChanged() // slider for friction has been moved
{
	let sl=1E-6*sliderFriction.value();
	console.log('Friction =',sl);
	fr=sl;
}

