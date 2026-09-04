//Sierpiński's dream #p5js
t=0;d=255
draw=_=>{t++||createCanvas(W=2*(w=256),W)+background(0)
for(k=W;k--;){y=k|t%W;x=(t-k)%W;stroke((y>w)*d,t&d,k&d);point(x,W-y);point(x,y)}}
