t=T=0;B=255;w=300// #GumowskiMira #p5js
f=x=>a*x+2*(1-a)*x*x/(1+x*x)**2
draw=_=>{t++||createCanvas(W=2*w,W)+noStroke()
background(0,T?8:B);x=y=4+4*sin(t/20);a=-.7-sin(t/70)/99
for(m=10;fill(T%B,(w+T)%B,(W+T++)%B),m--;)
for(k=1e3;k--;){x=y+f(u=x);y=f(x)-u;rect(w+y*17,w+x*17,2)}}
