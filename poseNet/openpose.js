let capture;
let posenet;
let noseX, noseY;
let leyeX,leyeY;
let reyeX,reyeY;
let singlePose, skeleton;
let actror_img;

function setup() {
    createCanvas(800, 500);
    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture,modelLoaded);
    posenet.on('pose',recievedPoses)

    actor_img = loadImage('images/papa.png');

  }

  function recievedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }

    console.log(noseX + " " + noseY);
  }
  function modelLoaded(){
    console.log("model loaded");
  }
  
function draw() 
  {
    image(capture,0, 0);
    fill(255,0,0);

    if(singlePose){
        for(let i=0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x,singlePose.keypoints[i].position.y,20);
        }
        stroke(255,255,255);
        strokeWeight(5);
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x,skeleton[j][0].position.y,skeleton[j][1].position.x,
            skeleton[j][1].position.y)
        }
    
          image(actor_img,singlePose.nose.x-70,singlePose.nose.y-80,150,150);

    }
}
