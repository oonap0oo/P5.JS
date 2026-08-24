t=0;b=255;W=382;s=8//xor-sphere #p5js
d=_=>{T.noStroke();for(x=0;x<W;x+=s)for(y=0;y<W;y+=s){T.fill(r=((x^y)+t)&b,2*r%b,4*r%b);
T.rect(x,y,s)}}
draw=_=>{t++||(createCanvas(W,W,WEBGL),noStroke(),T=createGraphics(W,W))
d();background(0);rotateY(t/200);texture(T);sphere(160)}