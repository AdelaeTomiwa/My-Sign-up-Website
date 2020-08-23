const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const passwordInput = document.querySelector('#password');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', formSubmit);

function formSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || passwordInput.value === ''){
        msg.classList = 'error-msg';
        msg.innerHTML = '<h5>Please Enter All Fields</h5>';

        setTimeout(() => msg.remove(), 5000);
    }else if(nameInput.value === nameInput.value || passwordInput.value === passwordInput.value){
        msg.classList = 'success-msg';
        msg.innerHTML = '<h5>Welcome to Campus</h5>';

        setTimeout(() => msg.remove(), 5000);

        window.location = 'welcome.html';
        
        console.log('Success');
    }

    nameInput.value = '';
    passwordInput.value = '';
}