f=0;B=255;N=18;d=12;w=N*d// #p5js
draw=_=>{f++||(createCanvas(W=2*w,W),noStroke(),c=circle);background(0)
for(m=N;m--;)for(k=N;k--;)
{z=(m*k/8+f/6)%d-d/2;fill(r=(56*(m^k))&B,(r*3)&B,B-r)
c(x=d+d*m,y=d+d*k,Z=2*z);c(X=W-d*m-d,y,Z);c(x,Y=W-d*k-d,Z);c(X,Y,Z)}}