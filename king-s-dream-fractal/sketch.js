t=0;x=y=2;B=255;f=x=>8*~~(16*x+33)//#p5js
draw=_=>{t||(createCanvas(W=2*B,W),noStroke(),s=sin);background(0,t++?6:B)
for(k=750;k--;){[x,y]=[s(2.88*x)-.77*s(2.88*y),s(-.97*x)+.75*s(-.97*y)]
p=get(u=f(x),v=f(y));q=8*s(u*v/10-t/30);p[0]+=8*q;p[1]+=8;p[2]-=9*q
fill(p);circle(u,v,q)}}
