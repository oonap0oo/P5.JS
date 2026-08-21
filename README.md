# P5.JS

Exploring [P5.JS](https://p5js.org/) JavaScript library.

View the pieces of code on the [P5.JS website 'My Sketches'](https://editor.p5js.org/KMoerman/sketches)

## Simple Swimmer

Ported from my [original QB64 version](https://github.com/oonap0oo/QB64-projects#simple-swimmer).

[View online](https://editor.p5js.org/KMoerman/full/Z5zEQsANe)

The code on Github:

* Javascript code file [sketch.js](simple-swimmer/sketch.js)

* HTML file to run javascript in browser: [index.html](simple-swimmer/index.html)

Animated GIF file created using the saveGif() function:

![simpleswimmer.gif](simple-swimmer/simpleswimmer.gif)

## Golden Dragon

One of the classic Iterated Function Systems.

Using information from [https://larryriddle.agnesscott.org/ifs/heighway/goldenDragon.htm](https://larryriddle.agnesscott.org/ifs/heighway/goldenDragon.htm)

[View online](https://editor.p5js.org/KMoerman/full/cFivNPzxW)

The code on Github:

* Javascript code file [sketch.js](golden-dragon/sketch.js)

* HTML file to run javascript in browser: [index.html](golden-dragon/index.html)

Animated GIF file created using the saveGif() function:

![golden-dragon/golden_dragon.gif](golden-dragon/golden_dragon.gif)

## Floaty

A 'creature" with long tentacles that seems to float in circles. All made from math functions

[View online](https://editor.p5js.org/KMoerman/full/Y8FpStIRm)

The code on Github:

* Javascript code file [sketch.js](floaty/sketch.js)

* HTML file to run javascript in browser: [index.html](floaty/index.html)

Animated GIF file created using the saveGif() function:

![floaty/floaty.gif](floaty/floaty.gif)

## Sin tiles

A animated image based on the iteration after choosing a random starting point x,y:

    x = x + sin(y)
    y = y + sin(x)

[View online](https://editor.p5js.org/KMoerman/full/96817Nnir)

The code on Github:

* Javascript code file [sketch.js](sin_files/sketch.js)

* HTML file to run javascript in browser: [index.html](sin_files/index.html)
  
![sin_tiles/sin_tiles_small.gif](sin_tiles/sin_tiles_small.gif)

## Bubble Universe

The algoritm is found on many places on the web.

The example used as reference, in Sinclair Basic on a PC by BigEd: 
[https://stardot.org.uk/forums/viewtopic.php?t=25833](https://stardot.org.uk/forums/viewtopic.php?t=25833)

[View online](https://editor.p5js.org/KMoerman/full/211sgJf1G)

[View on Youtube](https://youtu.be/H8qWZb4fJ7Q?si=Xz4OR4ypXZiozKgz)

The code on Github:

* Javascript code file [sketch.js](bubble-universe/sketch.js)

* HTML file to run javascript in browser: [index.html](bubble-universe/index.html)

A still from the animation:

![bubble-universe/bubble_universe.png](bubble-universe/bubble_universe.png)

## Bouncing Points

Exploring Vectors and UI sliders in P5.JS

A toy which bounces points inside a circle, influenced by gravity and friction

[View online](https://editor.p5js.org/KMoerman/full/EPs-ahIuN)

The code on Github:

* Javascript code file [sketch.js](vectors/sketch.js)

* HTML file to run javascript in browser: [index.html](vectors/index.html)

[View on Youtube](https://youtu.be/gqJfqqSY-80?si=l5E5JDLH1iAwULUt)

A still from the animation:

![vectors/bouncing_points.png](vectors/bouncing_points.png)

## Interference

Interference, a visual effect based on the general idea of two point wave sources with an interference pattern.

The point sources travel in circular paths changing their distance from each other continuously.

This idea was [first implemented using QB64](https://github.com/oonap0oo/QB64-projects#interference)

[View online](https://editor.p5js.org/KMoerman/sketches/DvfOHq_oX)

The code on Github:

* Javascript code file [sketch.js](interference/sketch.js)

* HTML file to run javascript in browser: [index.html](interference/index.html)

[View on Youtube](https://youtu.be/uzFyvvNck2o)

A still from the animation:

![interference/interference.png](interference/interference.png)

## Sum of vectors

Making figures by rotating a series of vectors and plotting the sum.

[View online](https://editor.p5js.org/KMoerman/sketches/eUn-LqfU4)

The code on Github:

* Javascript code file [sketch.js](vector-sum/sketch.js)

* HTML file to run javascript in browser: [index.html](vector-sum/index.html)

Some examples of figures:

![vector-sum/sumvectors_contact.png](vector-sum/sumvectors_contact.png)

The application in a browser:

![vector-sum/vector_sum_screenshot.png](vector-sum/vector_sum_screenshot.png)

## Non Periodic

It is based on the function

    sin(PI.x) + sin(x)

which is not periodic because the ratio of their periods is not a rational number.

This code is made to fit in a post on X.com which is limited to 280 characters.

    a=0
    dt=.03
    f=(x)=>150+70*(sin(PI*x)+sin(4.5*x))
    draw=_=>{ 
      a++||(createCanvas(W=300,W),stroke(255))
      background(0,30)
      beginShape(POINTS)
      for(t=0,tt=.0015*a+1;t<75;t+=dt,tt+=dt){
      vertex(f(tt),f(t))}
      endShape()
    }

[View online](https://editor.p5js.org/KMoerman/sketches/h_PMQP6k1)

The code on Github:

* Javascript code file [sketch.js](non-periodic/sketch4.js)

* HTML file to run javascript in browser: [index.html](non-periodic/index4.html)

A GIF made from screen recording the animation:

![non-periodic/nonperiodic.gif](non-periodic/nonperiodic2.gif)

## Non periodic with feedback

Adding some feedback by adding previous value x to the function argument

    a=0;x=0//non-periodic-with-feedback #p5js
    f=(x)=>sin(PI*x)+sin(4.5*x);m=(x)=>175+85*x
    draw=_=>{ 
      a++||(createCanvas(W=350,W),stroke(W))
      background(0,35)
      beginShape(POINTS)
      for(t=2000;t--;){
      y=f(p=t/30+x);x=f(a/500+p)
      vertex(m(x),m(y))}
      endShape()}

[View online](https://editor.p5js.org/KMoerman/sketches/IOlNecOtU)

The code on Github:

* Javascript code file [sketch.js](non-periodic/sketch6.js)

* HTML file to run javascript in browser: [index.html](non-periodic/index6.html)

A GIF made from screen recording the animation:

![non-periodic/nonperiodicfeedback.gif](non-periodic/nonperiodicfeedback.gif)
