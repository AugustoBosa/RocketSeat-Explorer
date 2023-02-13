import {GithubUser} from "./githubUser.js"

class Favorites{
    constructor(app){
        this.app = document.getElementById("app")
        this.load()
    }
    
    load(){
        this.favUsers=JSON.parse(localStorage.getItem('@github-favorites:')) || []

    }
        
    
    save(){
        localStorage.setItem('@github-favorites:',JSON.stringify(this.favUsers))
    }

    async addFavorite(user){
        try{

            if(this.favUsers.find(favUser=>favUser.login==user)) {
                throw new Error('User already on the list.')
            }

            let newUser = await GithubUser.search(user) 

            if(newUser.login==undefined){
                throw new Error('User not found.')
            }

    
            this.favUsers=[newUser,...this.favUsers]
            this.update()
            this.save()

        }catch(error){
            alert(error.message)
        }

       

    }

    delete(user){
        this.favUsers=this.favUsers.filter(entry=>entry.login!=user.login)
      
        this.save()
        this.update()
    }


}

export class FavoritesView extends Favorites{
    constructor(app){
        super(app)

        this.update()
        this.onadd()

    }

    onadd(){
        const addButton = this.app.querySelector('.search button')
        addButton.onclick=()=>{
            const {value} = this.app.querySelector('.search input')
            this.addFavorite(value)
            this.app.querySelector('.search input').value=""
     
        }

    }

   update(){
    this.tbody = this.app.querySelector('table tbody')
    this.clearRows()

    if (this.favUsers.length>0){
        this.favUsers.forEach(user=>{
            const row = this.createRow()
    
            row.querySelector('.user img').src=`https://github.com/${user.login}.png`
            row.querySelector('.user img').alt=`Image of ${user.name}`
            row.querySelector('.user a').href=`https://github.com/${user.login}`
            row.querySelector('.user p').textContent=user.name
            row.querySelector('.user span').textContent=`/${user.login}`
            row.querySelector('.user span').alt=user.login
            row.querySelector('.repos').textContent=user.public_repos
            row.querySelector('.followers').textContent=user.followers
    
            row.querySelector('.remove').addEventListener("click",()=>{
                confirm("Tem certeza que deseja remover?") && this.delete(user)
            })
    
            this.tbody.append(row)
        })
    }else{
        this.noUsers()
    }

  

   }

   clearRows(){

        this.tbody.querySelectorAll('tr').forEach((tr)=>{
            tr.remove()

        })
    }

    createRow(){ 
        const row=document.createElement("tr")

        row.innerHTML=`
            <td class="user">
                <img src="" alt="">
                <a href="" target="_blank">
                    <p></p>
                    <span></span>
                </a>
            </td>
            <td class="repos">
            
            </td>
            <td class="followers">
            
            </td>
            <td>
                <button class="remove">Remover</button>
            </td>
        `
      
        return row
    }

    noUsers(){
        const row=document.createElement("tr")
        row.classList.add("noUser")
        row.innerHTML=`  <td>
        <img src="./src/images/Estrela.png" alt="Imagem de uma estrela com cara de surpresa.">
        <span>Nenhum favorito ainda</span>
        </td>`
      
        

        this.tbody.append(row)
    }
}