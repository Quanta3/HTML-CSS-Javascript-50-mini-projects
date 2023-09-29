const open = document.getElementById('open')
const close = document.getElementById('close')

const container = document.querySelector('.container')
const circle =document.querySelector('.circle')
const cont=document.querySelector('.circle-container')
console.log("here")

open.addEventListener('click',()=>container.classList.add('show-nav'))
open.addEventListener('click',()=>circle.classList.add('show-nav'))
open.addEventListener('click',()=>cont.classList.add('show-nav'))



close.addEventListener('click',()=>container.classList.remove('show-nav'))
close.addEventListener('click',()=>circle.classList.remove('show-nav'))
close.addEventListener('click',()=>cont.classList.remove('show-nav'))





