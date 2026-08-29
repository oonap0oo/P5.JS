t=0,a=1.4;b=-2.3;c=2.4;d=-2.1;x=0;y=0//#p5js
f=_=>{for(p=2e3;p--;){u=n(a*y)-s(b*x);y=n(c*x)-s(d*y);point(150+65*(x=u),210-90*y)}}
draw=_=>{t++||(createCanvas(300,400),n=sin,s=cos,stroke(255,2),background(0));
(t<1500)?f():text('P. De Jong Attractor',100,15)}