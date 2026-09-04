t=0;d=4,w=256//andxor vibes #p5js
r=(x,y)=>rect(x,y,d)
draw=_=>{t++||createCanvas(W=2*w-d,W)+noStroke()
for(y=0;y<w;y+=d)for(x=0;x<w;x+=d){q=(x<<1)&(y<<1)^(t>>2)
fill(q%257,(q%129)*2,(q%65)*4);r(x,y);r(x,v=W-y);r(u=W-x,y);r(u,v)}}