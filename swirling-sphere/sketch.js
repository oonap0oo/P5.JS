f=0;B=255;w=250;R=220;N=35// #p5js
draw=_=>{f++||createCanvas(W=2*w,W)+noStroke();background(0)
for(m=0,t=0;D=2*m+f/R,t<=PI;m++,t+=PI/N)for(k=f,d=D-PI;d<D+PI;k++,d+=TAU/N)
{fill((c=k*m/6)%B,(2*c)&B,(3*c)&B)
circle(w+R*(s=sin(t))*cos(d),w+.7*R*(y=s*sin(d))+.7*R*cos(t),5+4*y)}}
