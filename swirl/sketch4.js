f=0;b=255;R=80//Torus #p5js #Processing
draw=_=>{f||createCanvas(W=2*b,W)+noStroke()
background(0,f?10:b)
for(v=t=f++/b;w=5-4*sin(v),v<t+TAU;v+=.2)
for(u=v/w;k=2*R+R*cos(V=v+t),fill(b*sin(U=u+t),w*35,b*sin(V)),u<v/w+TAU;u+=.3)
circle(b+k*cos(U),b+.7*k*sin(U)+.7*R*sin(V),2)}