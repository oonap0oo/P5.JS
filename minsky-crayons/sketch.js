t=0;B=255;f=0//Minsky Crayons #p5js
draw=_=>{t||(createCanvas(W=2*B,W),n=noise)
t&B?0:(background(0),f=1-f);f?x=y=B&t:x=y=(B^t)&B
e=2+3*n(t+1);d=2+3*n(t+2);stroke(c=~~B*n(x,y,t++),(c<<2)&B,(c<<3)&B)
translate(B,B);for(k=8e3;k--;){x-=y>>e;y+=x>>d;point(x,y)}}