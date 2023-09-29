const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
console.log('here')
btn.addEventListener('click',()=>{
    search.classList.toggle('active')
    input.focus()
})
