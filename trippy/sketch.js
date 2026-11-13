t=0;w=255;V=1.4*w// #p5js
draw=_=>{t++||createCanvas(2*w,2*w)+noStroke()
for(R=V;Q=2*R,R>0;R-=10){
fill(Q&w,(Q+85)&w,(Q+170)&w)
beginShape()
for(k=0;r=R+20*sin(7*k),k<TAU;k+=PI/50)
vertex(w+r*cos(K=k+2*(R-V/2)*sin(t/1e4)),w+r*sin(K))
endShape()}}
