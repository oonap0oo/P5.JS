t=0;b=255;n=16;s=15;w=s*n// #p5js
draw=_=>{t++||(createCanvas(W=2*w,W),r=rect)
background(0);p=t>>4
for(u=n;x=s*u-s,u--;)for(v=n;y=s*v-s,v--;){
q=(u^p)|(v^p)
fill((c=s*q)%b,(c*2)%b,(c*3)%b)
r(w+x,w+y,d=q%s);r(w-x,w-y,-d);r(w-x,w+y,-d,d);r(w+x,w-y,d,-d)}}