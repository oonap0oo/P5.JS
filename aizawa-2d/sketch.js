t=0;h=.01;f=180;w=300
draw=_=>{createCanvas(2*w,2*w);noStroke(fill(w));background(x=y=z=1);c=cos(T=t++/50);s=sin(T)
for(k=1e4;k--;){[x,y,z]=[x+((z-.7)*x-3.5*y)*h,y+(3.5*x+(z-.7)*y)*h,z+(.6+.95*z-z**3/3-(x*x+y*y)*(1+.25*z)+.1*z*x**3)*h];
rect(w+f*(x*c-y*s),w+f*z-110,x*s+y*c+3)}}
