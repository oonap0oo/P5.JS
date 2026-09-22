s=6;t=0//BusyMozaic #p5js
draw=_=>{t++||createCanvas(2*(W=225),2*(H=150))+background(0)
for(x=0;x<2*W;x+=s){y=(x^t)%(2*H);y=s*~~(y/s)
u=1.7*(x-W);v=1.7*(y-H)+150;d=~~abs(u**3/4E4-u+3*v-v**2/1E2)
p=(d/s)%(s&t);fill(d%256,(d%128)*2,(d%32)*8);rect(x-p,y-p,2*p)}}