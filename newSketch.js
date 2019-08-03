var paragraph;
var roll,pitch;
var x,y,z;

function setup(){
    paragraph = createP("hwoongkang");
}
function draw(){
    x = accelerationX;
    y = accelerationY;
    z = accelerationZ;
    roll = atan2(-y,z);
    pitch = atan2(x, sqrt(y*y+z*z));
    paragraph.elt.style['font-variation-settings'] = `"wght" ${90+roll}`;
    
}