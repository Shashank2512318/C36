class Game{
        constructor() {




        }

       getState() {
           var pageno= database.ref('gameState');


           pageno.on('value', function(data){
           gameState= data.val();

           })
       }

       updateState(state) {

        var pageno= database.ref();
        pageno.update({
            gameState:state
        })

       }

       
       Startgame() {
           if(gameState===0) {
            player= new Player();
            player.getCount();
            form= new Form();
            form.display();


           }
           


    }
}