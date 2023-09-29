const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=>{
     panel.addEventListener('click', ()=>{
        console.log("Clicked")
        removeActiveClasses();
        panel.classList.add('active')
     })
})

function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}