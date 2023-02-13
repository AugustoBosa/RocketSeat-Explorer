export class Router{
    routes={}

    add(pathName,path){
        this.routes[pathName]=path
    }

  route(event){
        event=event||window.event
        event.preventDefault()
        window.history.pushState({},"",event.target.href)
        // console.log(event)
    
        this.changePage()
    }
    
  changePage(){
        const {pathname} =window.location
        const route = this.routes[pathname] ||this.routes[404]
        fetch(route)
                .then(data => data.text())
                .then(html=>  document.querySelector("#app").innerHTML = html) 
    
    
        // console.log(route)
    }
    
}