t=0;d=4,w=256//shifting madness #p5js
f=(k,l)=>{scale(k,l);image(c,-w,-w)}
draw=_=>{t++||createCanvas(W=2*w,W)+noStroke()
for(y=0;y<w;y+=d)for(x=0;x<w;x+=d){q=(x+t)&(y+t)
fill(q&255,(q<<1)&255,(q<<2)&255);rect(x,y,d)}
c=get(0,0,w,w);translate(w,w);f(1,-1);f(-1,1);f(1,-1)}