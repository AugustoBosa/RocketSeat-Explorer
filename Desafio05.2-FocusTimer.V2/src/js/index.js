import { Display,
    Controllers,
    Soundboard,
    Sounds,
    Sliders,} from "./elements.js"

import Events from "./events.js"
import Controls from "./functions.js"


const controls = Controls({Display,Sounds,Controllers,})

Events({Controllers,
    Soundboard,
    Sounds,
    controls,
    Sliders,
})




Sounds.buttonPress.volume=.75
Sounds.kitchenTimer.volume=1
Sounds.forest.volume=0
Sounds.rain.volume=0
Sounds.coffee.volume=0
Sounds.fire.volume=0




