f=0;B=255;N=20;s=12;w=s*N// #p5js
g=x=>s*sin(5*x)
draw=_=>{f++||(createCanvas(W=2*w,W),r=rect);background(0)
for(m=N;m--;)for(k=N;k--;)
{q=f/W+(k^m)/55;fill(c=(q*B)&B,(2*c)&B,B-c)
r(x=m*s,y=k*s,V=g(q-f/w),H=g(q+f/B))
r(x,Y=W-y-s,V,H);r(X=W-x-s,y,V,H);r(X,Y,V,H)}}