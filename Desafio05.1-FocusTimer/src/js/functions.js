export default function Controls({Display,Sounds,Controllers}){
    
    
    let startTime ="25"
    let pausedTimer=false
    let timer
    




    function timeIncrease(sound){
        let minutes = Number(Display.minutes.innerText)
        if(minutes<"95"){
        minutes = minutes+5
        Display.minutes.innerText=String(minutes).padStart(2,"0")
        }
    
        if(sound){Sounds.buttonPress.play()}
    }
    function timeDecrease(sound){
        let minutes = Number(Display.minutes.innerText)
        if(minutes>"05"){
        minutes = minutes-5
        Display.minutes.innerText=String(minutes).padStart(2,"0")
        }
    
        if(sound){Sounds.buttonPress.play()}
    }
    
    function playTimer(sound){
        if(!pausedTimer){   
             startTime= Number(Display.minutes.innerText)
        }
        Controllers.play.classList.add("hidden")
        Controllers.pause.classList.remove("hidden")
    
        if(sound){Sounds.buttonPress.play()}
        
        countdown()
        
    }
    function pauseTimer(sound){
    
        pausedTimer=true
        clearTimeout(timer)
    
        Controllers.play.classList.remove("hidden")
        Controllers.pause.classList.add("hidden")
    
        if(sound){Sounds.buttonPress.play()}
    
    }
    function resetTimer(sound){
        pausedTimer=false
        clearTimeout(timer)
        Display.minutes.innerText=String(startTime).padStart(2,"0")
        Display.seconds.innerText="00"
    
        Controllers.play.classList.remove("hidden")
        Controllers.pause.classList.add("hidden")
    
        if(sound){Sounds.buttonPress.play()}
    
    }
    
    function countdown(){
        timer=setTimeout(()=>{
        let minutes = Number(Display.minutes.innerText)
        let seconds = Number(Display.seconds.innerText)
    
    
        if(minutes==0 && seconds==0){
            pauseTimer(false)
            resetTimer(false)
    
            Sounds.kitchenTimer.play()
    
            return
        }
    
        if(seconds==0){
            minutes--
            seconds=60
        } 
        
        seconds--
        updateDisplay(minutes,seconds)
        
        countdown()
    
    },1000)
    }
    function updateDisplay(minutes,seconds){
        Display.minutes.innerText=String(minutes).padStart(2,"0")
        Display.seconds.innerText=String(seconds).padStart(2,"0")
    }
    
    function clearSound(){
       let soundButtons = document.querySelectorAll(".sound-button")
        soundButtons.forEach(soundButton=>{
            soundButton.classList.remove("activeBgSound")
        })
    }
 
    return{
        timeIncrease,
        timeDecrease,
        playTimer,
        resetTimer,
        clearSound,
    }
}






