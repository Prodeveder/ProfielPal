


// The Remember Me Section 
const rememberMe = document.querySelector('.remember__me');
const rememberMeSpan = document.querySelector('.__option__container span');


rememberMeSpan.addEventListener('click', ()=> {
    if (rememberMe.checked) {
        rememberMe.checked = false;
    }else {
        rememberMe.checked = true
    }

})


