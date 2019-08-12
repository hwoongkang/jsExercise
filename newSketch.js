var paragraph;
var roll,pitch;
var x,y,z;

function setup(){
    paragraph = createP("hwoongkang");
    createCanvas(1920,1080);
    
    x=0;
    y=0;
    z=0;
    if(window.DeviceMotionEvent){
        alert("Supported");
        window.addEventListener("devicemotion", function(event){
            x = event.accelerationIncludingGravity.x;
            y = event.accelerationIncludingGravity.y;
            z = event.accelerationIncludingGravity.z;
        });
      }else{
        alert("DeviceMotionEvent is not supported");
      }
      
}
function draw(){
    /*
    x = accelerationX;
    y = accelerationY;
    z = accelerationZ;*/
    background(255);
    roll = atan2(x,-z);
    pitch = atan2(y, sqrt(x*x+z*z));
    
    paragraph.elt.style['font-variation-settings'] = `"wght" ${90+180/PI*roll},
     "wdth" ${180 + 180/PI*pitch}`;
}