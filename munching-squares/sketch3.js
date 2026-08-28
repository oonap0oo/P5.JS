t=0//Falling squares w text #p5js
s='falling•squares•'
draw=_=>{t++||createCanvas(W=784,H=512)+textAlign(CENTER,CENTER)+textSize(14)
for(x=0;x<W;x+=16){y=x^t;fill(r=x&255,(x&127)*2,255-r);rect(x,v=y%H,16)
fill(0);text(s[(x/16+floor(y/16))%16],x+8,v+8)}}