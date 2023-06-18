const username = document.querySelector('#Username')
const password = document.querySelector('#password')
const button = document.querySelector('#sumbit')
const form = document.querySelector('.form')
document.addEventListener("keydown", (e) => {if(e.code == "Enter") check()})
button.onpointerdown = check
function check(){
    if(username.value == "") {
        stopSumbitting('Invalid username')
        return false
    }
    else if(password.value == "") {
        stopSumbitting('Fill password box')
        return false
    }
    form.submit()
}
function stopSumbitting(reason) {
    button.innerHTML = `<strong style="font-size: 1.4rem;"> ${reason} </strong>`
    return false
}