const username = document.querySelector('#username')
const password = document.querySelector('#password')
const checkPassword = document.querySelector('#checkPassword')
const button = document.querySelector('#sumbit')
const form = document.querySelector('.form')
let PasswordMismatch = true
let reason = ''
checkPassword.oninput = function() {
    if(checkPassword.value != password.value) {
        PasswordMismatch = false
    }
    else PasswordMismatch = true
}
form.onsumbit = function(event) {
    if(username.value == "") stopSumbitting(event, 'Invalid username')
    else if(password.value == "" || checkPassword.value == "") stopSumbitting(event, 'Fill password boxes')
    else if(PasswordMismatch == false) stopSumbitting(event, 'Password mismatch')
    else return
}
function stopSumbitting(event, reason) {
    button.innerHTML = `<strong> ${reason} </strong>`
    return false
}