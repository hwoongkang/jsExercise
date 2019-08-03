var paragraph;
function setup(){
    paragraph = createP("LeedoType");
}
function draw(){
    paragraph.elt.style['font-variation-settings'] = `"wght" ${mouseY}, "wdth" ${mouseX}`;
    paragraph.position(mouseX, mouseY);
}