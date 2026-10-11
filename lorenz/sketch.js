t=0;h=.01;B=255//Lorenz #p5js
draw=_=>{t++||createCanvas(W=800,W,WEBGL)+noStroke(fill(B,B,0))
rotate(t/30,[0,1,0]);background(0);x=y=z=2.9
for(k=4e3;k--;){[x,y,z]=[x+10*(y-x)*h,y+((28-z)*x-y)*h,z+(x*y-2.7*z)*h]
push();translate(10*y,260-10*z,14*x);pop(box(1.5))}}
