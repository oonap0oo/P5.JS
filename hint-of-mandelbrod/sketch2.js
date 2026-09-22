t=0;s=8;b=255;f=x=>x/W*2.6-1.3//#p5js
draw=_=>{t++||createCanvas(W=2*b,W)+noStroke();background(0)
for(x=0;x<W;x+=s)for(y=0;y<W;y+=s){u=f(x);v=f(y)
for(l=0;(l<s-2)&((m=mag(u,v))<2);l++)[u,v]=[u*u-v*v+.4,2*u*v+.35]
q=sin(m+t/30);fill((m*b)&b,(q*b)&b,(m*q)&b);rect(x,y,l*q)}}