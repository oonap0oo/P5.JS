f=0;r=240;s=.7*r;b=255// #p5js
draw=_=>{f||createCanvas(W=2*b,W)+noStroke()
background(0,f?8:b);d=.39*cos(f++/W)
for(u=0;q=sin(u),p=cos(u),fill(m=b-p*b,c=b-q*b,b+c-m),u<TAU;u+=.4-d)
for(v=u;j=sin(v+u),k=cos(v+u),v<u+TAU;v+=.4+d)
rect(b+r*q*k,b+s*q*j+s*p,2+q*j)}