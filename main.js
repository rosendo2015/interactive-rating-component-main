const btnSubmit = document.querySelector('#btnSubmit');
const state = document.querySelector('.state');
const Note1 = document.querySelector('#note1');
const Note2 = document.querySelector('#note2');
const Note3 = document.querySelector('#note3');
const Note4 = document.querySelector('#note4');
const Note5 = document.querySelector('#note5');
const thankyou = document.querySelector('.thankyou');
const NoteSelected = document.querySelector('#noteSelected')


btnSubmit.addEventListener('click', () => {
    state.classList.add('hide');
    thankyou.classList.remove('hide');
    console.log(btnSubmit)
})
Note1.addEventListener('click', () => {
    Note1.classList.add('selected')
    Note2.classList.remove('selected')
    Note3.classList.remove('selected')
    Note4.classList.remove('selected')
    Note5.classList.remove('selected')
    NoteSelected.textContent = "1"
})
Note2.addEventListener('click', () => {
    Note1.classList.remove('selected')
    Note2.classList.add('selected')
    Note3.classList.remove('selected')
    Note4.classList.remove('selected')
    Note5.classList.remove('selected')
    NoteSelected.textContent = "2"
})
Note3.addEventListener('click', () => {
    Note1.classList.remove('selected')
    Note2.classList.remove('selected')
    Note3.classList.add('selected')
    Note4.classList.remove('selected')
    Note5.classList.remove('selected')
    NoteSelected.textContent = "3"
})
Note4.addEventListener('click', () => {
    Note1.classList.remove('selected')
    Note2.classList.remove('selected')
    Note3.classList.remove('selected')
    Note4.classList.add('selected')
    Note5.classList.remove('selected')
    NoteSelected.textContent = "4"
})
Note5.addEventListener('click', () => {
    Note1.classList.remove('selected')
    Note2.classList.remove('selected')
    Note3.classList.remove('selected')
    Note4.classList.remove('selected')
    Note5.classList.add('selected')
    NoteSelected.textContent = "5"
})