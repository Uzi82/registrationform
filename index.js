const username = document.querySelector('#Username')
const password = document.querySelector('#password')
const checkPassword = document.querySelector('#checkPassword')
const button = document.querySelector('#sumbit')
const form = document.querySelector('.form')
let PasswordMismatch = true
checkPassword.oninput = function() {
    if(checkPassword.value != password.value) {
        PasswordMismatch = false
    }
    else PasswordMismatch = true
}
document.addEventListener("keydown", (e) => {if(e.code == "Enter") check()})
button.onpointerdown = check
function check(){
    if(username.value == "") {
        stopSumbitting('Invalid username')
        return false
    }
    else if(password.value == "" || checkPassword.value == "") {
        stopSumbitting('Fill password boxes')
        return false
    }
    else if(PasswordMismatch == false) {
        stopSumbitting('Password mismatch')
        return false
    }
    form.submit()
}
function stopSumbitting(reason) {
    button.innerHTML = `<strong style="font-size: 1.4rem;"> ${reason} </strong>`
    return false
}