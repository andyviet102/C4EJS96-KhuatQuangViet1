const style = `
#create-post{
    width: 60%;
    margin: auto;
    margin-top: 20px;
}
#create-post textarea{
    width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    outline: none;
}
.post{
    background-color: #1976d1;
    color: #fff
    padding: 10px 15px;
    border-radius: 5px;
}
`
import { getItemLocalStorage } from './utils.js'
class createPost extends HTMLElement{
    constructor(){
    super();
    this._shadowDom= this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowDom.innerHTML = `
        <style>${style}</style>
        <form action="" id="create-post">
        <textarea name="content" id="content" cols="30" rows="6" placeholder="Say something"></textarea> <br>
       <button class="post-btn">Post</button>
       </form>
        `
        const postForm = this._shadowDom.getElementById('create-post')
        postForm.addEventListener('submit', (e)=>{
          const content = postForm.content.value
          if(content.trim()===''){
            alert('vui long nhap noi dung bai viet')
          }
          const user = getItemLocalStorage('currentUser')
          const data= {
            createBy: user.id,
            createAt: new Date().toISOString(),
            content: content,
            comments: [],
            authorName: user.fullName,
            isShow: true,
          }
          firebase.firestore().collection('post').add(data)
          postForm.content.value = ''
        })
    }

}
window.customElements.define('create-post', createPost)