t=0//Munching squares #p5js
draw=_=>{t++||createCanvas(W=512,W);(t&3)||background(255,4)
for(x=W;x--;){y=x^t;point(x,y%W)}}