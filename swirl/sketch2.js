f=0;r=230;b=255;d=r/1.41//Swirl3D #p5js
draw=_=>{f++||createCanvas(W=2*b,W)+background(0)+noStroke()
background(0,6);dt=.2*sin(t=f/b)
for(u=t;q=sin(u),p=cos(u),u<t+TAU;u+=.3+dt)
for(v=t;j=sin(v),k=cos(v),v<t+TAU;v+=.3-dt)
{fill(b*q,c=b*p,b-c);circle(b+r*q*k,b+d*p+d*q*j,2-p)}}