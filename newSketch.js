var paragraph;
var roll,pitch;
var x,y,z;

function setup(){
    //paragraph = createP("hwoongkang");
    createCanvas(1920,1080);
    if(window.DeviceOrientationEvent){
        alert("Supported");
        //window.addEventListener("devicemotion", motion, false);
      }else{
        alert("DeviceMotionEvent is not supported");
      }
}
function draw(){
    /*
    x = accelerationX;
    y = accelerationY;
    z = accelerationZ;
    roll = atan2(-y,z);
    pitch = atan2(x, sqrt(y*y+z*z));
    paragraph.elt.style['font-variation-settings'] = `"wght" ${mouseX}`;
    */
   background(255)
   x=accelerationX;
   y=random();
   text(x.toString(),100,100)
}