
export default function Events({Controllers,
    Soundboard,
    Sounds,
    controls,
    Sliders}){

        let bgSound,activeBgSound, bgSoundVolume,activeSoundVolume

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
        bgSoundVolume=(Sliders.forest.value)/100
        if(bgSoundVolume==activeSoundVolume){
            controls.clearSound()
            activeBgSound=""
        }else{
            activeSoundVolume=bgSoundVolume
            bgSound.volume=Number(activeSoundVolume)
            bgSound.play()
           
        }
       
    }else{
        let startingVolume=Sliders.forest.value
        controls.clearSound()
        if(startingVolume==0){
            Sliders.forest.value=50
        }else{
            Sliders.forest.value=startingVolume
        }        
        Soundboard.forest.classList.toggle("activeBgSound")
        bgSound.play()
        bgSound.volume=(Sliders.forest.value)/100
        activeBgSound=bgSound
        bgSound.loop=true
        activeSoundVolume=bgSound.volume
    } 
})

Soundboard.rain.addEventListener("click",()=>{
    
    if(bgSound!=undefined){
    bgSound.pause()
    }

    bgSound=Sounds.rain

    if(bgSound==activeBgSound){
        bgSoundVolume=(Sliders.rain.value)/100
        if(bgSoundVolume==activeSoundVolume){
            controls.clearSound()
            activeBgSound=""
        }else{
            activeSoundVolume=bgSoundVolume
            bgSound.volume=Number(activeSoundVolume)
            bgSound.play()
           
        }
       
    }else{
        let startingVolume=Sliders.rain.value
        controls.clearSound()
        if(startingVolume==0){
            Sliders.rain.value=50
        }else{
            Sliders.rain.value=startingVolume
        }        
        Soundboard.rain.classList.toggle("activeBgSound")
        bgSound.play()
        bgSound.volume=(Sliders.rain.value)/100
        activeBgSound=bgSound
        bgSound.loop=true
        activeSoundVolume=bgSound.volume
    } 
})

Soundboard.coffee.addEventListener("click",()=>{
    
    if(bgSound!=undefined){
    bgSound.pause()
    }

    bgSound=Sounds.coffee

    if(bgSound==activeBgSound){
        bgSoundVolume=(Sliders.coffee.value)/100
        if(bgSoundVolume==activeSoundVolume){
            controls.clearSound()
            activeBgSound=""
        }else{
            activeSoundVolume=bgSoundVolume
            bgSound.volume=Number(activeSoundVolume)
            bgSound.play()
           
        }
       
    }else{
        let startingVolume=Sliders.coffee.value
        controls.clearSound()
        if(startingVolume==0){
            Sliders.coffee.value=50
        }else{
            Sliders.coffee.value=startingVolume
        }        
        Soundboard.coffee.classList.toggle("activeBgSound")
        bgSound.play()
        bgSound.volume=(Sliders.coffee.value)/100
        activeBgSound=bgSound
        bgSound.loop=true
        activeSoundVolume=bgSound.volume
    } 
})

Soundboard.fire.addEventListener("click",()=>{
    
    if(bgSound!=undefined){
    bgSound.pause()
    }

    bgSound=Sounds.fire

    if(bgSound==activeBgSound){
        bgSoundVolume=(Sliders.fire.value)/100
        if(bgSoundVolume==activeSoundVolume){
            controls.clearSound()
            activeBgSound=""
        }else{
            activeSoundVolume=bgSoundVolume
            bgSound.volume=Number(activeSoundVolume)
            bgSound.play()
           
        }
       
    }else{
        let startingVolume=Sliders.fire.value
        controls.clearSound()
        if(startingVolume==0){
            Sliders.fire.value=50
        }else{
            Sliders.fire.value=startingVolume
        }        
        Soundboard.fire.classList.toggle("activeBgSound")
        bgSound.play()
        bgSound.volume=(Sliders.fire.value)/100
        activeBgSound=bgSound
        bgSound.loop=true
        activeSoundVolume=bgSound.volume
    } 
})


Controllers.lightMode.addEventListener("click",()=>{
    document.getElementById("body").classList.add("DarkMode")
    document.getElementById("timer-wrapper").classList.add("DarkMode")
    document.getElementById("controllers-wrapper").classList.add("DarkMode")
    document.getElementById("soundboard-wrapper").classList.add("DarkMode")
    // document.getElementById("DarkModeButton").classList.add("DarkMode")

    document.getElementById("lightMode").classList.add("hidden")
    document.getElementById("darkMode").classList.remove("hidden")

})


Controllers.darkMode.addEventListener("click",()=>{
    document.getElementById("body").classList.remove("DarkMode")
    document.getElementById("timer-wrapper").classList.remove("DarkMode")
    document.getElementById("controllers-wrapper").classList.remove("DarkMode")
    document.getElementById("soundboard-wrapper").classList.remove("DarkMode")
    document.getElementById("DarkModeButton").classList.remove("DarkMode")

    document.getElementById("darkMode").classList.add("hidden")
    document.getElementById("lightMode").classList.remove("hidden")


})




}

