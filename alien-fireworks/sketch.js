t=x=y=a=0;d=2e-6;B=255// #p5js
draw=_=>{t||(createCanvas(W=2*B,W),noStroke(),P=b=TAU,S=sin)
t&3?0:background(0,t?8:B);fill(B*S(h=(x+y)*3),B*S(h+2),B*S(h+4))
for(k=1e4;k--;){b<P?b+=d:(b=0,a>0?a-=d:a=P);
[x,y]=[S(x*x-y*y+a),S(2*x*y+b)];rect(B+B*x,B-B*y,1)}
[x,y]=[y,x];t++}
