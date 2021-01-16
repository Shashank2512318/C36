const database= firebase.database();

var gameState= 0;
var PlayerCount;
var form, player, game;

function setup(){
    createCanvas(500,500);
    game= new Game()
    game.Startgame();
    
    

}





function draw(){
    background("white");
    
    drawSprites();
}


