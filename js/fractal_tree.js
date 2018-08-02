var root;


function setup(){
    createCanvas(400, 400);
    var a = createVector(width/2, height);
    var b = createVector(width/2, height-100);
    var root = new Branch(width/2, height);    
}


function draw(){
    background(51);
    root.show();

}