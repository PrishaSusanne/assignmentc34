var ball,position,database;
var x,y;
var x1,y1,fr,h1,h2;

function setup(){
    database = firebase.database();

    createCanvas(800,800);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
  
    var ballposition = database.ref('ball/position');
    ballposition.on("value",readPosition, showError);
}
var rects = [];
var size
function draw(){
    background("cyan");
  
    
    if(mouseIsPressed){
       
       rects = createSprite(mouseX,mouseY,10,10);
       rects.shapeColor = "pink";
    }

    ball.x = mouseX;
    ball.y = mouseY;
    drawSprites();
}

function writePosition(x,y){
    
    database.ref('ball/position').set({
        'x':mouseX,
        'y':mouseY
    })
}
function readPosition(data){

    position = data.val();
    
    ball.x = position.x;
    ball.y = position.y;
}

function showError(){

    console.log("error in reading data");
}