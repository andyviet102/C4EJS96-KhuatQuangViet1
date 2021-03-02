const style=`
<style>
.card{
    font-family: sans-serif;
    margin-right: 20px;
    border: 1px solid #dbdbdb;
    display: flex;
    justify-content: space-around;
}
.card-body{
    border: 3px solid #dbdbdb
    padding: 20px;
}
</style>
`



class CardStudent extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
        this.className = this.getAttribute("classN")
        this.fullName = this.getAttribute("name")
        this.age = this.getAttribute("age")
        this.address = this.getAttribute("address")
        const{ className,fullName,age,address} =this
        this._shadowDom.innerHTML = `
        ${style}
        <div class = "card">
        <div class="card-body">
        <div class="className">${this.className}</div>
        <div class="fullName">${this.fullName}</div>
        <div class="age">${this.age}</div>
        <div class="address">${this.address}<div>
        </div>
        </div>
        `
    }
} 
window.customElements.define("card-container", CardStudent );
// định bảo j em đang bảo là may cai import cac thu day ko phai la link cn voi nhau a hay cach de nhat bay gio la cu truyen thang du lieu vao html cho no hien ra thoi
//  định truyền từ studentColeection vào student á vang muon lam guong cai module y a 
