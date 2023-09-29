const load = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let loadc = 0;

let int= setInterval(blurc, 30)

function blurc(){
    loadc++

    if(loadc>99){
        clearInterval(int)
    }
    load.innerHTML = `${loadc}%`
    load.style.opacity = scale(loadc, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(loadc, 0, 100, 30, 0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}