const Display={
    minutes:document.getElementById("minutes"),
    seconds:document.getElementById("seconds"),
}

const Controllers = {
    play:document.getElementById("buttonPlay"),
    pause:document.getElementById("buttonPause"),
    stop:document.getElementById("buttonStop"),
    decrease:document.getElementById("buttonTimeDecrease"),
    increase:document.getElementById("buttonTimeIncrease"),
}

const Soundboard={
    forest:document.getElementById("forest-button"),
    rain:document.getElementById("rain-button"),
    coffee:document.getElementById("coffee-button"),
    fire:document.getElementById("fire-button"),
}
const Sounds={
    buttonPress: new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"),
    kitchenTimer: new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"),
    forest:document.getElementById("forest-sound"),
    rain:document.getElementById("rain-sound"),
    coffee:document.getElementById("coffee-sound"),
    fire:document.getElementById("fire-sound"),
}

export{
    Display,
    Controllers,
    Soundboard,
    Sounds,
}