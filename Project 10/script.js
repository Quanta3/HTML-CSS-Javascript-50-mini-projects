const jokeEl = document.querySelector('.joke')
const jkbtn = document.querySelector('.btn')

jkbtn.addEventListener('click', generateJoke);
generateJoke()
async function generateJoke(){

    const config = {
        headers : {
            'accept': 'application/json'
        }
    }
   const res =  await fetch('https://icanhazdadjoke.com', config)
   const data = await res.json()
   jokeEl.innerHTML = data.joke
}