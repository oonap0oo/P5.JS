t=0//Dropping squares #p5js
draw=_=>{t++||createCanvas(W=784,H=512)
for(x=0;x<W;x+=16){y=x^t;fill(c=x&255,(x&127)*2,255-c);rect(x%W,y%H,16)}}