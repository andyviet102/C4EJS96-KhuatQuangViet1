
const style = `
.login-container{
  width: 100vw;
  height: 100vh;
  background-image: url("https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492113688/articles/2016/04/04/the-powerpuff-girls-are-back-and-just-as-feminist-as-ever/160403-zimmerman-powerpuff-girls-tease_gswqn9");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
}
#login-form{
    width: 30%;
    background: #ffffff;
    height: 100vh;
    padding:  0px 20px;
}
h1{
    text-align: center;
    color: #b3e1db
}
button{
    background: #80d6ff;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px; 
}
`
import { redirect } from '../index.js'
import {getDataFromDoc, getDataFromDocs } from '../utills.js'
class loginScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML = `
        <style>
        ${style}
        </style>
        <div class="login-container">
            <form action="" id="login-form">
                <h1>CI PROJECT</h1>
                <input-warpper id="email" type="text" placeholder="email"></input-warpper>
                <input-warpper id="password" type="password" placeholder="password"></input-warpper>
                <button>login</button>
                <a id="redirect">Dont have an account? Register</a> 

            </form>
        </div>
        `
    const loginForm = this._shadowRoot.getElementById('login-form')
    loginForm.addEventListener("submit", async(e) =>{
        e.preventDefault();
        // console.log(this._shadowRoot.getElementById('first-name').value)
        // const firstName = this._shadowRoot.getElementById('first-name').value;
        // const lastName = this._shadowRoot.getElementById('last-name').value;
        const email = this._shadowRoot.getElementById('email').value;
        const password = this._shadowRoot.getElementById('password').value;
        // const confirmpassword = this._shadowRoot.getElementById('confirmpassword').value;
        let isValid = true
        // if(password === confirmpassword)
        //     const acc = {
        //     name: `${firstName}`,
        //     email: `${email}`,
        //     password: `${CryptoJS.MD5(password)}`
        //     }
        //     alert("dang ky thanh cong")
        //     firebase.firestore().collection('users').update(acc)
        // }    else{ alert("chua duoc")
       
        // {
        //     const acc ={
        //         name : `${firstName}`,
        //         email : `${email}`,
                // password : `${CryptoJS.MD5(password)}`
        //     }
        //     firebase.firestore().collection("users").add(acc);
        //     alert("ok shop")
        // }
        // else
        // {
        //     alert("nhap vao de");
        // }
        // if(firstName.trim() === ''){
        //     isValid = false
        //     this.setError('first-name', 'please input first name')
        // }
        // if(lastName.trim() === ''){
        //     isValid = false
        //     this.setError('last-name', 'please input last name')
        // }
        if(password.trim() === ''){
            isValid = false
            this.setError('password', 'please input password')
        }
        // if(confirmpassword.trim() === ''){
        //     isValid = false
        //     this.setError('confirmpassword', 'please input confirmpassword')
        // }
        if(email.trim() === ''){
            isValid = false
            this.setError('email', 'please input email')
        }
        // if(password !== confirmpassword){
        //     isValid = false
        //     this.setError('confirmpassword'," password didn't match")
        // }

        if(!isValid){return}

        // const user = {
        //     fullName: firstName+ " " +lastName,
        //     email: email,
        //     password: CryptoJS.MD5(password).toString()
        // }
        // // neu email da ton tai roi thi tra ra true 
        // const check = await this.checkEmailExist(email)
        // if (check){
        //     alert('email da ton tai')
        // } else{
        //     firebase.firestore().collection('users').add(user)
        //     alert("dang ky thanh cong")
        // }
        const user = await firebase.firestore().collection('users')
        .where('email', '==', email)
        .where('password', '==', CryptoJS.MD5(password).toString())
        .get()
        if(user.empty){
            alert('sai email/password')
        } else {
            console.log(getDataFromDocs(user)[0])
        }
    })
    this._shadowRoot.getElementById('redirect').addEventListener('click',() =>{redirect('register')})

    }
    setError(id, message){
        this._shadowRoot.getElementById(id).setAttribute('error', message)
    }

    async checkEmailExist (email){
        const res = await firebase.firestore().collection('users').where('email', '==',email).get()
        // console.log(res)
        return !res.empty
    }
}


 window.customElements.define("login-screen",  loginScreen)