f=0;R=230;B=255//Swirl2 #p5js
draw=_=>{f||(createCanvas(W=2*B,W),noStroke(),c=cos,s=sin)
f&3?0:background(0,f?8:B)
for(u=t=f++/R;U=.4*s(u-t),q=s(u+=.5+U),p=c(u),u<t+TAU;)
for(v=u;V=.4*c(v-t),j=s(v+=.5-V),k=c(v),fill(B*q,g=B*p,B-g),v<u+TAU;)
circle(B+R*q*k,B+R*q*j,1+abs(q))}