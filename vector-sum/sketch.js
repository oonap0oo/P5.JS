// Sum of vectors      K Moerman 2026
// creating figures by adding a number of vectors and plotting a point where the sum ends up

const w=650, h=500; // size of image
const hw=w/2, hh=h/2;
const anglestep=0.3 // starting value of angle added to largest vector
const nframe=200; // number of points plotted in one frame time

let r;
let n=6;
let m=-4;
let c=1;
let a=0;
let figureangle=0;
let xp=[], yp=[], lp=[]; // values of vectors
let txt1,txt2,sliderm,slidern,colpicker; // UI elements
let col='white';

function setup() // this function is called once at start
{
  createCanvas(w, h);
  background(0);
  initvectors();
  drawui();
}

function draw() // this function is called again every frame
{
  translate(hw,hh);
  stroke(col);
  for(let k=0;k<nframe;k++) // each frame a number of points is calc. and plotted
	  adddrawvectors();
}

function initvectors() // give the series of vectors initial value
{
  r=120*(2+0.45*c); // adjust r to keep figure similar in size
  for(let k=0; k<n; k++) // also store length to avoid recalculating many times
  {
    lp[k]=r/(2**(k+1)+c); // length vectors further in series gets smaller 
    xp[k]=lp[k]*Math.cos(figureangle); // x and y components will get changed due to rotation
    yp[k]=lp[k]*Math.sin(figureangle);
  }
}

function adddrawvectors() // add vectors, draw point at sum, rotate all vectors for next call
{
  let xsum=0, ysum=0;
  let angle=anglestep; // value for rotation of 1st vector in xeries
  let angleoffset=anglestep*a; // constant amount of rotation depending on setting a
  for(let k=0; k<n; k++)
  {
    xsum+=xp[k]; // summing vectors
    ysum+=yp[k];
    let currentangle=Math.atan2(yp[k],xp[k]);
    let newangle=currentangle+angle+angleoffset;
    xp[k]=lp[k]*Math.cos(newangle); // new x and y comp. of vector
    yp[k]=lp[k]*Math.sin(newangle);
    angle*=m; // increase angle for next vector in series
  }
  point(xsum,ysum);
}

function drawui() // draw all UI elements, called once in setup
{
  textSize(18);
  txt1=createElement('div','Angle factor m='+m);
  txt1.id('txt1');
  txt1.position(20, 10);
  document.getElementById("txt1").style.color = "lightblue";
  sliderm=createSlider(3, 6, Math.abs(m), 1);
  sliderm.position(10, 30);
  sliderm.size(100);
  sliderm.changed(sliderchanged);
  checkboxsign=createCheckbox('Negative',true);
  checkboxsign.id('checkboxsign');
  checkboxsign.position(120,30);
  document.getElementById("checkboxsign").style.color = "lightblue";
  checkboxsign.changed(sliderchanged);
  txt2=createElement('div','Number of vectors n='+n);
  txt2.id('txt2');
  txt2.position(20, 50);
  document.getElementById("txt2").style.color = "lightblue";
  slidern=createSlider(2, 15, n, 1);
  slidern.position(10, 70);
  slidern.size(100);
  slidern.changed(sliderchanged);
  txt3=createElement('div','Constant c='+c);
  txt3.id('txt3');
  txt3.position(20, 90);
  document.getElementById("txt3").style.color = "lightblue";
  sliderc=createSlider(0, 8, c, 1);
  sliderc.position(10, 110);
  sliderc.size(100);
  sliderc.changed(sliderchanged);
  selecta=createSelect();
  selecta.position(20,140);
  for(let v=4;v>1;v/=2)
  {
    selecta.option('a=1/'+v.toString(),1/v);
  }
  for(let v=0;v<9;v++)
  {
    selecta.option('a='+v.toString(),v);
  }
  selecta.selected(0);
  selecta.changed(sliderchanged);
  txt4=createElement('div','Color');
  txt4.id('txt4');
  txt4.position(20, 170);
  document.getElementById("txt4").style.color = "lightblue";
  colpicker = createColorPicker(col);
  colpicker.position(20,190);
  colpicker.changed(colpickerchanged)

  txt6=createElement('div','Angle figure');
  txt6.id('txt6');
  txt6.position(20, 230);
  document.getElementById("txt6").style.color = "lightblue";
  sliderfigureangle=createSlider(-PI, PI, figureangle, .1);
  sliderfigureangle.position(10, 250);
  sliderfigureangle.size(100);
  sliderfigureangle.changed(sliderchanged);

  buttonsave=createButton('Save image');
  buttonsave.position(20,280);
  buttonsave.mousePressed(buttonsavepressed);
}

function sliderchanged() // event handler if UI elements gets changed
{
  m=sliderm.value();
  if(checkboxsign.checked()) m=-m;
  document.getElementById("txt1").innerHTML = 'Angle factor m='+m;
  n=slidern.value();
  document.getElementById("txt2").innerHTML = 'Number of vectors n='+n;
  c=sliderc.value();
  document.getElementById("txt3").innerHTML = 'Constant c='+c;
  a=parseFloat(selecta.value());
  figureangle=sliderfigureangle.value();

  initvectors();
  background('black');
  console.log(m,n,c,a);
}

function colpickerchanged() // event handler if color picker gets used
{
  col=colpicker.color()
}

function buttonsavepressed() // save content of canvas as PNG
{
  saveCanvas('sumvectors.png');
}