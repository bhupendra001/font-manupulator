function preload(){

}

function draw(){



}

function setup(){

    video = createCapture(VIDEO);  
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    
    
    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);

}

function modelloaded(){

console.log("poseNet is initialized")


}

function gotposes(results){

if(results.length > 0){

console.log(results);

}

}
