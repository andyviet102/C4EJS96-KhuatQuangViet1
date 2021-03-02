const style = `
 <style> 
    .card{
        font-family: sans-serif;
        margin-right: 20px;
        border: 1px solid #dbdbdb;
        color: #363636;
        display: flex;
        justify-content: space-between;
    }
    .title{
        font-size: 1.5 rem;
        font-weight: 600;
    }
    .card-body{
        border: 3px solid #dbdbdb;
        padding: 20px;
        
    }
    .img{
        width: 100%;
    }

 </style>
`
class CardComponent extends HTMLElement{
    constructor(){
        super()
        //khai bao shadow_dom
        this._shadowDOm = this.attachShadow({mode: 'open'})
        this.imgSrc = this.getAttribute('imgsrc')
        this.title = this.getAttribute("tit")
        this.description = this.getAttribute("des")
        this._shadowDOm.innerHTML = `
        ${style}
         <div class="card"> 
         <img src="${this.imgSrc}"></img>
         <div class="card-body">
         <div class="title">${this.title}</div>
         <div class="description">${this.description}</div>
        </div>
         </div>
        `
    }
}
window.customElements.define('card-container', CardComponent)