t=0;w=250;D=30;S=9,B=255//Dynamic Mandala #p5js
draw=_=>{t++||(createCanvas(W=2*w,W),noStroke(),background(0),f=random)
R=f(q=w-D);a=f(T=TAU/S);r=f(D*(.1+.9*R/q))
fill(t&B,(5*t)&B,(25*t)&B)
for(s=0;s<TAU;s+=T)
for(p=2;p--;)circle(w+R*cos(A=s+a-p*2*a),w+R*sin(A),r)}