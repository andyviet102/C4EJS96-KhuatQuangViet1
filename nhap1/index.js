import "./utils.js"
import "./screen/register1.js"
import "./components/inputWrapper.js"
import "./screen/login.js"


redirect('register');
function redirect(screenName) {
    if (screenName === 'register'){
        document.getElementById('app').innerHTML=`
        <register-screen></register-screen>`
    }
}