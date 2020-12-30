const style = `
*{
  padding: 0;
  margin: 0;
}
h1{
  margin: 5px ;
}

.title-register{
  display:flex;
  font-weight: bold;
  font-style: italic;
  font-size: 2rem;
  width: 250px;
  margin-left: 40%;
  top:0;
}
.tag{
  margin: 1% 10% 0.5% 20%;
  font-weight: bold;
}
.input-register{
  margin: 0 10% 0% 20%;
  width: 450px;
  height: 45px;
  border-radius: 10px;
  border: 2px solid gray ;
}
.input-img{
  width: 250px;
  margin: 3%;
  margin: 0 10% 0% 20%;
  width: 450px;
  height: 45px;
  border-radius: 10px;
  border: 2px solid gray;
}
.sex-tag {
  position:absolute;
  top:50%;
  left: -19%;
  margin: 0 10% 0% 80% ;
  width: 100px;
  height: 100px;
}
.tag-birth{
  position:absolute;
  top:20%;
  left: -23%;
  margin: 0 10% 0% 80% ;
}
button{
  cursor: pointer;
}

.birth{
 width: 250px;
 margin: 3%;
 margin: 0 10% 0% 20%;
 width: 250px;
 height: 45px;
 border-radius: 10px;
 border: 2px solid gray;
}
.test{
display: flex;
}
.btn-sothich{
  margin: 0 10% 0% 20%;
  width: 150px;
  height: 25px;
  border-radius: 5px;
  border: 2px solid gray ;
}

.btn-register, a{
  width: 200px;
  height: 40px;
  border-radius: 25px;
  
  margin-left: 40%;
  margin-top: 3%;
}

h4, .title-logo{
  text-align: center;
  font-weight: bold;
};

.btn-continue{
  margin-left: 35%;
}

button:hover {
    border-color:rgb(0 135 180);
}

.modal {
  background: aquamarine;
  display: none;
  position: fixed;
  z-index: 1;
  left: 35%;
  top: 0;
  width: 300px;
  overflow: auto;
  padding-top: 60px;
  border-radius: 20px;
  padding: 1rem 0px;
  display: block;
  height: 350px;
}

.modal-content {
  background-color: red;
  margin: 5% auto 15% auto; 
  border: px solid #888;
  width: 392px;
  height: 580px;
  border-radius: 15px;
}
.container{
  text-align: left;
 padding: 10px 20px 10px 20px;
 margin: 20px 20px 20px 20px;
}
.title-welcome{
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}
.content-welcome{
  font-size: 14px;
  text-decoration: solid;
  margin-bottom: 15px;
}

animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
  from {-webkit-transform: scale(0)} 
  to {-webkit-transform: scale(1)}
}
  
@keyframes animatezoom {
  from {transform: scale(0)} 
  to {transform: scale(1)}
}
 
 @media only screen and (max-width: 768px){
    #register-form{
      width: 100%;
    }
  }
`
import { redirect } from '../index.js'
import "../utils.js";
class RegisterSceen extends HTMLElement{
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({mode: 'open'})
  }
  connectedCallback() {
    this._shadowRoot.innerHTML = `
      <style>
        ${style}
      </style>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200&display=swap" rel="stylesheet">
      <div class="register-container">
      <form id="register-form">
      <h1 style="font-size: 35px;font-family: 'JetBrains Mono', monospace;"><i class="fa fa-venus-mars" aria-hidden="true"></i>tinher</h1>
          <div class="title-register">LẬP TÀI KHOẢN</div>
          <p class="tag"> Tên riêng</p>
              <input class="input-register" id="name" type="text"  placeholder="   Tên riêng">
          <p class="tag"> Địa chỉ Email</p>
              <input class="input-register" id="email" type="text"  placeholder="  Tinher@gmail.com">
          <p class="tag">Password</p>
              <input class="input-register" id="password" type="password" placeholder="  Password">
          <p class="tag">ConfirmPassword</p>
              <input class="input-register" id="confirm-password" type="password" placeholder="  Confirm password">
              <div class="tag-birth">
                   <p class="tag">Sinh Nhật</p>
                      <input class="birth" id="birth" type="date"  placeholder="    NN/TT/NNNN"  max="2003-01-01" >
              </div>
               <div class="sex-tag">
                   <p class="tag"> Giới tính</p>
                   <input id="gender" type="radio" value="Name" name="gender" /> Nam <br/>
                   <input id="gender" type="radio" value="Nữ" name="gender" /> Nữ <br/>
              </div>
              <div class="tag-img">    
                  <p class="tag"> Ảnh hồ sơ</p>
                      <input class="input-img" id='avatar'type="file" id="img-info" width="48"height="48">
              </div>
              <div class="tag-btn-sothich">
              <div class="tag"> Đam mê</div>
              <button class="btn-sothich" id="btn-sothich" type="button">+ Thêm đam mê</button>
              </div>
        <div id="modal" class="modal" style="padding: 1rem 0; display:none;">
          <form class="modal-content animate" id="continue" >
            <div class="title-logo">Đam mê</div>
              <h4> Hãy cho mọi người biết đam mê của bạn bằng cách chọn chúng vào hồ sơ</h4>
                <div class="container"style="margin-left: 20%;">     
            <input id="sothich" class="btn-sothich-modal1" type="radio" value="thethao" /> Thể thao <br/>
            <input id="sothich" class="btn-sothich-modal1" type="radio" value="nghenhac"  /> Nghe nhạc <br/>
            <input id="sothich" class="btn-sothich-modal1" type="radio" value="xemphim"  /> Xem phim <br/>
            <input id="sothich" class="btn-sothich-modal1" type="radio" value="dulich"  /> Du lịch <br/>
            <input id="sothich" class="btn-sothich-modal1" type="radio" value="thoitrang"  /> Thời trang <br/>
            <input id="sothich" class="btn-sothich-modal1" type="radio" value="boiloi" /> Bơi lội <br/>
            <input id="sothich" class="btn-sothich-modal1" type="radio" value="buncha"  /> Bún chả <br/>
            <input id="sothich" class="btn-sothich-modal1" type="radio" value="trada"  /> Trà đá <br/>
            <input id="sothich" class="btn-sothich-modal1" type="radio" value="Mol"  /> Mol<br/>
            
                </div> 
                <button class="btn-continue"id="btn-continue" type="submit">Continue</button>
            </form>
         </div>
              
                  <button class="btn-register" id="btnRegister"type="submit">Register</button></br>
                  <a id="redirect1" >Already have an account ? Login</a></br>
      </form>
  </div>
    `
    var modal = this._shadowRoot.getElementById('modal');
    let btnSothich = this._shadowRoot.getElementById('btn-sothich');
    btnSothich.addEventListener('click',function(e){
      modal.style.display="block";
    });
    let btnContinue =  this._shadowRoot.getElementById('btn-continue')
    btnContinue.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "none";
    });
    const btnRegister = this._shadowRoot.getElementById('btnRegister')
    btnRegister.addEventListener('click', async(e) => { 
      e.preventDefault()
      const name = this._shadowRoot.getElementById('name').value
      const email = this._shadowRoot.getElementById('email').value
      const password = this._shadowRoot.getElementById('password').value
      const confirmPassword = this._shadowRoot.getElementById('confirm-password').value
      const birth = this._shadowRoot.getElementById('birth').value
      const gender = this._shadowRoot.getElementById('gender').value
      const image = this._shadowRoot.getElementById('avatar').value
      const sothich = this._shadowRoot.getElementById('sothich').value
      const btnSothich = this._shadowRoot.getElementById('btn-sothich').value
      const btnContinue = this._shadowRoot.getElementById('btn-continue').value
      const redirect1 = this._shadowRoot.getElementById('redirect1').value
      let isValid = true
      if (name.trim() === '') {
        isValid = false
        this.setError('name', 'Please input name')
      } else {
      }
      if (email.trim() === '') {
        isValid = false
        this.setError('email', 'Please input email')
      }
      if (password.trim() === '') {
        isValid = false
        this.setError('password', 'Please input password')
      }
      if (confirmPassword.trim() === '') {
        isValid = false
        this.setError('confirm-password', 'Please input confirm password')
      }
      if (password !== confirmPassword) {
        isValid = false
        this.setError('confirm-password', "Password didn't match")
      }
      if (isValid== false) {
        return
      }
      const user = {
        Name: name,
        email: email,
        birth: birth,
        gender: gender,
        image: image,
        sothich: sothich,
        password: CryptoJS.MD5(password).toString()
      }
      console.log(user);
            // const res = await firebase.firestore().collection('posts').add(newPost);
                
      // const img = postForm.file.files
      // if(img.length > 0){
      //     const image = img[0]
      //     const url= await uploadFileToStorage(image)
      //     this.updateListFile(url, res.id)
      // }
      // const postForm = this._shadowRoot.querySelector('#');  
    //   postForm.content.value= '';
    //   updateListFile(url,id){
    //     const dataUpdate = {
    //         files: firebase.firestore.FieldValue.arrayUnion(url)
    //     }
    //     firebase.firestore()
    //     .collection('posts')
    //     .doc(id)
    //     .update(dataUpdate)
    // }
      // nếu email đã tồn tại rồi thì trả ra true 

      const check = await this.checkEmailExist(email)
      if (check) {
        alert('Email đã được đăng ký')
      } else {
        firebase.firestore().collection('users').add(user)
        alert('Đăng ký thành công')
        redirect('login')
      }
    })

    this._shadowRoot.getElementById('redirect1')
    .addEventListener('click', () => {
      redirect('register')
    })
  }
  setError(id, message) {
    this._shadowRoot.getElementById(id)
    .setAttribute('error', message)
  }
  async checkEmailExist(email) {
   const res = await firebase.firestore().collection('users')
    .where('email', '==' , email).get()
    return !res.empty
  }
}
window.customElements.define('register1-screen', RegisterSceen)