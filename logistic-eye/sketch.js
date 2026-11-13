t=0;b=255;a=4// #p5js
draw=_=>{t||createCanvas(W=2*b,W)+noStroke()+fill(0,b,0)
background(0,t?50:b)
r=d=.5;a=3.8+.2*sin(T=t++/b);A=3.8+.2*sin(T+2)
for(k=3e3;k--;){r=a*r*(1-r);d=A*d*(1-d)
x=(R=b*r)*cos(D=PI*d-t/90+r*3);y=R*sin(D)
rect(b+x,b+y,1);rect(b-x,b-y,1)}}
