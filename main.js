noseX=0;
noseY=0
leftWristX=0;
rightWristX=0;
differnce=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,100);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded()
{
    console.log("posenet is intialized!");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+ noseX + ", noseY= "+ noseY);
        
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        differnce=floor(leftWristX-rightWristX);
        console.log("leftWristX= "+ leftWristX + ", rightWristX= "+ rightWristX + "difference=" + differnce);
    }

}
function draw()
{
    background("#969A97");
    document.getElementById("font_size").innerHTML="Font size of the text will be" + differnce + "px";
    textSize(differnce);
    fill("#800080");
    text("Peter",noseX,noseY, differnce);
}
