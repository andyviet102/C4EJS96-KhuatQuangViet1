// import {getItemLocalStorage, uploadFileToStorage} from "./utils.js";
// class saveData extends{
//     constructor(){
//         super()
//         this._shadowRoot = this.attachShadow({mode:'open'})
//     }
// }

const settingForm = this._shadowRoot.querySelector('#setting-form');
const tenrieng = this._shadowRoot.querySelector('#name');
const email = this._shadowRoot.querySelector('#email');
const btnsave = this._shadowRoot.querySelector('#btn-save')




btnsave.addEventListener("click",async e => {
    e.preventDefault();
    const tenrieng = settingForm.tenrieng.value;
    if (tenrieng.trim() === "") {
        alert("Vui lòng nhập nội dung");
    }
    else {
        const settingUser = getItemLocalStorage('settingUser');
        const newSet = {
            'userID': settingUser.id,
            'name': tenrieng,
            'email': email
        }
        const res = await firebase.firestore().collection('setting').add(newSetting);
        
        const img = settingForm.file.files
        if(img.length > 0){
            const image = img[0]
            const url= await uploadFileToStorage(image)
            this.updateListFile(url, res.id)
        }
        
        settingForm.content.value= '';
    }
    
})

// updateListFile(url,id){
// const dataUpdate = {
//     files: firebase.firestore.FieldValue.arrayUnion(url)
// }
// firebase.firestore()
// .collection('posts')
// .doc(id)
// .update(dataUpdate)
// }

// window.customElements.define('create-post', CreatePot);