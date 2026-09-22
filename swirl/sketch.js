f=0;r=190,b=255// #p5js
draw=_=>{f++||createCanvas(W=2*(w=200),W)+background(noStroke())
f&3?0:background(0,8);dt=.8*sin(t=f/200)
for(u=t;q=sin(u),p=cos(u),u<t+TAU;u+=1-dt)
for(v=t;j=sin(v),k=cos(v),v<t+TAU;v+=1+dt)
{fill(c=b*j,b*p,b-c);circle(w+r*q*k,w+r*q*j,5*q)}}