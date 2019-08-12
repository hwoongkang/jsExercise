var paragraph;
var screenOrientation;
var isVertical;
var count;
function setup(){
    createCanvas(window.innerWidth,window.innerHeight);

    paragraph = createP(`테스트하는 중입니다.`);
    paragraph.position(50, 50);

    isVertical = getOrientation(window);
    paragraph.elt.style['writing-mode'] = isVertical? "vertical-rl" : "horizontal-tb"
    paragraph.elt.style['font-variation-settings'] = `"wght" ${isVertical?500:400}`;

    count =100;
}
function draw(){
    background(255);
}
window.addEventListener("resize",function(event){
    resizeCanvas(window.innerWidth, window,innerHeight);
    
    isVertical = getOrientation(window);

    paragraph.elt.style['writing-mode'] = isVertical? "vertical-rl" : "horizontal-tb"
    paragraph.elt.style['font-variation-settings'] = `"wght" ${isVertical?500:400}`;
    
    screenOrientation = isVertical?"Portrait":"Landscape";
    paragraph.innerHTML = screenOrientation // not working
})
function getOrientation(obj){
    return obj.innerWidth < obj.innerHeight;
}
window.addEventListener("click",function(event){
    count++;
    
    console.log("click!")
})