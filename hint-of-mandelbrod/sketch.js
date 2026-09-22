t=0;s=10;b=255
draw=_=>{t++||createCanvas(W=2*b,W)+noStroke();background(0)
for(x=0;x<W;x+=s){r=x/W*3-2
for(y=0;y<W;y+=s){i=y/W*3-1.5
u=v=0;for(l=s;l--;){[u,v]=[u*u-v*v+r,2*u*v+i];if(mag(u,v)>2)break}
q=l*sin((x*y+t)/s/2)
fill((q*30)&b,(q*57)&b,(q*76)&b);circle(x,y,2+q)}}}