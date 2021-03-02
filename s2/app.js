class User {
    name;
    age;
    gender;
    description;
    image;
    constructor(name, age, gender, description, image){
        this.name = name
        this.age = age
        this.gender = gender
        this.description = description
        this.image = image
    }
    like(){}
    unlike(){}
    update(name, age, gender, description, image){
        this.name = name
        this.age = age
        this.gender = gender
        this.description = description
        this.image = image
    }
    toHTML(){
        return`
        <div class = "user-container">
        <div class = "previous">
            <
        </div>
            <img src="${this.image}"/>
            <div class= "info">
                ${this.name}
                ${this.age}
                ${this.description}
            </div>
        <div class = "next">
            >
        </div>    
        </div>    
        `
    }
}
class UserCollection{
    listUser;
    constructor(){
        this.listUser = []
        this.current = 0
    }
    addUser(user){
        this.listUser.push(user)
    }
    removeUser(index){
        this.listUser.slice(index,1)
    }
    show(){
            document.querySelector('#app').innerHTML = this.listUser[0].toHTML()
    }
    previous(){
        if( this.current >0){
            this.current--
            document.querySelector('#app').innerHTML = this.listUser[this.current].toHTML()
        }
    }
    next(){
        if(this.current < this.listUser.length -1){
            this.current++
            document.querySelector('#app').innerHTML= this.listUser[this.current].toHTML()
            this.listUserClick()
        }
    }
    listUserClick(){
        document.querySelector('.previous').addEventListener('click',()=>{
            UserCollection1.previous()
        })
        document.querySelector('.next').addEventListener('click',()=>{
            UserCollection1.next()  
        } )
    }
}
const UserCollection1 = new UserCollection()
const user1 = new User("nguyen nhat hoang", 16, "female", "depzai 1992", "https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/82934728_1306660832876700_570101688149475328_o.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_ohc=u0ryoPaA7ZUAX-Zo_dP&_nc_ht=scontent-xsp1-2.xx&oh=e5ae693840fd13aadc8f0414d40a88b5&oe=5FE16CD2")
UserCollection1.addUser(user1);
UserCollection1.show()

const user2 = new User("nguyen nhat hoang", 16, "female", "depzai 1992", "https://scontent-xsp1-2.xx.fbcdn.net/v/t31.0-8/13497840_1741395739463349_327087226812443151_o.jpg?_nc_cat=102&ccb=2&_nc_sid=cdbe9c&_nc_ohc=ESNx-UWJzvQAX8zoi-x&_nc_oc=AQmhambaXZ4gZLwYzoFg3VYMDwrYj53zPyTeSm-BFivWfrRrFkMkqrspLMN58D_YB2Q&_nc_ht=scontent-xsp1-2.xx&oh=5cd7d737074bb76fc019a6d0a66c7dd7&oe=5FE2E6D4")
UserCollection1.addUser(user2);
UserCollection1.show()

document.querySelector('.previous').addEventListener('click',() => {
    UserCollection1.previous()
})


document.querySelector('.next').addEventListener('click',() => {
    UserCollection1.next()
})
