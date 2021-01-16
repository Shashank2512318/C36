class Form{

    constructor() {
    }

    display() {
        var title= createElement('h2')
        title.html('Car Racing Game')
        title.position(330, 150)
        
        var Input= createInput('Name')
        Input.position(330, 200)
        
        var PlayButton= createButton('Play')
        PlayButton.position(400, 230)

        
        var greeting= createElement('h3')
        
        PlayButton.mousePressed(
            function(){
                Input.hide()
                PlayButton.hide()

                var Name= Input.value()

                PlayerCount++

                player.updateName(Name)
                player.updateCount(PlayerCount)
                greeting.html('Hello '+ Name)
                greeting.position(330, 250);
            }
        )

    }

}