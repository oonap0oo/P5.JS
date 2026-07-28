// Golden Dragon  P5.JS    K Moerman 2026
// info from https://larryriddle.agnesscott.org/ifs/heighway/goldenDragon.htm

let x=0;
let y=0;
const alpha=2*Math.PI/3;
const alpha2=2*alpha;

function setup() // this function is called once at start
{
	createCanvas(600, 400);
	background(0); // clear canvas, black background
	textSize(35);
	textAlign(CENTER, TOP);
	textFont("Georgia");
	fill('yellow');
	text('Golden Dragon',300,10)
	frameRate(30);
	saveGif('golden_dragon',8)
}

function draw() // this function is called again every frame
{	
	let angle=frameCount/30 // frameCount provides number of 
	let col1=128+127*Math.sin(angle);
	let col2=128+127*Math.sin(angle+alpha);
	let col3=128+127*Math.sin(angle+alpha2);
	for (let k=1;k<800;k++)
	{
		let n=Math.random() // number 0..1
		if (n<0.6445)
		{
			let xnew=0.62367*x-0.40337*y;
			y=0.40337*x+0.62367*y;
			x=xnew;
			stroke(col1,col2,col3);
		}
		else
		{
			let xnew=-0.37633*x-0.40337*y+1;
			y=0.40337*x-0.37633*y;
			x=xnew;	
		stroke(col3,col1,col2);
		}
		point(130+x*400,150+y*350);
	}
	
}

