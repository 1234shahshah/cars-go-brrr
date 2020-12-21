var gameState=0;
var database
var playerCount
var form
var game 
var player
var allPlayers
var distance=0
var car,car2,car3,car4,cars
function setup(){
    database=firebase.database()
    createCanvas(displayWidth,displayHeight);
    game=new Game()
    game.getState()
    game.start()
    

}

function draw(){
    background("white");
    if (playerCount===4)
    {
        game.update(1)

    }
     if (gameState===1)
     {
game.play()
     }
 
    }


