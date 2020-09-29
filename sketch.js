var ball;
var position,database,movingball;

function setup(){
    database=firebase.database()
    console.log(database)
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var movingballposition= database.ref('ball/position')
    movingballposition.on("value",readposition,showerror)
    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        rightposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        rightposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        rightposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        rightposition(0,+1);
    }
    drawSprites();
}

function readposition(data){
    position=data.val()
    movingball.x=position.x
    movingball.y=position.y
}
function rightposition(x,y){
    database,ref('ball/position').set({
    'x':position.x=x,
        'y':position.y=y
    
    })


}
function showerror(){
    console.log('my first program database')
}
