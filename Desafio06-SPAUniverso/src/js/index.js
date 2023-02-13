import { Router } from "./router.js"

const navbar=document.querySelectorAll("li")

navbar.forEach(pageLink=>{
    pageLink.addEventListener("click",()=>{
        route()
        

        // console.log("Tu clicou num link")

    })
})



let router=new Router()
router.add("/","/src/html/home.html")
router.add("/universe","/src/html/universe.html")
router.add( "/exploration","/src/html/exploration.html")
router.add( 404,"/src/html/404.html")


router.changePage()
window.onpopstate = ()=>router.changePage()
window.route=()=>router.route()
