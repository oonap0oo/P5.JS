t=T=0;B=255;w=300;a=4;b=6;c=2;x=.7;y=-.3//Hopalong Fractal #p5js
draw=_=>{t++||createCanvas(W=2*w,W)+background(0)+noStroke()
for(m=10;fill(T%B,(3*T)&B,(5*T++)&B),m--;)
for(k=3e3;k--;){[x,y]=[y-1-sqrt(abs(b*x-1-c))*Math.sign(x-1),a-x-1];
rect(X=w+x,Y=w+y,1)}}
