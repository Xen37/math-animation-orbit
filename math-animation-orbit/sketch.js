function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(160); 
    orbits();
    instructions();
    lastposition = controller();
    moving();
}
let angle = 0;
let lastposition;
let speed;
let raduis = 100;

function moving(){

    speed = lastposition * 0.0002;

    if(lastposition <= 150 && lastposition > 0){
        angle += speed;
    }
    else if(lastposition >= 151 && lastposition <= 300){
        angle += speed + 0.0004;
    }
}

function instructions(){
    fill(0);
    text("speed:  " + Math.trunc(speed * 100), 165, 50);
    text("move your mouse horizontal to speed up the orbit",55, 330 );
    noFill();

    strokeWeight(5);
    line(100, 370, 300, 370);
    strokeWeight(1);
}

function orbits(){
    fill(0);
    circle(200, 200, 2);
    noFill();

    let x = (width/2) + cos(angle) * raduis;
    let y = (height/2) + sin(angle) * raduis;
    fill(0);
    circle(x, y, 10);

}

function controller(){
	
    if(mouseX >= 100 && mouseX <= 300){
        circle(mouseX, 370, 20);
        lastposition = mouseX;
        
    }
    else{
        circle(lastposition, 370, 20);
    }
    return lastposition;
}
