t=0;h=.01;f=210
draw=_=>{t++||createCanvas(W=800,W,WEBGL)+noStroke()
rotate(t/30,[0,x=y=z=1,0]);background(0)
for(k=1e4;k--;){[x,y,z]=[x+((z-.7)*x-3.5*y)*h,y+(3.5*x+(z-.7)*y)*h,z+(.6+.95*z-z**3/3-(x*x+y*y)*(1+.25*z)+.1*z*x**3)*h];
push();translate(f*x,f*z-90,f*y);pop(box(2))}}
