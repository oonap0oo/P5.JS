t=0;b=255// #p5js
draw=_=>{t++||createCanvas(W=768,H=304)+textSize(H)+pixelDensity(1)+noStroke()
background(fill(1));text("p5⁎js",20,227);loadPixels()
for(x=W;x-=8;)for(y=H;y-=8;){l=pixels[4*(W*y+x)]>0?8:3
q=l*sin(x*y+t/10);fill(c=q*67&b,q*43&b,q*56&b);circle(x,y,q)}}