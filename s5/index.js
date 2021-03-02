import "./screens/register.js"
import "./components/inputWrapper.js"
import "./screens/login.js"


export function redirect(screenName){
    if(screenName === 'register'){
        document.getElementById('app').innerHTML = `
        <register-screen></register-screen>`
    } else if(screenName === 'login'){
        document.getElementById('app').innerHTML=`
        <login-screen></login-screen>`
    }  else if (screenName === 'story'){
        document.getElementById('app').innerHTML=`
        day la man story `
      
}
redirect('register')