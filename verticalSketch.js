var paragraph;
var myString;
var screenOrientation;
var count;
function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    screenOrientation = 0;
    count =100;
    paragraph = createP(`테스트하는 중입니다.`);
    paragraph.position(100, 100);
}
function draw(){
    background(255);
    //paragraph.elt.text=`Current count: ${count}`
    //ellipse(mouseX,mouseY,10,10)
    //text(myString,200,100);
}
/*
function getOrientation(){
    var orientation = window.innerWidth > window.innerHeight ? "Landscape" : "Portrait";
    return orientation;
}*/
window.addEventListener("resize",function(event){
    screenOrientation = window.innerWidth > window.innerHeight ? 0 : 1;
    paragraph.elt.style['writing-mode'] = screenOrientation==1? "vertical-rl" : "horizontal-tb"
    if(screenOrientation == 1){
        paragraph.elt.style['font-variation-settings'] = `"wght" ${500}`;
    }else{
        paragraph.elt.style['font-variation-settings'] = `"wght" ${400}`;
    }
    
    myString = screenOrientation==1?"Portrait":"Landscape";
    paragraph.innerHTML = myString
    //alert(myString)
})
window.addEventListener("click",function(event){
    count++;
    
    console.log("click!")
})