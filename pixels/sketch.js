// pixels
t=0
draw=_=>{
t||(createCanvas(W=350,W),pixelDensity(1),t=160,v=W/2)
loadPixels()
for(x=0;x<W;x++)
for(y=0;y<W;y++){
r=mag(x-v,y-v);p=sin(t*r)
for(c=0;c<4;c++){
pixels[4*(W*y+x)+c]=255*((c==3)||sin(.006*r+c-t)*p)}}
t+=.001;updatePixels()
}