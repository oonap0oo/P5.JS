t=0;w=255
draw=_=>{t++||(createCanvas(W=2*w,W),noStroke(),r=random)
background(randomSeed(1))
for(n=1e4;n--;){d=log(r()+6e-5);a=TAU*r();u=42*d*sin(a);v=35*d*cos(a)
c=cos(D=3*d+t/60);s=sin(D);x=u*c+v*s;y=-u*s+v*c+r()*14
X=1.4*x+.6*y;Y=.2*x+.8*y;fill(w,w+130*d,0);rect(w+X,w+Y,2)}}