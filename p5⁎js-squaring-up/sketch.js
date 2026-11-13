t=0;B=255// #p5js
draw=_=>{t++||createCanvas(W=600,300)+textSize(B)+pixelDensity(1)+noStroke()
background(fill(1));text("p5⁎js",0,210);loadPixels()
for(y=33;Y=y*9,y--;)for(x=66;X=x*9,x--;)
l=pixels[4*(W*Y+X)]?(fill((c=(X^Y)+t)&B,(2*c)&B,(3*c)&B),rect(X,Y,2+(c/6)%7)):0}
