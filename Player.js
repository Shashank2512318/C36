class Player{
    constructor() {


    }

    getCount(){

        var pageno= database.ref('PlayerCount')
        pageno.on('value', function(data){
            PlayerCount= data.val()
        })



    }

    updateCount(count) {

        var pageno= database.ref();
        pageno.update({
            PlayerCount:count
        })

       }

       updateName(name){
           var location= 'Player'+PlayerCount
        database.ref(location).set({

            Name:name
        })


       }
}