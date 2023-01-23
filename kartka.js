// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom({debug:true});

loadSprite("background","krajobarz.png")
loadSprite("renifer","renifer.png")
loadSound("muzyczka","pisoeneczka.mp3")
// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);

add([
    sprite("background"),
    pos(0,0)
])

let renifer = add([
    sprite("renifer"),
    pos(210,90),
    rotate(0)
])

let dead = false


onUpdate(()=>{

    debug.log(renifer.pos.x)

    if(dead){
        renifer = add([
            sprite("renifer"),
            pos(210,90),
            rotate(0)
        ])
        dead = false
    }

     //renifer.moveTo(renifer.pos.x+1,renifer.pos.y)
     renifer.pos.x +=1 

     if(renifer.pos.x > 300)
    

     {
        renifer.angle += 10  
     }
     if(renifer.pos.x > 400)
     {
        destroy(renifer);
        dead = true
  
     }
    
     onKeyPress("space",()=>(
        play("muzyczka", {"volume": 0.1})
     ))
    //debug.log(renifer.pos.x)

})

   // onLoad(()=>{

        //play("pisoeneczka")
        // play a looping soundtrack (check out AudioPlayOpt for more options)
       // const music = play("pisoeneczka", {
          //  volume: 0.8,
          //  loop: true
    //   })
        
        // using the handle to control (check out AudioPlay for more controls / info)
     //   music.pause()
      //  music.play()

   // })




