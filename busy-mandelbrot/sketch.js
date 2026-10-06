t=0;s=9,n=25,B=255// #p5js
draw=_=>{t++||createCanvas(W=2*s*n,W)+textSize(s)+noStroke()+background(0)
for(x=W;r=x/W*2.6-2,x-=s;)for(y=W;i=y/W*2.3-1.2,y-=s;)
{u=v=0;for(l=s;mag(u,v)<2&&l--;)[u,v]=[u*u-v*v+r,2*u*v+i]
c=(x*y*2-t)&B;fill(k=(c<n)*B,k,c);circle(x,y,(d=s-l-2)>2?d:2)}}
