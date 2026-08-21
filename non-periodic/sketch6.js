a=0;x=0//non-periodic-with-feedback #p5js
f=(x)=>sin(PI*x)+sin(4.5*x);m=(x)=>175+85*x
draw=_=>{ 
  a++||(createCanvas(W=350,W),stroke(W))
  background(0,35)
  beginShape(POINTS)
  for(t=2000;t--;){
  y=f(p=t/30+x);x=f(a/500+p)
  vertex(m(x),m(y))}
  endShape()}