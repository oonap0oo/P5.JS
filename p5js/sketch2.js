t=0;B=255// #p5js
draw=_=>{t++||createCanvas(W=567,333)+textSize(230)+pixelDensity(1)+noStroke()
background(fill(1));text("p5⁎js",10,230);loadPixels()
for(y=35;Y=y*9,y--;)for(x=61;X=x*9,x--;)
{l=pixels[4*(W*Y+X)]?2e-2/x:1
d=(x*y*98*l-t)&B;fill(q=(d<40?B:0),q*l,d);rect(X,Y,7)}}
