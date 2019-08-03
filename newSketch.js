var alpha,beta,gamma;
var paragraph;

function setup(){
    paragraph = createP("Leedotype");
    alpha = 0;
}
function draw(){
    paragraph.elt.style['font-variation-settings'] = `"wght" ${90+alpha}`;
    
}
window.addEventListener('deviceorientation',function(e){
    alpha = e.alpha;
    beta = e.beta;
    gamma = e.gamma;
})