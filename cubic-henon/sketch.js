f=s=0;c=230;B=255//Cubic Henon #p5js
draw=_=>{f++||createCanvas(W=2*B,W)+noStroke()+background(0)
for(m=10;m--;){
x=y=.8*sqrt(((s^f)%80)/80);fill(r=(s++)&B,(3*r+f)&B,(6*r+f)&B)
for(k=~~(2e3*abs(x));k--;)
{[x,y]=[1.5*x-x**3-y,x];rect(~~(B+x*c),~~(B+y*c),1)}}}
