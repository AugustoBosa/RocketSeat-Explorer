





export default function Events({Controllers,
    Soundboard,
    Sounds,
    controls}){

        let bgSound,activeBgSound

Controllers.play.addEventListener("click",controls.playTimer)
Controllers.pause.addEventListener("click",controls.pauseTimer)
Controllers.stop.addEventListener("click",controls.resetTimer)
Controllers.increase.addEventListener("click",controls.timeIncrease)
Controllers.decrease.addEventListener("click",controls.timeDecrease)

Soundboard.forest.addEventListener("click",()=>{
    
    if(bgSound!=undefined){
    bgSound.pause()
    }

    bgSound=Sounds.forest

    if(bgSound==activeBgSound){
        Soundboard.forest.classList.toggle("activeBgSound")
        bgSound.pause()
        activeBgSound=""
    }else{
        controls.clearSound()
        Soundboard.forest.classList.toggle("activeBgSound")
        bgSound.play()
        activeBgSound=bgSound
        bgSound.loop=true
    } 
})
Soundboard.rain.addEventListener("click",()=>{
    
    if(bgSound!=undefined){
    bgSound.pause()
    }

    bgSound=Sounds.rain

    if(bgSound==activeBgSound){
        Soundboard.rain.classList.toggle("activeBgSound")
        bgSound.pause()
        activeBgSound=""
    }else{
        controls.clearSound()
        Soundboard.rain.classList.toggle("activeBgSound")
        bgSound.play()
        activeBgSound=bgSound
        bgSound.loop=true
    } 
})
Soundboard.coffee.addEventListener("click",()=>{
    
    if(bgSound!=undefined){
    bgSound.pause()
    }

    bgSound=Sounds.coffee

    if(bgSound==activeBgSound){
        Soundboard.coffee.classList.toggle("activeBgSound")
        bgSound.pause()
        activeBgSound=""
    }else{
        controls.clearSound()
        Soundboard.coffee.classList.toggle("activeBgSound")
        bgSound.play()
        activeBgSound=bgSound
        bgSound.loop=true
    } 
})
Soundboard.fire.addEventListener("click",()=>{
    
    if(bgSound!=undefined){
    bgSound.pause()
    }

    bgSound=Sounds.fire

    if(bgSound==activeBgSound){
        Soundboard.fire.classList.toggle("activeBgSound")
        bgSound.pause()
        activeBgSound=""
    }else{
        controls.clearSound()
        Soundboard.fire.classList.toggle("activeBgSound")
        bgSound.play()
        activeBgSound=bgSound
        bgSound.loop=true
    } 
})

}

