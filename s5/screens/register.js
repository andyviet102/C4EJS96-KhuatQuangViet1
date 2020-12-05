
const style = `
.register-container{
  width: 100vw;
  height: 100vh;
  background-image: url("https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492113688/articles/2016/04/04/the-powerpuff-girls-are-back-and-just-as-feminist-as-ever/160403-zimmerman-powerpuff-girls-tease_gswqn9");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
}
#register-form{
    width: 30%;
    background: #ffffff;
    height: 100vh;
}
h1{
    text-align: center;
    color: #b3e1db
}
`

class ResgisterScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML = `
        <style>
        ${style}
        </style>
        <div class="register-container">
            <form action="" id="register-form">
                <h1>CI PROJECT</h1>
                <input-warpper id="first-name" type="text" placeholder="First name"></input-warpper>
                <input-warpper id="last-name" type="text" placeholder="last name"></input-warpper>
                <input-warpper id="email" type="text" placeholder="email"></input-warpper>
                <input-warpper id="password" type="password" placeholder="password"></input-warpper>
                <input-warpper id="confirmpassword" type="password" placeholder="confirm password"></input-warpper>
                <button>Resgister</button>
            </form>
        </div>
        `
    const resgisterForm = this._shadowRoot.getElementById('register-form')
    resgisterForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        // console.log(this._shadowRoot.getElementById('first-name').value)
        const firstName = this._shadowRoot.getElementById('first-name').value;
        const lastName = this._shadowRoot.getElementById('last-name').value;
        const email = this._shadowRoot.getElementById('email').value;
        const password = this._shadowRoot.getElementById('password').value;
        const confirmpassword = this._shadowRoot.getElementById('confirmpassword').value;
        if(password === confirmpassword)
        //     const acc = {
        //     name: `${firstName}`,
        //     email: `${email}`,
        //     password: `${CryptoJS.MD5(password)}`
        //     }
        //     alert("dang ky thanh cong")
        //     firebase.firestore().collection('users').update(acc)
        // }    else{ alert("chua duoc")
       
        {
            const acc ={
                name : `${firstName}`,
                email : `${email}`,
                password : `${CryptoJS.MD5(password)}`
            }
            firebase.firestore().collection("users").add(acc);
            alert("ok shop")
        }
        else
        {
            alert("nhap ;ao de");
        }
    
    }
     )
    }
}
 window.customElements.define("resgister-screen",  ResgisterScreen)