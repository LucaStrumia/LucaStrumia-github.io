

const openModal2 = document.querySelector('.icon-calc')
const modal2 = document.querySelector('.modal-calc')
const closeModal2 = document.querySelector('.modal__close-calc')

const openModal3 = document.querySelector('.icon-belica')
const modal3 = document.querySelector('.modal-belica')
const closeModal3 = document.querySelector('.modal__close-bel') 

const openModal4 = document.querySelector('.icon-amazon')
const modal4 = document.querySelector('.modal-amazon')
const closeModal4 = document.querySelector('.modal__close-amz') 



openModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.add('modal--show-calc');
})

closeModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.remove('modal--show-calc');
})

openModal3.addEventListener('click', (e)=>{
    e.preventDefault();
    modal3.classList.add('modal--show-belica');
})

closeModal3.addEventListener('click', (e)=>{
    e.preventDefault();
    modal3.classList.remove('modal--show-belica');
})

openModal4.addEventListener('click', (e)=>{
    e.preventDefault();
   
    modal4.classList.add('modal-show-amz');
    
})

closeModal4.addEventListener('click', (e)=>{
    e.preventDefault();
    modal4.classList.remove('modal-show-amz');
})