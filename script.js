const errMsg = document.querySelector('.err-msg')
const btn = document.querySelector('.submit-btn');
const email = document.getElementById('email')

const regX = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.a-z)?/

btn.addEventListener('click', checkSubmit)

function checkSubmit(e) {
    e.preventDefault()
    let emailVal = email.value.trim()
    if (emailVal.match(regX)) {
        errMsg.textContent = 'this is a valid email format'
        errMsg.style.color = 'green';
        errMsg.style.fontStyle = 'italic';
        errMsg.style.fontSize = '0.8rem';
        errMsg.style.padding = '0 1rem';
    }
    else if (emailVal === '' || emailVal === null) {
        errMsg.textContent = 'email cannot be empty'
        errMsg.style.color = 'hsl(0, 93%, 68%)';
        errMsg.style.fontStyle = 'italic';
        errMsg.style.fontSize = '0.8rem';
        errMsg.style.padding = '0 1rem';

    }
    else {
        errMsg.textContent = 'enter a valid email format'
        errMsg.style.color = 'hsl(0, 93%, 68%)';
        errMsg.style.fontStyle = 'italic';
        errMsg.style.fontSize = '0.8rem';
        errMsg.style.padding = '0 1rem';

    }

}