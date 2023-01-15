const btnSubmit = document.querySelector('#btnSubmit');
const state = document.querySelector('.state');
const thankyou = document.querySelector('.thankyou');


btnSubmit.addEventListener('click', () => {
    state.classList.add('hide');
    thankyou.classList.remove('hide');
    console.log(btnSubmit)
    
})