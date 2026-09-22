N=63;s=6;g=Array(N).fill(t=0);g[0]=1;r="01110110"//Rule110 #p5js
draw=_=>{t++||createCanvas(W=s*N,W)+noStroke()
if(!(t%s)){h=[...g]
for(k=0;k<N;){h[k]=r[(g[k?k-1:N-1]<<2)|(g[k]<<1)|g[k<N-1?k+1:0]]
fill(h[k]*W,g[k]*W,0);rect(k++*s,W-1,s)};g=h}
copy(0,1,W,H=W-1,0,0,W,H)}