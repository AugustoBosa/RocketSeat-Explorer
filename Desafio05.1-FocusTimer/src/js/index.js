import { Display,
    Controllers,
    Soundboard,
    Sounds,} from "./elements.js"

import Events from "./events.js"
import Controls from "./functions.js"


const controls = Controls({Display,Sounds,Controllers})

Events({Controllers,
    Soundboard,
    Sounds,
    controls,
})




Sounds.buttonPress.volume=.1
Sounds.kitchenTimer.volume=.3







